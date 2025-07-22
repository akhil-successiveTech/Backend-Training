import { getSeededUsers } from '../utils/seedData';
import { Request, Response } from 'express';

//toget
export const getUsers = (req: Request, res: Response) => {
  const users = getSeededUsers();
  res.status(200).send({ message: 'List of users' , data: users});
};

//topost
export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  console.log(name)

  res.status(201).json({ message: 'User created', data: { name, email } });
};