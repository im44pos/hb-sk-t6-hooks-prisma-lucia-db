import { writeFileSync } from 'fs';

import { auth } from "$lib/server/lucia";
import { error, fail, redirect } from "@sveltejs/kit"
import { database } from "$lib/server/database"
// import { z } from 'zod'
import { setError, superValidate } from "sveltekit-superforms/server"

import type { Actions, PageServerLoad } from "./$types"

import { quotationSchema } from "$lib/zod/schemas";

export const load: PageServerLoad = async ({ locals, request }) => {
	// console.log("PageServerLoad @ src/routes/+page.server.ts")
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
		username: session.user.username,

		dbcustomers: await database.customer.findMany(),
		dbmaterials: await database.material.findMany(),
		dbcolorsystems: await database.colorSystem.findMany(),
		dbsurfacetreatments: await database.surfaceTreatment.findMany(),
		dbvaluestreams: await database.valueStream.findMany(),
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
		// console.log("Actions @ src/routes/+page.server.ts")
		const session = await locals.auth.validate();
		if (!session) return fail(400);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove session cookie
		// console.log("Logout @ src/routes/+page.server.ts session cookie is now deleted.")
		throw redirect(302, "/login"); // redirect to login page
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