import mongoose from "mongoose";
import "dotenv/config";

const Url: string = String(process.env.DATABASE_URL);

mongoose.connect(Url.toString().trim())
    .then(() => console.log(`MongoDB connected successfully!`))
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    })



