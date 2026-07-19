const { MongoClient } = require('mongodb');

async function checkPurchases() {
  const uri = "mongodb+srv://dbuser1:study40412@ssic-exm.6re1lal.mongodb.net/?appName=ssic-exm";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    
    const collections = await db.listCollections().toArray();
    for (let col of collections) {
      const count = await db.collection(col.name).countDocuments();
      console.log(`Collection: ${col.name}, Count: ${count}`);
    }
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

checkPurchases();
