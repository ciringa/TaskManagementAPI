import { app } from "./app";
import { env } from "./env";


const port = env.data?.PORT || Number(process.env.PORT)
const host = "localhost"||"0.0.0.0"


app.listen({
    port,
    host,
},(err,path)=>{
    console.log(err || path)
})
