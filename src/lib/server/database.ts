import { PrismaClient } from "@prisma/client"

// To prevent SvelteKit Hot Module Reloading (HMR) 
// to instantiate a new instance of a PrismaClient on every Hot Reload
const database = global.database || new PrismaClient()

if (process.env.NODE_ENV === "development") {
    global.database = database
}

export { database }