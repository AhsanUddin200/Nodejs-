//lec 31 Read data with mangoDB
const {MongoClient} = require('mongodb')
const url ='mongodb://localhost:27017' //mongodb path
const client = new MongoClient(url)     //feth from MongoClient 
const database = 'e-comm'               //Your database name  'e-comm'

async function dbConnection()
{
    let result = await client.connect()
    let db = result.db(database)    
    return db.collection('products')  //collection name
   // let responce = await collection.find({name:'Red ink'}).toArray()
    //console.log(responce);
}

module.exports = dbConnection;