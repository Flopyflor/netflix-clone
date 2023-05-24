import mongoose from 'mongoose'
import config from './config.js'

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('******DB CONECTADA******')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};

export default connectToDatabase