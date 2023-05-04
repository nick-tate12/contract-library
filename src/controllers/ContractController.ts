import { Request, Response } from 'express';
import {
  getContracts,
  addContract,
  getEmployeeContracts,
  getContractsInfo,
} from '../models/ContractModel';
import { parseDatabaseError } from '../utils/db-utils';
import { getCropById, getCrops } from '../models/CropModel';
import { getFarmerById, getFarmers } from '../models/FarmerModel';
import { getMillById, getMills } from '../models/MillModel';
import { getEmployeeById } from '../models/EmployeeModel';

async function getContractsByEmployeeId(req: Request, res: Response): Promise<void> {
  const { authenticatedUser, isLoggedIn } = req.session;
  if (!isLoggedIn) {
    res.redirect('/index');
    return;
  }
  const marketerId = authenticatedUser.userId;
  try {
    const contracts = await getEmployeeContracts(marketerId);
    const contractsInfo = await getContractsInfo(marketerId, contracts);

    res.render('homePage', { contractsInfo });
  } catch (err) {
    console.log(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function addNewContract(req: Request, res: Response): Promise<void> {
  const { millId, farmerId, cropId } = req.body as ContractRequest;
  const { authenticatedUser, isLoggedIn } = req.session;
  console.log('made it here');
  if (!isLoggedIn) {
    res.redirect('/index');
    return;
  }
  const employeeId = authenticatedUser.userId;
  try {
    console.log(employeeId, millId, farmerId, cropId);
    const newContract = await addContract(employeeId, millId, farmerId, cropId);

    console.log(newContract);
    const contracts = await getEmployeeContracts(employeeId);
    const contractsInfo = await getContractsInfo(employeeId, contracts);

    console.log(contractsInfo);
    res.render('homePage', { contractsInfo });
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

  console.log('crops: ', crops);
  console.log('farmers: ', farmers);
  console.log('mills: ', mills);
  res.render('newContract', { crops, farmers, mills });
}

async function getAllContracts(req: Request, res: Response): Promise<void> {
  const contracts = await getContracts();
  const contractList = [];
  for (const contract of contracts) {
    const marketer = await getEmployeeById(contract.employeeId);
    const farmer = await getFarmerById(contract.farmerId);
    const crop = await getCropById(contract.cropId);
    const mill = await getMillById(contract.millId);
    const contractId = contract.contractID;
    contractList.push({ contractId, marketer, farmer, crop, mill });
  }
  res.render('contractPage', { contractList });
}

export { getContractsByEmployeeId, addNewContract, getAllContracts, getAllEntitiesForNewContract };
