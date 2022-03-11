import { MongoClient } from 'mongodb';

interface SearchData {
  dbName: string;
  collectionName: string;
  searchParams?: {};
}

interface InsertData {
  dbName: string;
  collectionName: string;
  user: {
    email: '';
    password: '';
    phone: '';
    address: '';
    zipcode: '';
    state: '';
  };
}

export async function queryData({ dbName, collectionName, searchParams }: SearchData) {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    'mongodb+srv://kpierc11:Ninjawarrior210@cluster0.7quhu.mongodb.net/Cluster0?retryWrites=true&w=majority';

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    const queryData = await client
      .db(`${dbName}`)
      .collection(`${collectionName}`)
      .find(searchParams)
      .toArray();
    console.log(dbName);
    console.log('connected to database');
    return queryData;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

export async function insertData({ dbName, collectionName, user }: InsertData) {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    'mongodb+srv://kpierc11:Ninjawarrior210@cluster0.7quhu.mongodb.net/Cluster0?retryWrites=true&w=majority';

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    const queryData = await client
      .db(`${dbName}`)
      .collection(`${collectionName}`).insertOne(user)
    console.log(dbName);
    console.log('connected to database');
    return queryData;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = {queryData, insertData};
