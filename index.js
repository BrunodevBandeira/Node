const dotenv = require('dotenv');
const connectToDatabase = require("./src/database/connect");
dotenv.config();
connectToDatabase();

//require("./Modules/path")
//require("./Modules/http");
//require("./Modules/express"); 
//require("./Modules/expressJson");
require("./Modules/expressEJS"); 