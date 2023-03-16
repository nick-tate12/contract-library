import argon2 from 'argon2';
import { Request, Response } from 'express';
import { parseDatabaseError } from '../utils/db-utils';
import { addUser, getUserByEmail, allUserData } from '../models/UserModel';

async function registerUser(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as NewUserRequest; // requests for a new user

  // Hash the user's password
  const passwordHash = await argon2.hash(password);

  try {
    // Store the hash instead of their actual password
    const newUser = await addUser(email, passwordHash);
    console.log(newUser);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function logIn(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as NewUserRequest;
  const user = await getUserByEmail(email);

  if (!user) {
    res.sendStatus(404); // 404 Not Found - email doesn't exist
    return;
  }

  const { passwordHash } = user; // not sure what this does

  if (!(await argon2.verify(passwordHash, password))) {
    res.sendStatus(404); // 404 Not Found - user with email/pass doesn't exist
    return;
  }

  res.sendStatus(200);
}

async function getAllUsers(req: Request, res: Response): Promise<void> {
  const users = await allUserData();

  res.json(users);
}

export { registerUser, logIn, getAllUsers };
