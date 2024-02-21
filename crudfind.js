const mongoose = require('mongoose');

const findDB = async () => {
    
     
        await mongoose.connect("mongodb://localhost:27017/e-comm")



    const productSchema = new mongoose.Schema({
        name: String,
        Husband: String,
        PhoneNo: Number,
        Year: Number
    });
    const productsModel = mongoose.model('products', productSchema);
    const data2 = await productsModel.find({name:"Eng.Abiha Ali Siddque"})
    console.log(data2)
}

findDB();