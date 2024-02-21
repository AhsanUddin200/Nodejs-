const mongoose = require('mongoose');

const deleteInDB = async () => {
    
     
        await mongoose.connect("mongodb://localhost:27017/e-comm")

        const productSchema = new mongoose.Schema({
            name: String,
            Husband: String,
            PhoneNo: Number,
            Year: Number
        });

        const productsModel = mongoose.model('products', productSchema);

  
        const data = await productsModel.deleteMany({
            name: "Abiha Ahsan"
        });

        
        console.log(data);

    } 

deleteInDB();
