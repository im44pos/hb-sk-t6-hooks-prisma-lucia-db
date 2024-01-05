import { writeFileSync } from 'fs';

import { auth } from "$lib/server/lucia";
import { error, fail, redirect } from "@sveltejs/kit"
import { database } from "$lib/server/database"

import { setError, superValidate } from "sveltekit-superforms/server"

import type { Actions, PageServerLoad } from "./$types"

import { quotationSchema } from "$lib/zod/schemas";

export const load: PageServerLoad = async ({ locals, request }) => {
	// console.log("PageServerLoad @ src/routes/(app)/quotation/+page.server.ts")
	const session = await locals.auth.validate();
	// console.log("session :", session)
	// console.log("session.state :", session?.state)
	// console.log("session.sessionId :", session?.sessionId)
	// console.log("session.user.username : ", session?.user.username)
	// console.log("session.user.userId : ", session?.user.userId)
	if (!session) {
		throw redirect(302, "/login")
	};

	const form = await superValidate(request, quotationSchema)

	return {
		form,
		userId: session.user.userId,
		company_identifier: session.user.company_identifier,
		// userrole: session.user.userrole,
		// name: session.user.name,
		username: session.user.username,
		// email: session.user.email,
		
		// company_name: await database.company.findUnique({
		// 	where: {company_identifier: session.user.company_identifier},
		// 	select: {company_name}
		// }),
		
		dbcustomers: await database.customer.findMany(),
		dbmaterials: await database.material.findMany(),
		dbcolorsystems: await database.colorSystem.findMany(),
		dbsurfacetreatments: await database.surfaceTreatment.findMany(),
		quotations: await database.quotation.findMany(),
	}
};

// // https://lucia-auth.com/basics/handle-requests/#sveltekit
// // +page.server.ts
// export const load = async (event) => {
// 	const authRequest = auth.handleRequest(event);
// 	// ...
// };

// export const actions = {
// 	default: async (event) => {
// 		const authRequest = auth.handleRequest(event);
// 		// ...
// 	}
// };

