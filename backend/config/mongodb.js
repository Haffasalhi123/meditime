import mongoose from "mongoose"; // Assurez-vous d'avoir installé mongoose avec `npm install mongoose`

const connectDB = async () => {
  try {
    // Connexion à MongoDB
    await mongoose.connect(`${process.env.MONGODB_URL}/meditime`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Message de confirmation
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Arrête le processus si la connexion échoue
  }

  // Écouter les événements de connexion
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connection is open.");
  });

  mongoose.connection.on("error", (err) => {
    console.error(`Mongoose connection error: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected.");
  });
};

export default connectDB;
