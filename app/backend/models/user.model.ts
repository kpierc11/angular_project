import { builtinModules, Module } from 'module';
import queryData from '../services/db.service';

async function getUsers() {
   const users = queryData('sample_analytics');
   console.log(users);

   return users
}

module.exports = {getUsers}