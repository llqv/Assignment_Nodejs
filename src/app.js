import 'dotenv/config'
import cors from "cors"
import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Asm_nodeJs", () => {
    console.log("Connected");
})

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công cổng: " + process.env.PORT);
})
