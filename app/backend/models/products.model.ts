import {queryData} from '../services/db.service';

async function getProducts() {
  const users = queryData({
    dbName: 'products',
    collectionName: 'cookie_products',
  });

  return users;
}

module.exports = { getProducts };
