import { MongoClient } from 'mongodb';

interface Props {
  dbName: string;
  collectionName: string;
  searchParams?: { };
}

async function queryData({ dbName, collectionName, searchParams }: Props) {
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
    console.log(dbName);
    console.log(searchParams);
    const queryData = await client
      .db(`${dbName}`)
      .collection(`${collectionName}`)
      .find()
      .toArray();
    console.log(queryData);
    console.log(dbName);
    console.log('connected to database');
    return queryData;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

export default queryData;
