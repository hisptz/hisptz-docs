import {z} from "zod";


export const migrationConfig = z.object({
		repo: z.string().url(),
		branch: z.string(),
})

export const configSchema = z.object({
		id: z.string(),
		label: z.string(),
		migrationConfig,
})


