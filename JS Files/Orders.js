const database = require("./DBConnector");
const Orders = async () => {
  const db = await database();
  db.createCollection("Orders");
  console.log("Database is connected and Collection created successfully");
  const result = await db.collection("Orders").insertOne({
      User_Id: "", Total_Items: "", Products: "", Billing_Address: "", Shipping_Address: "",
      Transaction_Status: "", Payment_Mode: "", Payment_Status: "", Order_Status: "",
    });
  if (result) {
    console.log("Data Inserted Successfully");
  }
};
Orders();
