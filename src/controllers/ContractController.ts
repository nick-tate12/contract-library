import { Request, Response } from 'express';
import { getContracts, addContract } from '../models/ContractModel';
import { parseDatabaseError } from '../utils/db-utils';

async function addNewContract(req: Request, res: Response): Promise<void> {
  const { marketerId, millId, farmerId, cropId } = req.body as ContractRequest;
  try {
    const newContract = await addContract(marketerId, millId, farmerId, cropId);
    console.log(newContract);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function getAllContracts(req: Request, res: Response): Promise<void> {
  const contracts = await getContracts();
  res.json(contracts);
}

export { addNewContract, getAllContracts };
