import mongoose from "mongoose";

export const connectDB = async () => {
	if (!process.env.MONGO_URI) {
		throw new Error("MONGO_URI is missing from the environment.");
	}

	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
		return conn;
	} catch (error) {
		if (error.message?.toLowerCase().includes("bad auth")) {
			console.error(
				"MongoDB authentication failed. Check the username/password in MONGO_URI and verify that the database user exists in MongoDB Atlas."
			);
		}

		throw new Error(`Database connection failed: ${error.message}`);
	}
};
