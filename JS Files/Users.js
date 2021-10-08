const database = require('./DBConnector');

const Users = async () => {
    const db = await database();
    db.createCollection("Users");
    console.log("Database is connected and Collection created successfully");
    const result = await db.collection("Users").insertOne(
      { first_Name: "", last_Name: "", email: "", profile: "", role: "" }
    );
    if (result) {
      console.log("Data Inserted Successfully");
    }
}
Users();