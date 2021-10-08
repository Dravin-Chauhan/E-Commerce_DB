const database = require("./DBConnector");
const Cart = async () => {
  const db = await database();
  db.createCollection("Cart");
  console.log("Database is connected and Collection created successfully");
  const result = await db.collection("Cart").insertOne(
        { Product: "", User: "", Product_Qty: "", Base_Price: "", Sell_Price: "", Total_Price: "",
    });
  if (result) {
    console.log("Data Inserted Successfully");
  }
};
Cart();
