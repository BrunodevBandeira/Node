const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.2zhok.mongodb.net/database?retryWrites=true&w=majority`, 
        (error) => {
            if(error) {
                return console.log("Ocorreu um erro ao se conectar com o BD")
            }
        return console.log("SUCESSO!!!!!!.....")
     })
}

module.exports = connectToDatabase;