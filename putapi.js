//lec 37 Node.js put API method (PUT

const express = require('express')
const dbConnection = require('./mongodb')
const web = express()

web.use(express.json())


web.get('/', async (req,resp)=>{     //For get use req   //For post use resp
    const db = await dbConnection()
    data = await db.find().toArray()
    console.log(data)
    resp.send(data)
})

web.post('/',async (req,resp) =>{   // both use here  req resp
    
    const data2 = await dbConnection(); // Assuming dbConnection() returns a collection object
    const result = await data2.insertOne(req.body);
    resp.send(result)
    console.log(req.body)
})  

web.put('/', async(req,resp)=>{
    const db = await dbConnection()
    const result = db.updateOne(
        {name:req.body.name},
        {$set : req.body}
    )
    console.log(req.body)
    resp.send({result:"A+"})
})
web.listen(800)
