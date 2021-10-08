const database = require("./DBConnector");
const Categories = async () => {
  const db = await database();
  db.createCollection("Categories");
  console.log("Database is connected and Collection created successfully");
  const result = await db.collection("Categories").insertOne(
        { Name: "", Slug: "", Image: "", Description: "" }
      );
  if (result) {
    console.log("Data Inserted Successfully");
  }
};
Categories();
