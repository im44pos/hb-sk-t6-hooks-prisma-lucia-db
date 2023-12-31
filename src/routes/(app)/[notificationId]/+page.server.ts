import { database } from "$lib/server/database"
import { error, fail, redirect } from "@sveltejs/kit"

import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
	console.log("params : ", params)

	const getNotification = async () => {
		const notification = await database.notification.findUnique({
			where: {
				id: Number(params.notificationId), // Invalid `database.notification.findUnique()` invocation. Argument `id` is missing.
			},
		})
		if (!notification) {
			throw error(404, "notification not found")
		}
		return notification
	}

	return {
		notification: getNotification(),
	}
}

export const actions: Actions = {
	updateNotification: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: 		string
			content: 	string
		}

		try {
			await database.notification.update({
				where: {
					id: Number(params.notificationId),
				},
				data: {
					title,
					content,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not update notification" })
		}

		// // Use a return statement
		// return {
		// 	status: 200,
		// }
		// // Or throw a redirect
		throw redirect(302, "/")
	},
}