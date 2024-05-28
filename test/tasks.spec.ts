import {beforeAll, test} from "vitest"
import {app} from "../src/app"
import { beforeEach, describe } from "node:test"
import  request  from "supertest"
import { env } from "../src/env"

describe("Task Routes Tests",()=>{
    beforeAll(async()=>{
        await app.ready()
    })

    beforeEach(()=>{
        console.log(env.data?.NODE_ENV)
    })

    test("creation test",async()=>{
        const res = await request(app.server).post("/tasks").send({
            Title:"Comprar de",
            Description:"Devo comprar Agua no mercado amanhã de manhã"
        }).expect(200)

        const cookie = res.get("Set-Cookie")
        const deleteBody = await request(app.server).delete("/tasks/"+res.body.Id).set("Cookie",cookie).expect(200)
        console.log(deleteBody.body)
        

    })

    test("reading test",async()=>{  
        const res = await request(app.server).post("/tasks").send({
            Title:"Comprar de",
            Description:"Devo comprar Agua no mercado amanhã de manhã"
        })

        const cookie = res.get("Set-Cookie")
        const readingObject = await request(app.server).get("/tasks").set("Cookie",cookie).expect(200)

        const deleteBody = await request(app.server).delete("/tasks/"+res.body.Id).set("Cookie",cookie)
        console.log(readingObject.body)
    })



})
