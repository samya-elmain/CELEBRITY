const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/celebrities")
   .then(() => {
            console.log('server is running in port :')
   })
   .catch(() => {
      console.log("error")
   })