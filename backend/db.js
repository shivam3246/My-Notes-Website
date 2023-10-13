const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shivam3246:shmkau29@cluster0.gngsjoa.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = ()=>{
  
      mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo")
      })
}
module.exports = connectToMongo




