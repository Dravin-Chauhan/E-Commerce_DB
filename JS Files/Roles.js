const database = require("./DBConnector");
const Roles = async () => {
  const db = await database();
  db.createCollection("Roles");
  console.log("Database is connected and Collection created successfully");
  const result = await db.collection("Roles").insertOne(
        { Name: "", Slug: "" }
    );
  if (result) {
    console.log("Data Inserted Successfully");
  }
};
Roles();
