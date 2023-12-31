import { auth } from "$lib/server/lucia"
import { redirect, type Handle, type HandleFetch } from "@sveltejs/kit"

// import type { Actions } from "./$types"

// // From Lucia
// // https://lucia-auth.com/basics/handle-requests/#sveltekit
// // https://lucia-auth.com/getting-started/sveltekit/ ! ! ! This one is complete
// // hooks.server.ts
export const handle: Handle = async ({ event, resolve }) => {
	// we can pass `event` because we used the SvelteKit middleware
	event.locals.auth = auth.handleRequest(event); // Lucia Auth

	if (!event.url.pathname.startsWith('/login')) {
		const session = await event.locals.auth.validate();
		// console.log("session : ", session)
		// console.log("session.state : ", session?.state);
		if (!session?.state.match('active') && !event.url.pathname.startsWith('/register')) {
			throw redirect(302, "/login");
		}
	}
	return await resolve(event);
};
