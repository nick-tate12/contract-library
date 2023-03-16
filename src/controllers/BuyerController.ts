import { Request, Response } from 'express';
// import { getBuyers, addBuyer } from '../models/BuyerModel';
// import { parseDatabaseError } from '../utils/db-utils';

async function addNewBuyer(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

async function getAllBuyers(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

export { addNewBuyer, getAllBuyers };
