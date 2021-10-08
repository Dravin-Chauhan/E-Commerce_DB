const database = require("./DBConnector");
const Tags = async () => {
  const db = await database();
  db.createCollection("Tags");
  console.log("Database is connected and Collection created successfully");
  const result = await db.collection("Tags").insertOne({ 
      Name: "", Slug: "" 
    });
  if (result) {
    console.log("Data Inserted Successfully");
  }
};
Tags();
