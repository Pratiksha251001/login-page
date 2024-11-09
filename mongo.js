const mongoose=require("mongoose")
mongoose.conect("mongodb://localhost:27017/react_loginpage")
.then(()=>{
    console.log("mongodb conected");

})
.catch(()=>{
    console.log("failed");
})
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    }
})

const collection=mongoose.model("collection",newSchema)

module.exports=collection

