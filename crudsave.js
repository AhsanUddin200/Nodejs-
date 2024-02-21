const mongoose = require('mongoose');

const SaveInDb = async () => {
   await mongoose.connect("mongodb://localhost:27017/e-comm");

   const productSchema = new mongoose.Schema({
      name: String,
      Husband: String,
      PhoneNo: Number,
      Year: Number
   });

   const productsModel = mongoose.model('products', productSchema);

   const data = new productsModel({ name: "Abiha Ahsan", Husband: "Ahsan Nasir", PhoneNo: '098260', Year: 2001 });
   const result = await data.save();
   console.log(result);
}



SaveInDb();
