import { Request, Response } from 'express';
// import { getContracts, addContract } from '../models/ContractModel';
// import { parseDatabaseError } from '../utils/db-utils';

async function addNewContract(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

async function getAllContracts(req: Request, res: Response): Promise<void> {
  res.sendStatus(501);
}

export { addNewContract, getAllContracts };
