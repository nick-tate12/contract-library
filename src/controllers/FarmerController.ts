import { Request, Response } from 'express';
import { getFarmers, addFarmer } from '../models/FarmerModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewFarmer(req: Request, res: Response): Promise<void> {
  const { name, email, phone } = req.body as { name: string; email: string; phone: string };

  try {
    const newFarmer = addFarmer(name, email, phone);
    console.log(newFarmer);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.send(500).json(databaseErrorMessage);
  }
}

async function getAllFarmers(req: Request, res: Response): Promise<void> {
  const farmers = await getFarmers();
  res.json(farmers);
}

export { addNewFarmer, getAllFarmers };
