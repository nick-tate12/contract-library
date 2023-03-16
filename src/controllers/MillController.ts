import { Request, Response } from 'express';
// import { getMills, addMill } from '../models/MillModel';
// import { parseDatabaseError } from '../utils/db-utils';

async function addNewMill(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

async function getAllMills(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

export { addNewMill, getAllMills };
