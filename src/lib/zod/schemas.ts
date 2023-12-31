import { z } from 'zod';

// // Register Schema
export const registerSchema = z.object({
    name: z.string({required_error: ""})
    .max(64, {message: "Name should be less than 65 characters"}),
    username: z.string({required_error: ""})
    .min(4, {message: "Must be at least 4 characters"})
    .max(31, {message: "Must be less than 32 characters"}),
	email: z.string({required_error: ""})
	.min(6, {message: ""})
	.max(255, {message: ""}),
    password: z.string({required_error: ""})
    .min(6, {message: "Must be at least 6 characters"})
    .max(255, {message: "Must be less than 256 characters"}),
    usercompanyidentifier: z.string({required_error: ""})
    .min(8, {message: "Must be 8 characters"})
    .max(8, {message: "Must be 8 characters"}),
	userrole: z.string({ required_error: "Select a value" }),
});
export type RegisterSchema = typeof registerSchema;


// Login Schema
export const loginSchema = z.object({
    username: z
        .string({required_error: "Fill in your username"})
        .min(4, {message: "Must be at least 4 characters"}) // 8
        .max(31, {message: "Must be less than 32 characters"}),
	email: z
        .string({required_error: "Fill in your username"})
        .min(6, {message: "Must be at least 6 characters"})
        .max(255, {message: "Must be less than 256 characters"}),
    password: z
        .string({required_error: "Fill in your password"})
        .min(6, {message: "Must be at least 6 characters"})
        .max(255, {message: "Must be less than 256 characters"}),
});
export type LoginSchema = typeof loginSchema;


// Quotation Schema
export const quotationSchema = z.object({
	quotation_identifier: z.string({ required_error: "Fill in this field" })
	.min(5 , {message: "Must be at least 5 characters"}),
	customer_id: z.string({ required_error: "Fill in this field" }),
	customer: z.coerce.string({ required_error: "Fill in this field" }),
	quotation_item_identifier: z.string({ required_error: "Fill in this field" }),
	quotation_item_quantity: z.coerce.number({ invalid_type_error: "Fill in a number" }).default(0),
	part_identifier: z.string({ required_error: "Fill in this field" }),
	material: z.coerce.string({ required_error: "Select a value" }).default('not_selected'),
	color_system: z.string({ required_error: "Fill in this field" }),
	end_color_identifier: z.string({ required_error: "Fill in this field" }),
	paint_system: z.string({ required_error: "Fill in this field" }),
	process_5: z.coerce.boolean().default(false),
	process_4: z.coerce.boolean().default(false),
	process_3: z.coerce.boolean().default(false),
	process_2: z.coerce.boolean().default(false),
	process_1: z.coerce.boolean().default(false),

	// // File uploads are not directly handled by Superforms. 
	// // They can be posted as usual, but schema fields containing files 
	// // will be undefined in form.data after validation.
	// // The recommended way to handle files is to grab FormData from the request and 
	// // extract the files from there, after validation:
	model_3d:  z.coerce.string({ required_error: "Select file" }),
	drawing_2d: z.coerce.string({ required_error: "Select file" }),
}).partial({
	// process_1: true,
	// process_2: true,
	// process_3: true,
	// process_4: true,
	// process_5: true,

	// model_3d: true,
	drawing_2d: true,
});
export type QuotationSchema = typeof quotationSchema;