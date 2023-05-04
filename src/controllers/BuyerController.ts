import { Request, Response } from 'express';
import { getBuyers, addBuyer } from '../models/BuyerModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewBuyer(req: Request, res: Response): Promise<void> {
  const { name, email, phone } = req.body as BuyerRequest;

  try {
    const newBuyer = await addBuyer(name, email, phone);
    console.log(newBuyer);
    res.redirect('/buyers');
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function getAllBuyers(req: Request, res: Response): Promise<void> {
  const buyers = await getBuyers();
  res.render('buyersPage', { buyers });
}

async function renderNewBuyer(req: Request, res: Response): Promise<void> {
  res.redirect('addBuyer');
}

export { addNewBuyer, getAllBuyers, renderNewBuyer };
