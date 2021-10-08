const database = require("./DBConnector");
const Products = async () => {
  const db = await database();
  db.createCollection("Products");
  console.log("Database is connected and Collection created successfully");
  const result = await db.collection("Products").insertOne({ 
      Name: "", Thumbnail: "", Product_Gallery: "", Description: "", 
        Base_Price: "", Sell_Price:"", Category_Name:"", Tags:"", Additional_Information:"" 
    });
  if (result) {
    console.log("Data Inserted Successfully");
  }
};
Products();
