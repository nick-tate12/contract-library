import { Contract } from '../entities/Contracts';
import { AppDataSource } from '../dataSource';

export const contractRepository = AppDataSource.getRepository(Contract); // will be Contract instead of User

// types might not be 100% correct. Seems like way too much for the types for now
async function addContract(
  marketerId: string,
  millId: string,
  farmerId: string,
  cropId: string
): Promise<Contract> {
  // need to do getByIds to check if the Ids are valid.
  // or make sure the controller always sends correct data.
  let contract = new Contract();
  contract.marketerId = marketerId; // do getByIds for all things.
  contract.millId = millId;
  contract.farmerId = farmerId;
  contract.cropId = cropId;

  contract = await contractRepository.save(contract);
  return contract;
}

async function getContracts(): Promise<Contract[]> {
  return contractRepository.find();
}

export { addContract, getContracts };
