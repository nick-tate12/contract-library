import { Request, Response } from 'express';
import { getBuyers, addBuyer } from '../models/BuyerModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewBuyer(req: Request, res: Response): Promise<void> {
  const { name, email, phone } = req.body as { name: string; email: string; phone: string };

  try {
    const newBuyer = await addBuyer(name, email, phone);
    console.log(newBuyer);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function getAllBuyers(req: Request, res: Response): Promise<void> {
  const buyers = await getBuyers();
  res.json(buyers);
}

export { addNewBuyer, getAllBuyers };
