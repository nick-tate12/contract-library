import { Request, Response } from 'express';
import { getContracts, addContract } from '../models/ContractModel';
import { parseDatabaseError } from '../utils/db-utils';
import { getCrops } from '../models/CropModel';
import { getFarmers } from '../models/FarmerModel';
import { getMills } from '../models/MillModel';

async function addNewContract(req: Request, res: Response): Promise<void> {
  const { millId, farmerId, cropId } = req.body as ContractRequest;
  const { authenticatedUser, isLoggedIn } = req.session;
  if (!isLoggedIn) {
    // res.sendStatus(401);
    res.redirect('/index');
    return;
  }
  const employeeId = authenticatedUser.userId;
  try {
    const newContract = await addContract(employeeId, millId, farmerId, cropId);
    console.log(newContract);
    res.render('homePage', { employeeId });
  } catch (err) {
    console.log(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function getAllEntitiesForNewContract(req: Request, res: Response): Promise<void> {
  const crops = await getCrops();
  const farmers = await getFarmers();
  const mills = await getMills();

  res.render('newContract', { crops, farmers, mills });
}

async function getAllContracts(req: Request, res: Response): Promise<void> {
  const contracts = await getContracts();
  res.render('contractPage', { contracts });
}

export { addNewContract, getAllContracts, getAllEntitiesForNewContract };
