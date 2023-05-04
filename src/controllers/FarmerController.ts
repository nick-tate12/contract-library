import { Request, Response } from 'express';
import { getFarmers, addFarmer, getFarmerById } from '../models/FarmerModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewFarmer(req: Request, res: Response): Promise<void> {
  const { name, email, phone } = req.body as FarmerRequest;

  try {
    const newFarmer = await addFarmer(name, email, phone);
    console.log(newFarmer);
    res.redirect('/farmers');
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.send(500).json(databaseErrorMessage);
  }
}

async function getFarmerInfo(req: Request, res: Response): Promise<void> {
  const { farmerId } = req.params;
  try {
    const farmer = await getFarmerById(farmerId);
    res.render('farmerInfo', { farmer });
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.send(500).json(databaseErrorMessage);
  }
}

async function getAllFarmers(req: Request, res: Response): Promise<void> {
  const farmers = await getFarmers();
  res.render('farmersPage', { farmers });
}

async function renderNewFarmer(req: Request, res: Response): Promise<void> {
  res.redirect('addFarmer');
}

export { addNewFarmer, getAllFarmers, renderNewFarmer, getFarmerInfo };
