import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";
import { error, fail, redirect } from '@sveltejs/kit';
import { database } from "$lib/server/database"

import { setError, superValidate } from "sveltekit-superforms/server"

import type { Actions, PageServerLoad } from '../../$types';

import { registerSchema } from "$lib/zod/schemas";


export const load: PageServerLoad = async ({ locals, request }) => {
    // console.log("PageServerLoad @ src/routes/(public)/register/+page.server.ts load")
    const session = await locals.auth.validate();
    if (session) {
        throw redirect(302, "/")
    };

    const form = await superValidate(request, registerSchema)

    return {
        // form,
        // userId: session.user.userId,
		// username: session.user.username,
		// name: session.data.name,
		// email: session.data.email,
		// userrole: session.data.userrole,
		// usercompany_identifier: session.data.usercompany_identifier,

		dbroles: await database.role.findMany(),
        form,
    }; // ???
};


export const actions: Actions = {
    default: async ({ request, locals }) => {
        console.log("Actions @ src/routes/register/+page.server.ts default")
        const formData = await request.formData();
        // const password = formData.get('password')
        const form = await superValidate(formData, registerSchema);
        console.log("form.data : " + form.data)

        if (!form.valid) {
			return fail(400, {
				form
			})
		}
        
        // // ALLWAYS VALIDATE USER INPUT ! ! !
        // // INSERT THE CODE HERE
        // // these are just basic checks
        // // Check: Joy of Code https://www.youtube.com/watch?v=MoGkX4RvZ38 1:30:00 - 1:32:30 (regexr.com)
        // // .replace(\s/g, "-")               // // Replaces a "space" by a "-"
        // // .replace(/[^a-zA-Z0-9-]/g, "")     // // Replace everything not equal to a to z, A to Z, 0 to 9 and "-" by an "" empty string

        // // REPLACE BY STRONG PASSWORD CHECK:
        // // https://www.section.io/engineering-education/password-strength-checker-javascript/
        // // (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,255}) // // Minimum 8, maximum 255 characters.
        try {
            const user = await auth.createUser({
                key: {
                    providerId: "username",                              // auth method
                    providerUserId: form.data.username.toLowerCase(),    // unique id when using "username" auth method
                    // providerId: "email",                                // auth method
                    // providerUserId: form.data.email.toLowerCase(),      // unique id when using "username" auth method
                    password: form.data.password // Hashed by Lucia
                },
                attributes: {
                    // company_identifier: form.data.company_identifier,
                    userrole: form.data.userrole,
                    name: form.data.name,
                    username: form.data.username,
                    user_email: form.data.user_email,
                }
            });
            // // DO NOT AUTOMATICALLY LOGIN AFTER CREATING AN ACCOUNT ! ! !
            // const session = await auth.createSession({
            //     userId: user.userId,
            //     attributes: {}
            // });
            // locals.auth.setSession(session); // set session cookie
        } catch (e) {
            // // this part depends on the database used
            // check for unique constraint error in user table
            console.log("\n\nSTART catch (e) error : \n") // // For development only
            console.error(e)                              // // For development only
            console.log("\nEND catch (e) error : \n\n")   // // For development only

            if (
                e instanceof LuciaError 
                // && 
                // e.message === USER_TABLE_UNIQUE_CONSTRAINT_ERROR
                ) {
                return fail(400, {
                    // message1: "Username already taken", // // Delete / Comment this out for production
                    message: e.message
                });
            }
            return fail(500, {
                message: "Internal Error 500: An unknown error occured"
            });
        }
        // // redirect to
        // // make sure you only throw outside a try/catch block!
        throw redirect(302, "/")
    }
};