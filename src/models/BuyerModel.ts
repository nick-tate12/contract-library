import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

export const buyerRepository = AppDataSource.getRepository(User); // will be Buyer instead of User

// do not know params yet
async function addBuyer(): Promise<void> {
  console.log('This needs to be implemented');
}

async function getBuyers(): Promise<User[]> {
  // We use no criteria so this will get all users
  return buyerRepository.find(); // TODO: some reason await is removed.
}

export { addBuyer, getBuyers };
