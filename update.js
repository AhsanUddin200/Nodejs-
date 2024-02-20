//lec 33 Update data from mongoDB

const dbConnection = require('./mongodb')

const update = async () => {
    const db = await dbConnection()
    const result = await db.updateOne(
        { name: 'Black ink' },
        { $set: { name: 'Red Ink Jumbo', price:890, brand:'eagle' } }
    );
    if (result.acknowledged) {
        console.log("updated");
        console.log(result)
    } 
}

update();