import { randomUUID } from "crypto";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";


export async function verifyCookie (req:FastifyRequest,res:FastifyReply) {
    var Slug = req.cookies.sluger
    if(!Slug){
        res.status(401).send("nao autorizado")
    }
}