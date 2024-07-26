const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute  = require("./routes/product.route.js");


//middlewares
app.use(express.json());// this is to see data in json format
app.use(express.urlencoded({extended:false})); //to see data in other format that we can understand


//routes
app.use("/api/products", productRoute);

app.get("/",(req,res)=>{
  res.send("hi there");
})






//to get data based upon id i.e particular id
// app.get("/api/products/:id", async(req,res)=>{
//   try {
//     let {id} = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);

    
//   } catch (error) {
//     res.status(500).json({message:error.message });

//   }
// })

// //for posting all the data
// app.post("/api/products", async(req,res)=>{
//  try {
//   const products = await Product.create(req.body);
//  // console.log(req.body);
//   res.status(200).json(products);
//  } catch (error) {
//   res.status(500).json({message:error.message });

//  }
// })


//update the data using put

// app.put("/api/products/:id",async(req,res)=>{
//    try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id,req.body);

//     if(!product){
//       return res.status(400).json({message:"Product not found" });
//     }

//     const updateProduct = await Product.findById(id);
//     res.status(200).json(updateProduct);

//    } catch (error) {
//     res.status(500).json({message:error.message });

//    }
// })


// to delete the product

// app.delete("/api.products/:id", async(req,res)=>{
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if(!product){
//       return res.status(404).json({message:"Product not found" });
 
//     } 
//      res.status(200).json({message:"Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({message:error.message });

//   }
// })



//connection
mongoose.connect("mongodb+srv://nitinrawat2309:YdNNr7qUWKFwLWfO@backenddb.cxpiicx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
  console.log("connected to Database");
  app.listen(port,()=>{
    console.log(`server running on port ${port}...`);
  })
})
.catch(()=>{
  console.log("Connection Failed");
})
