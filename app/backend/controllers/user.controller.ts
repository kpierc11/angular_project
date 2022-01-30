const userModel = require('../models/user.model');
async function getUser(req: any, res: any, next: any) {
  try {
    
    const user = await userModel.getUsers();
    res.json(user);
  } catch (err) {
    console.error("Couldn't return user", err.message);
  }
}

module.exports = { getUser };
