const mongoose = require('mongoose');

class Database{

    
    async connect(){

        try{
            mongoose.set('strictQuery', false);
            const conn = await mongoose.connect(process.env.DB_URL);
            console.log(`Database Connected to ${conn.connection.host}`);
            
        }catch(error){
            console.log(error.message)
        }
    }
}

module.exports = new Database();