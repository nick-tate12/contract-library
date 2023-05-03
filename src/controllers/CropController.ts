import { Request, Response } from 'express';
import { getCrops, addCrop } from '../models/CropModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewCrop(req: Request, res: Response): Promise<void> {
  const { name, price, cropYield, status } = req.body as CropRequest;

  try {
    const newCrop = await addCrop(name, price, cropYield, status);
    console.log(newCrop);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function getAllCrops(req: Request, res: Response): Promise<void> {
  const crops = await getCrops();
  res.render('cropsPage', { crops });
}

async function renderNewCrop(req: Request, res: Response): Promise<void> {
  res.redirect('addCrop');
}

export { addNewCrop, getAllCrops, renderNewCrop };
