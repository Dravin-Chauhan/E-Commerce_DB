const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = "E-Commerce_DB";
async function DBConnector() {
    client.connect();
    const db = client.db(dbName);
    return db;
}
module.exports = DBConnector;