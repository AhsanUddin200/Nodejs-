const mongoose = require('mongoose');

const UpdateDB = async () => {
   await mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
    name: String,
    Husband: String,
    PhoneNo: Number,
    Year: Number
});
const productsModel = mongoose.model('products', productSchema);
const data = await productsModel.updateOne(
    { name: "Abiha Ahsan" },
    { $set: { Year: 2002, Husband:'Eng Ahsan Nasir ' } }
) 

console.log(data);
}
UpdateDB()