import queryData from '../services/db.service';

async function getProducts() {
   const users = queryData('products', 'cookie_products');

   return users
}

module.exports = {getProducts}