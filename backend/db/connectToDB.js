import mongoose from 'mongoose';

const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('connected to DB');
	} catch (err) {
		console.log('Error connecting to DB', err.message);
	}
};

export default connectToDB;
