import queryData from '../services/db.service';

export class UserModel {
  async getAllUsers() {
    const users = queryData({
      dbName: 'sample_analytics',
      collectionName: 'customers',
    });
    return users;
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
