const express=require('express')
const app=express()
const cors=require('cors')
const userRouter = require("./Router/UserRouter")
const productRouter =require("./Router/ProductRouter")
const cartRouter=require("./Router/CartRouter")
const promoRouter=require("./Router/PromoRouter")

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))//TODO:précise site
app.use(express.json())

app.use("/user", userRouter);
app.use("/product",productRouter)
app.use("/cart",cartRouter)
app.use("/promo",promoRouter)

app.listen(5000,()=>{
 //pour commencer le serveur : npm run dev
 console.log("server starded on port 5000")
})