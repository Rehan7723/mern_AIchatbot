import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connection successful");
    }
    catch (error) {
        console.log("cannot connect to DB");
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map