import { auth } from "$lib/server/lucia";

import { error, fail, redirect } from "@sveltejs/kit"
import { database } from "$lib/server/database"

import { setError, superValidate } from "sveltekit-superforms/server"

// // 20231112 was: "./$types"
// import type { Actions, PageServerLoad } from "./$types"
import type { Actions, PageServerLoad } from "../../../$types"

import { quotationSchema } from "$lib/zod/schemas";

export const load: PageServerLoad = async ({ locals, params, request }) => {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(302, "/login")
	};
	const getQuotation = async () => {
		const quotation = await database.quotation.findUnique({
			where: {
				id: String(params.quotationId), 
			},
		})
		if (!quotation) {
			throw error(404, "Quotation not found")
		}
		return quotation
	}
	// return { quotation: getQuotation(), }
	const form = await superValidate(request, quotationSchema)
	return {
		quotation: getQuotation(),
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

// export const load: PageServerLoad = async ({ params }) => {
// 	console.log("params : ", params)

// 	const getQuotation = async () => {
// 		const quotation = await database.quotation.findUnique({
// 			where: {
// 				id: String(params.quotationId), 
// 			},
// 		})
// 		if (!quotation) {
// 			throw error(404, "Quotation not found")
// 		}
// 		return quotation
// 	}

// 	return {
// 		quotation: getQuotation(),
// 	}
// };

export const actions: Actions = {
	updateQuotation: async ({ request, params }) => {
		const { 
			quotation_identifier, //: 		string, // Quotation "number"
			customer_id, //: 				integer, // number
			customer: 					customer,
			quotation_item_identifier, //: 	string,
			quotation_item_quantity, //: 	integer, // number
			part_identifier, // : 			string,
			material, //:                   string,
			color_system, //:               string,
			end_color_identifier, //:       string,
			process_5, //:                  boolean,
			process_4, //:					boolean,
			process_3, //:                  boolean,
			process_2, //:                  boolean,
			process_1, //:                  boolean,
			model_3d, //:                   string, // .p21
			drawing_2d, //:                 string, // .pdf
		} = Object.fromEntries(await request.formData() as any) as {
			quotation_identifier: 		string // Quotation "number"
			customer_id: 				string
			customer: 					any
			quotation_item_identifier: 	string
			quotation_item_quantity: 	number // BigInteger // number
			part_identifier: 			string
			material:                   string
			color_system:               string
			end_color_identifier:       string
			process_5:                  boolean
			process_4:					boolean
			process_3:                  boolean
			process_2:                  boolean
			process_1:                  boolean
			model_3d:                   string // .p21
			drawing_2d:                 string // .pdf
		}

		try {
			await database.quotation.update({
				where: {
					id: String(params.quotationId),
				},
				data: {
					quotation_identifier, //: 		string, // Quotation "number"
					customer_id, //: 				number, // integer,
					customer, //: 					customer,
					quotation_item_identifier, //: 	string,
					quotation_item_quantity, //: 	integer, // number
					part_identifier, //: 			string,
					material, //:                   string,
					color_system, //:               string,
					end_color_identifier, //:       string,
					process_5, //:                  boolean,
					process_4, //:					boolean,
					process_3, //:                  boolean,
					process_2, //:                  boolean,
					process_1, //:                  boolean,
					model_3d, //:                   string, // .p21
					drawing_2d, //:                 string, // .pdf
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not update quotation" })
		}

		// // Use a return statement
		// return {
		// 	status: 200,
		// }
		// // Or throw a redirect
		throw redirect(302, "/quotation")
	},
}