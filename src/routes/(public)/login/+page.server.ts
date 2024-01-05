// // https://github.com/lucia-auth/examples/tree/main/sveltekit/username-and-password

import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";
import { fail, redirect } from '@sveltejs/kit';

import { setError, superValidate } from "sveltekit-superforms/server"

import type { Actions, PageServerLoad } from './$types';

import { loginSchema } from "$lib/zod/schemas";


export const load: PageServerLoad = async ({ locals, request }) => {
    // console.log("PageServerLoad @ src/routes/login/+page.server.ts")
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, "/")
    };
    const form = await superValidate(request, loginSchema)

    return {
        form,
    };
};


export const actions: Actions = {
    default: async ({ request, locals }) => {
        // console.log("Actions @ src/routes/login/+page.server.ts")
        const formData = await request.formData();
        // console.log("username : ", { username });
        const form = await superValidate(formData, loginSchema)
        
        // // ALLWAYS VALIDATE USER INPUT ! ! !
        // // INSERT THE CODE HERE
        // // these are just basic checks
        if (!form.valid) {
			return fail(
                400, 
                form,
            )
		}

        try {
            // // find user by key
            // // and validate password
            const key = await auth.useKey(
                "username", 
                form.data.username.toLocaleLowerCase(), 
                form.data.password
            );
            const session = await auth.createSession({
                userId: key.userId,
                attributes: {}
            });
            locals.auth.setSession(session); // set session cookie
            console.log("Login session cookie is now set.")
        } catch (e) {
            // // this part depends on the database used
            // // check for unique constraint error in user table
            // console.error(e)

            if (
                e instanceof LuciaError && 
                (e.message === "AUTH_INVALID_KEY_ID" || 
                    e.message === "AUTH_INVALID_PASSWORD")
            ) {
                // // user does not exist
                // // or invalid password
                return fail(400, {
                    message: "Incorrect username or password"
                });
            }
            return fail(500, {
                message: "An unknown error occured"
            });
        }
        // // redirect to
        // // make sure you only throw outside a try/catch block!
        throw redirect(302, "/")
    }
};