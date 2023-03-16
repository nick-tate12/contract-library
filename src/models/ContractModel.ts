import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

export const contractRepository = AppDataSource.getRepository(User); // will be Contract instead of User

// do not know params yet
async function addContract(): Promise<void> {
  console.log('This needs to be implemented');
}

async function getContracts(): Promise<User[]> {
  // We use no criteria so this will get all users
  return contractRepository.find(); // TODO: some reason await is removed.
}

export { addContract, getContracts };
