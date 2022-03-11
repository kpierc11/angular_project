import {queryData, insertData} from '../services/db.service';

export class UserModel {
  async getAllUsers() {
    const users = queryData({
      dbName: 'sample_analytics',
      collectionName: 'customers',
    });
    return users;
  }

  async registerUser(user:any) {
    insertData({dbName: 'users',
    collectionName: 'customer',user});
  }

  async getUser(email: string) {
    const queryUser = queryData({
      dbName: 'users',
      collectionName: 'customer',
      searchParams: {'email': email }
    });
    return queryUser;
  }
}
