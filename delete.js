//lec 34 delete data from mongoDB

const dbConnection = require('./mongodb')

const deletedata= async()=> {
    const db = await dbConnection()
     const result = await db.deleteMany({
        name:'Gray Ink',
        name:'Blue Ink'
       })

       if(result.acknowledged){
        console.log('Record delete')
        console.log(result)
       }
    
}
deletedata()