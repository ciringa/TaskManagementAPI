import { FastifyInstance } from "fastify";
import { Tasks } from "./routes/tasks";


export async function Router(app:FastifyInstance) {
    app.register(Tasks,{
        prefix:"tasks"
    })
}