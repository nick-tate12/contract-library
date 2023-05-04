import { Request, Response } from 'express';
import { getCrops, addCrop, getCropById } from '../models/CropModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewCrop(req: Request, res: Response): Promise<void> {
  const { name, price, cropYield, status } = req.body as CropRequest;

  try {
    const newCrop = await addCrop(name, price, cropYield, status);
    console.log(newCrop);
    res.redirect('/crops');
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function getCropInfo(req: Request, res: Response): Promise<void> {
  const { cropId } = req.params;
  try {
    const crop = await getCropById(cropId);
    res.render('cropInfo', { crop });
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.send(500).json(databaseErrorMessage);
  }
}

async function getAllCrops(req: Request, res: Response): Promise<void> {
  const crops = await getCrops();
  res.render('cropsPage', { crops });
}

async function renderNewCrop(req: Request, res: Response): Promise<void> {
  res.redirect('addCrop');
}

export { addNewCrop, getAllCrops, renderNewCrop, getCropInfo };
