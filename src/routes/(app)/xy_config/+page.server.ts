// import { auth } from "$lib/server/lucia";
// import { error, fail, redirect } from "@sveltejs/kit"

// import type { Actions } from "./$types"

// export const actions: Actions = {
// 	logout: async ({ locals }) => {
// 		console.log("Actions @ src/routes/+page.server.ts")
// 		const session = await locals.auth.validate();
// 		if (!session) return fail(400);
// 		await auth.invalidateSession(session.sessionId); // invalidate session
// 		locals.auth.setSession(null); // remove session cookie
// 		console.log("Logout @ src/routes/+page.server.ts session cookie is now deleted.")
// 		throw redirect(302, "/login"); // redirect to login page
// 	},
// }
import { auth } from "$lib/server/lucia";
import { error, fail, redirect } from "@sveltejs/kit"
import { database } from "$lib/server/database"

import type { Actions, PageServerLoad } from "./$types"


export const load: PageServerLoad = async ({ locals }) => {
	// console.log("PageServerLoad @ src/routes/(app)/xy_config/+page.server.ts")
	const session = await locals.auth.validate();
	// console.log("session :", session)
	// console.log("session.state :", session?.state)
	// console.log("session.sessionId :", session?.sessionId)
	// console.log("session.user.username : ", session?.user.username)
	// console.log("session.user.userId : ", session?.user.userId)
	if (!session) {
		throw redirect(302, "/login")
	};
	return {
		userId: session.user.userId,
		username: session.user.username,
		// name: session.data.name,
		// email: session.data.email,
		// userrole: session.data.userrole,
		// usercompanyidentifier: session.data.usercompanyidentifier,
		
		// articles: await database.article.findMany(),
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
	logout: async ({ locals }) => {
		// console.log("Actions @ src/routes/(app)/xy_config/+page.server.ts")
		const session = await locals.auth.validate();
		if (!session) return fail(400);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove session cookie
		// console.log("Logout @ src/routes/(app)/xy_config/+page.server.ts session cookie is now deleted.")
		throw redirect(302, "/login"); // redirect to login page
	},
}