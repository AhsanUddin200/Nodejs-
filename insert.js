
//lec 32 Insert data from mongoDB
const dbConnection = require('./mongodb');

const insert = async () => {
    const collection = await dbConnection();
    const result = await collection.insertOne(
        { name: 'Gray Ink', brand: 'Dollar', price: 800 },
       
    );

    if (result.acknowledged) {
        console.log(result)
        console.log("Data saved");
    }
};
insert()