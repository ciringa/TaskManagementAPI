import {fastify} from "fastify"
import cookie from "@fastify/cookie"
import { Router } from "./router"
export const app = fastify()

app.register(cookie)
app.register(Router)