export const actions: Actions = {
	logout: async ({ locals }) => {
		// console.log("Actions @ src/routes/(app)/quotation/+page.server.ts")
		const session = await locals.auth.validate();
		if (!session) return fail(400);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove session cookie
		// console.log("Logout @ src/routes/(app)/quotation/+page.server.ts session cookie is now deleted.")
		throw redirect(302, "/login"); // redirect to login page
	},

	createQuotation: async ({ request }) => {
		console.log("Actions @ routes/(app)/quotation/+page.server.ts")
		const formData = await request.formData();
		// const formData = Object.fromEntries(await request.formData());
		// // FOR DEVELOPMENT AND DEBUGGING ONLY
		console.log("This is the formData content, before Validation :\n ", formData)

		const form = await superValidate(formData, quotationSchema)
		// // FOR DEVELOPMENT AND DEBUGGING ONLY
		console.log("This is the form content, after Validation :\n ", form)

		if (!form.valid) {
			return fail(400, {
				form
			})
		}

		
		// ***********************************************************************************
		// // How to handle file uploads:
		// // https://superforms.rocks/faq#how-to-handle-file-uploads
		// // File uploads are not directly handled by Superforms. 
		// // They can be posted as usual, but schema fields containing files 
		// // will be undefined in form.data after validation.
		// // The recommended way to handle files is to grab FormData from the request and 
		// // extract the files from there, after validation:

		const file_3d = formData.get('model_3d'); // // const file = formData.get('file');
		let filename_3d = ''
		if (file_3d instanceof File) {
			// // Do something with the file.
			filename_3d = file_3d.name;
			// // FOR DEVELOPMENT AND DEBUGGING ONLY
			// console.log("\nGeselecteerd bestand : ", file_3d);
			// // Individual parameter values
			// console.log("\nfile.size            : ", file_3d.size);
			// console.log("file.type              : ", file_3d.type);
			// console.log("file.name              : ", file_3d.name);
			// console.log("file.lastModified      : ", file_3d.lastModified);
		}
		// ***********************************************************************************
		// // Alternatief:
		// // https://github.com/ciscoheat/sveltekit-superforms/discussions/173
		// ***********************************************************************************

		const file_2d = formData.get('drawing_2d');
		let filename_2d = ''
		if (file_2d instanceof File) {
			// // Do something with the file.
			filename_2d = file_2d.name
		}

		// //
		// File Upload ? ? ?
		// //


		// const file_3d = formData.get('model_3d')
		// console.log(file_3d)
		// if (!(file_3d instanceof File)){
		// 	return setError(form, 'model_3d', "File could not be read")
		// }
		// const regexcheck = /[<>:;,"'%*|\\/]/g

		// if (!(file_3d.name.endsWith(".step")||file_3d.name.endsWith(".stp")||file_3d.name.endsWith(".p21"))){
		// 	return setError(form, 'model_3d', "3D file needs to have extension .step, .stp or .p21");
		// 		// fail(400, { message: modelerror})
		// }

		// // if (regexcheck.test(file_3d.name)){
		// // 	console.log(2)
		// // 	file_3d.name =file_3d.name.replace(regexcheck, "_")
		// // 	console.log(file_3d)
		// // }
		// console.log(22)
		// const drawing_2d = formData.get('model_2d')
		// if (drawing_2d instanceof File){
		// 	console.log(drawing_2d)
		// 	if (!(drawing_2d.name.endsWith(".pdf"))) {
		// 	return setError(form, 'drawing_2d', "2D file needs to have the extension .pdf" )
		// 	}
		// 	// if (regexcheck.test(drawing_2d.name)) {
		// 	// 	drawing_2d.name = drawing_2d.name.replace(regexcheck, "_");
		// 	// 	console.log(drawing_2d)
		// 	// }

		// }

		try {
			const quotation = await database.quotation.create({
				// file = formData.get('model_3d')
				data: {
					company_id:					session.user.company_id,
					user_id:					session.user.userId,
					customer_id: 				form.data.customer_id, // // Argument `customer_id`: Invalid value provided. Expected Int or Null, provided String.
					quotation_identifier: 		form.data.quotation_identifier, // Quotation "number"
					quotation_description: 		form.data.quotation_description,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not create the quotation." })
		}

		return {
			form, 
			status: 201,
		}
	},

	// // https://nodejs.org/api/fs.html
	fileUpload: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		
		let company_dir_name = "company_dir"
		let customer_dir_name = "customer_dir"

		// // 3D Step file
		if (
			!(formData.model_3d as File).name ||
			(formData.model_3d as File).name === "undefined"
		) {
			return fail(400, {
				error: true,
				message: "Provide a file to upload"
			});
		}
		const { model_3d } = formData as { model_3d: File };

		// // Write the file to the folder in the D:\ drive
		writeFileSync(`D:/ServerFolder/${company_dir_name}/${customer_dir_name}/step/${model_3d.name}`, Buffer.from(await model_3d.arrayBuffer()));

		// // 2D PDF Drawing
		if (
			!(formData.drawing_2d as File).name ||
			(formData.drawing_2d as File).name === "undefined"
		) {
			return fail(400, {
				error: true,
				message: "Provide a file to upload"
			});
		}
		const { drawing_2d } = formData as { drawing_2d: File };

		// // Write the file to the folder in the D:\ drive
		writeFileSync(`D:/ServerFolder/${company_dir_name}/${customer_dir_name}/pdf/${drawing_2d.name}`, Buffer.from(await drawing_2d.arrayBuffer()));

		return {
			success: true
		}

	},

	deleteQuotation: async ({ url }) => {
		const id = url.searchParams.get("id")
		if (!id) {
			return fail(400, { message: "Invalid request" })
		}

		try {
			await database.quotation.delete({
				where: {
					id: String(id),
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, {
				message: "Something went wrong deleting your quotation",
			})
		}

		return {
			status: 200,
		}
	},

	// getMaterials: async ({ request }) => {
		
	// },
}