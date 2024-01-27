import { lucia } from "lucia";

import { prisma } from "@lucia-auth/adapter-prisma";

import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const auth = lucia({
	// adapter: ADAPTER,
    // adapter: prismaAdapter(prisma),
    adapter: prisma(client, {
        user: "user", // model User {}
        key: "key", // model Key {}
        session: "session" // model Session {}
    }),

	env: dev ? "DEV" : "PROD",
	
    middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			userId: data.id,
            username: data.username,
            email: data.email,
            name: data.name,
            userrole: data.userrole,
            // company_identifier: data.company_identifier,
		};
	},

    // // HB's method
    // transformDatabaseUser: (userData) => {
    //     return {
    //         userId: userData.id,
    //         username: userData.username,
    //         name: userData.name,
    //     }
    // },
});

export type Auth = typeof auth;