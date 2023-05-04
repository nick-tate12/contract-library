import { Contract } from '../entities/Contracts';
import { AppDataSource } from '../dataSource';
import { getMillById } from './MillModel';
import { getFarmerById } from './FarmerModel';
import { getCropById } from './CropModel';
import { getEmployeeById } from './EmployeeModel';
// import { Farmer } from '../entities/Farmer';
// import { Crop } from '../entities/Crop';
// import { Mill } from '../entities/Mill';
// import { Buyer } from '../entities/Buyer';

export const contractRepository = AppDataSource.getRepository(Contract); // will be Contract instead of User
// export const farmerRepository = AppDataSource.getRepository(Farmer); // will be Contract instead of User
// export const cropRepository = AppDataSource.getRepository(Crop); // will be Contract instead of User
// export const millRepository = AppDataSource.getRepository(Mill); // will be Contract instead of User
// export const buyerRepository = AppDataSource.getRepository(Buyer); // will be Contract instead of User

// types might not be 100% correct. Seems like way too much for the types for now
async function addContract(
  employeeId: string,
  millId: string,
  farmerId: string,
  cropId: string
): Promise<Contract> {
  // need to do getByIds to check if the Ids are valid.
  // or make sure the controller always sends correct data.
  let contract = new Contract();

  contract.employeeId = employeeId;
  contract.millId = millId;
  contract.farmerId = farmerId;
  contract.cropId = cropId;

  contract = await contractRepository.save(contract);
  return contract;
}

async function getContracts(): Promise<Contract[]> {
  return contractRepository.find();
}

async function getEmployeeContracts(marketerId: string): Promise<Contract[]> {
  const employeeContracts = await contractRepository
    .createQueryBuilder('contract')
    .where('employeeId == :marketerId', { marketerId })
    .getMany();

  return employeeContracts;
}

async function getContractsInfo(employeeId: string, contracts: Contract[]): Promise<ContractsInfo> {
  const marketer = await getEmployeeById(employeeId);
  const contractList = [];
  for (const contract of contracts) {
    const mill = await getMillById(contract.millId);
    const farmer = await getFarmerById(contract.farmerId);
    const crop = await getCropById(contract.cropId);
    const contractId = contract.contractID;
    const contractObject = { contractId, marketer, farmer, crop, mill };
    contractList.push(contractObject);
  }
  return contractList;
}

export { addContract, getContracts, getEmployeeContracts, getContractsInfo };
