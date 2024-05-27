
import "dotenv/config"
import {z} from "zod"

const envSchema = z.object({
    DATABASE_URL:z.string(),
    NODE_ENV: z.enum(["development","production","test"]).default("development"),
    PORT:z.number().default(2333)
})

const _env = envSchema.safeParse(process.env)

if(!_env){
    console.error("the specified env file doesn't matches with the schema")
}
export const env = _env