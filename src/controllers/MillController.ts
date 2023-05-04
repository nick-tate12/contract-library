import { Request, Response } from 'express';
import { getMills, addMill } from '../models/MillModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewMill(req: Request, res: Response): Promise<void> {
  const { name, phone, email } = req.body as MillRequest;

  try {
    const newMill = await addMill(name, phone, email);
    console.log(newMill);
    res.redirect('/mills');
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.send(500).json(databaseErrorMessage);
  }
}

async function getAllMills(req: Request, res: Response): Promise<void> {
  const mills = await getMills();
  res.render('millsPage', { mills });
}

async function renderNewMill(req: Request, res: Response): Promise<void> {
  res.redirect('addMill');
}

export { addNewMill, getAllMills, renderNewMill };
