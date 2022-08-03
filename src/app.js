import 'dotenv/config'
import cors from "cors"
import express from 'express'
import mongoose from 'mongoose'

const app = express()

import routerProduct from "./routes/product"
import routerCategory from "./routes/category"
import routerAuth from "./routes/auth"

app.use(cors())
app.use(express.json())
app.use("/api", routerProduct);
app.use("/api", routerCategory);
app.use("/api", routerAuth);

mongoose.connect("mongodb://127.0.0.1:27017/Asm_nodeJs", () => {
    console.log("Connected");

})


app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công cổng: " + process.env.PORT);
})
