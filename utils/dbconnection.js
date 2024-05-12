import mongoose from "mongoose";

let isDBConnected = false;

const DBConnected = async () => {
    mongoose.set('strictQuery', true);
    if (isDBConnected)
        console.log('Database is already connected.');
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'share_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        isDBConnected = true;
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}

export default DBConnected;