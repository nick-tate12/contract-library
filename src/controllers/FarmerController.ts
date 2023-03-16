import { Request, Response } from 'express';
// import { getFarmers, addFarmer } from '../models/FarmerModel';
// import { parseDatabaseError } from '../utils/db-utils';

async function addNewFarmer(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

async function getAllFarmers(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

export { addNewFarmer, getAllFarmers };
