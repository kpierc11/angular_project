import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/user.model';

const userModel = new UserModel();

export class UserController {
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    const users = await userModel
      .getAllUsers()
      .then(() => res.json(users))
      .catch((e) => console.log("couldn't get all users"));
  }

  async addUser(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const bodyEmail = body.email;
    userModel
      .getUser(`${bodyEmail}`)
      .then((data) => {
        const account = data.find((user) => user.email == bodyEmail);

        if (account) {
          res.send('user already exists');
        } else {
          userModel.registerUser(body).then(() => {
            res.send('User Registered');
          });
        }
      })
      .catch((error) => console.log("couldn't add User" + error));
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const bodyEmail = body.email;
    const bodyPassword = body.password;

    userModel
      .getUser(`${bodyEmail}`)
      .then((data) => {
        const account = data.find(
          (user) => user.email == bodyEmail && user.password == bodyPassword
        );

        if (account) {
        
          res.send(data);
        } else {
          res.send('Email or password is incorrect');
        }
      })
      .catch((error) => console.log("couldn't add User" + error));
  }
}
