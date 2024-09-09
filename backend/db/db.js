const mongoose =require('mongoose');

const db = async ()=>{
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB CONNECTED !")
    } catch (error) {
        console.log("mongoDB connection Failed");
    }
}

module.exports = { db };