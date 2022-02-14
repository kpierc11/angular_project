import { UserModel } from '../models/user.model';

const userModel = new UserModel();

export class UserController {
  async getAllUsers(req: any, res: any, next: any) {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error("Couldn't return user", err.message);
    }
  }

  async verifyUser(req: any, res: any, next: any) {
    try {
      const body = req.body;

      const email = body.email;

      const user = await userModel.getUser(`${email}`);

      let userExists = {};

      user.forEach((element) => {
        if (body.password === element.password) {
          userExists = { verified: true };
          res.redirect("http://localhost:4200/home");
        } else {
          userExists = { verified: false };
          res.redirect("http://localhost:4200/login");
        }
      });
    } catch (err) {
      console.error("User was not Found", err.message);
    }
  }
}
