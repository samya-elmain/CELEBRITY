require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const celebritieRoutes = require('./routes/celebrities')
const app = express()


mongoose.connect(process.env.MONGO_URI)
   .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('server is running in port :', PORT)
    })
   })
   .catch((error) => {
      console.log(error)
   })

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/celebrities', celebritieRoutes)
