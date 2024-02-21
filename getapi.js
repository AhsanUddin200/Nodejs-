//lec 35 Make API with mongoDB(get)

const express = require('express')
const dbConnection = require('./mongodb')
const web = express()

web.get('/', async (req,resp)=>{     //For get use req   //For post use resp
    const db = await dbConnection()
    data = await db.find().toArray()
    console.log(data)
    resp.send(data)
})

web.listen(800)
