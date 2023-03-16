import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

export const farmerRepository = AppDataSource.getRepository(User); // will be Farmer instead of User

// do not know params yet
async function addFarmer(): Promise<void> {
  console.log('This needs to be implemented');
}

async function getFarmers(): Promise<User[]> {
  // We use no criteria so this will get all users
  return farmerRepository.find(); // TODO: some reason await is removed.
}

export { addFarmer, getFarmers };
