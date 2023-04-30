import { Contract } from '../entities/Contracts';
import { AppDataSource } from '../dataSource';
import { getEmployeeById } from './EmployeeModel';
import { getMillById } from './MillModel';
import { getFarmerById } from './FarmerModel';
import { getCropById } from './CropModel';

export const contractRepository = AppDataSource.getRepository(Contract); // will be Contract instead of User

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
  const employee = await getEmployeeById(employeeId);
  const mill = await getMillById(millId);
  const farmer = await getFarmerById(farmerId);
  const crop = await getCropById(cropId);

  if (employee !== null && mill !== null && farmer !== null && crop !== null) {
    contract.employee = await getEmployeeById(employeeId);
    contract.mill = await getMillById(millId);
    contract.farmer = await getFarmerById(farmerId);
    contract.crop = await getCropById(cropId);
  }

  contract = await contractRepository.save(contract);
  return contract;
}

async function getContracts(): Promise<Contract[]> {
  return contractRepository.find();
}

export { addContract, getContracts };
