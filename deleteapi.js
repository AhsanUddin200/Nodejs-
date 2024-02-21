//lec 38 Node.js Delete API method (DELETE)

const express = require('express')
const dbConnection = require('./mongodb')
const web = express()
const mongob = require('mongodb') //Instant for id in delete

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

web.delete('/:id',async (req,resp)=>{
    
    const data4 = await dbConnection()
    const result = await data4.deleteOne(
        {_id: new mongodb.ObjectId (req.params.id)}
    )
    console.log(req.params.id)
    resp.send(result)
})

//With name 
/*web.delete('/:name', async (req, resp) => {
  /*  const data4 = await dbConnection();
    const result = await data4.deleteMany(
        { name: req.params.name }
    );
    console.log(req.params.name);
    resp.send(result);
});*/
web.listen(800)


