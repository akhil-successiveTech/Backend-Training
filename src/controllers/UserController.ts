import { Request, Response } from 'express';
import { getSeededUsers } from '../utils/seedData';
// Interface
interface controller {
  getUsers(req: Request, res: Response): void;
}
// Class of controller
class UserController implements controller{
  public getUsers(req: Request, res: Response): void {
    const users = getSeededUsers();
    res.status(200).json({ message: 'List of users', data: users });
  }
}

export default new UserController();
