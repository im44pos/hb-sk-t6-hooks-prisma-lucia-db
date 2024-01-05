// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// // https://lucia-auth.com/getting-started/sveltekit
		interface Locals {
			auth: import("lucia").AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	var database: PrismaClient
}

// // https://lucia-auth.com/guidebook/sign-in-with-username-and-password/sveltekit/
// // src/app.d.ts
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			username: string;
			name: string;
			email: string;
			// userrole: string;
			company_identifier: string;
		};
		// type DatabaseSessionAttributes = {};
		type DatabaseSessionAttributes = Record<string, never>;
	}
}

// THIS IS IMPORTANT!!!
export {};
