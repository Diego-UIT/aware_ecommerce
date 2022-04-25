const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const productRoute = require("./routes/product")
const authRoute = require("./routes/auth")
const orderRoute = require("./routes/order")
const cors = require("cors")

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connection Success!"))
  .catch((err) => {
    console.log(err)
  })

app.use(cors())
app.use(express.json())
app.use("/api/products", productRoute)
app.use("/api/auth", authRoute)
app.use("/api/orders", orderRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!")
})
