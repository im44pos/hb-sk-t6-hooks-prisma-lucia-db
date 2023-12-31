import { auth } from "$lib/server/lucia";
import { error, fail, redirect } from "@sveltejs/kit"
import { database } from "$lib/server/database"

// import { page } from '$app/stores'

import type { Actions, PageServerLoad } from "./$types"

// import { navigation } from '$lib/server/navigation.ts'

// <NAVIGATION />
export const load: PageServerLoad = async ({ locals }) => {
	console.log("PageServerLoad @ src/routes/+page.server.ts")
	const session = await locals.auth.validate();
	console.log("session :", session)
	// console.log("session.state :", session?.state)
	// console.log("session.sessionId :", session?.sessionId)
	// console.log("session.user.username : ", session?.user.username)
	// console.log("session.user.userId : ", session?.user.userId)
	// console.log("session.user.keyId : ", session?.key.keyId) // // Not accessable
	// console.log("session.user.key : ", session?.key.hashed_password) // // Not accessable
	if (!session) {
		throw redirect(302, "/login")
	};
	return {
		userId: session.user.userId,
		username: session.user.username,
		notifications: await database.notification.findMany(),
		// quotation: await database.quotation.findMany(),
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
	// // 2023-11-09 added to reload page when going back to home page
	// home: async ({ locals }) => {
	// 	// const session = await locals.auth.validate()
	// 	// if (session) {
	// 	// 	throw redirect(302, "/")
	// 	// };
	// 	// return {};
		
	// 	const session = await locals.auth.validate();
	// 	if (!session) return fail(400);
	// 	throw redirect(302, "/"); // redirect to home page
	// 	let location = "/"

	// 	document.location.reload();
	// },

	logout: async ({ locals }) => {
		console.log("Actions @ src/routes/+page.server.ts")
		const session = await locals.auth.validate();
		if (!session) return fail(400);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove session cookie
		console.log("Logout @ src/routes/+page.server.ts session cookie is now deleted.")
		throw redirect(302, "/login"); // redirect to login page
	},

	// // 2023-11-09 added to save data to database and filesysyem and execute computations
	computeSurfaceArea: async ({ locals }) => {
		// Add action logic
	},

	createNotification: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string
			content: string
		}

		try {
			await database.notification.create({
				data: {
					title,
					content,
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, { message: "Could not create the notification." })
		}

		return {
			status: 201,
		}
	},

	deleteNotification: async ({ url }) => {
		const id = url.searchParams.get("id")
		if (!id) {
			return fail(400, { message: "Invalid request" })
		}

		try {
			await database.notification.delete({
				where: {
					id: Number(id),
				},
			})
		} catch (err) {
			console.error(err)
			return fail(500, {
				message: "Something went wrong deleting your notification",
			})
		}

		return {
			status: 200,
		}
	},
};