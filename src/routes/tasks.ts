import { FastifyInstance } from "fastify";
import { prisma } from "../prisma";
import z from "zod";
import { verifyCookie } from "../microfunctions/verifyCookie";
import { randomUUID } from "crypto";



export async function Tasks(app:FastifyInstance) {
    app.addHook("preHandler",async(req,res)=>{
        console.log(req.method, " ", req.params)
    })

    app.get("/",{
        preHandler:[verifyCookie]
    },async (req,res)=>{
        const slug = req.cookies.slugger
        const getTaskList = await prisma.tasks.findMany({
            where:{
                Slug:slug
            }
        })

        res.status(200).send(getTaskList)
    })

    app.post("/",{
        preHandler:[verifyCookie]
    },async (req,res)=>{
        var Slug = req.cookies.sluger
        if(!Slug){
            Slug = randomUUID()
            res.cookie("slugger",Slug,{
                expires: new Date(Date.now()*60 *60*24*7)
            })
        }
        const dataSchema = z.object(
            {
                Title:z.string(),
                Description:z.string(),
            }
        )

        const {Title,Description} = dataSchema.parse(req.body)
        
        const data = {
            Title,
            Description,
            Slug
        }
        const returnedOject = await prisma.tasks.create({
            data,
        })

        res.status(200).send(returnedOject)

    })


    app.put("/:tId",{
        preHandler:[verifyCookie]
    },async(req,res)=>{
        const bodySchema = z.object({
            Title:z.string().optional(),
            Description:z.string().optional(),
        })
        const paramsSchema = z.object({
            tId:z.string()
        })

        const {tId} = paramsSchema.parse(req.params)
        const data  = bodySchema.parse(req.body)

        const selectedObject = await prisma.tasks.findUnique({
            where:{
                Id:tId
            }
        })

        if(selectedObject){
            const Slug = req.cookies.sluger
            if(selectedObject.Slug == Slug){
                const updatedObject = await prisma.tasks.update({
                    where:{
                        Id:tId
                    },
                    data,
                })
                res.send(200).send(updatedObject)
            }
        }
    })


    app.put("/:tId/completed",{
        preHandler:[verifyCookie]
    },async (req,res)=>{
        const paramSchema = z.object({
            tId:z.string()
        })
        
        const {tId} = paramSchema.parse(req.params)

        const selectedObject = await prisma.tasks.findUnique({
            where:{
                Id:tId
            }
        })
        if(selectedObject){
            const slug = req.cookies.sluger
            if(selectedObject.Slug == slug){
                const updatedObject = await prisma.tasks.update({
                    where:{
                        Id:tId
                    },
                    data:{
                        Completed:true
                    }
                })
                res.status(201).send(updatedObject)
            }else{
                res.status(401).send("nao autorizado")
            }
        }else{
            res.status(404).send("nao encontrado")
        }
    })

    app.delete("/:iId",async (req,res)=>{
        const paramsSchema = z.object({
            iId:z.string().uuid()
        })

        const {iId} = paramsSchema.parse(req.params)

        const findUnique = await prisma.tasks.findUnique({
            where:{
                Id:iId
            }
        })
        if(findUnique)
            var Slug = req.cookies.sluger

            if(Slug == findUnique?.Slug){
                const deletedObject = await prisma.tasks.delete({
                    where:{
                        Id:iId
                    }
                })
                res.status(200).send(deletedObject)
            }
    })
}