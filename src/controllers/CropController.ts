import { Request, Response } from 'express';
// import { getCrops, addCrop } from '../models/CropModel';
// import { parseDatabaseError } from '../utils/db-utils';

async function addNewCrop(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

async function getAllCrops(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

export { addNewCrop, getAllCrops };
