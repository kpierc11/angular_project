import { builtinModules, Module } from 'module';
import queryData from '../services/db.service';

async function getUsers() {
   const users = queryData('sample_analytics','customers');

   return users
}

async function LoginUser() {
   const currentUser = queryData('users', 'user');
}

module.exports = {getUsers}