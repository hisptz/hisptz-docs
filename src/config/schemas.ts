import {z} from "zod";


const migrationConfig = z.object({
		repo: z.string().url(),
		branch: z.string(),
})

const configSchema = z.object({
		id: z.string(),
		label: z.string(),
		migrationConfig,
})


