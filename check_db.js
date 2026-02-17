import "dotenv/config";
import mongoose from "mongoose";
import FortressKey from "./Connections/Schema.js"; // Importing the schema

const checkDB = async () => {
    try {
        // 1. Connect to MongoDB
        // Using the URI from your .env file
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // 2. Fetch all documents from the 'fortresskeys' collection
        const passwords = await FortressKey.find();

        // 3. Display results
        console.log("\n--- 🔐 Stored Passwords ---");
        if (passwords.length === 0) {
            console.log("No passwords found.");
        } else {
            passwords.forEach((entry, index) => {
                console.log(`${index + 1}. Site: ${entry.siteURL}`);
                console.log(`   User: ${entry.username}`);
                console.log(`   Pass: ${entry.password}`); // Showing password as requested
                console.log("-------------------------------");
            });
        }
    } catch (error) {
        console.error("❌ Error:", error.message);
    } finally {
        // 4. Close connection
        await mongoose.disconnect();
        console.log("\nDisconnected.");
        process.exit();
    }
};

checkDB();
