

import "dotenv/config"

import app from "./src/app.js" ;
import connectDB from "./config/db.js";



const PORT = process.env.PORT || 8030; 

try{
    await connectDB()

    app.listen(PORT, () => {
        console.log(`server is renning in ${PORT}`)
    });

} catch (error) {
    console.log(" the server is failed to renning:", error);
    process.exit(1)
}