import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

export const millRepository = AppDataSource.getRepository(User); // will be Mill instead of User

// do not know params yet
async function addMill(): Promise<void> {
  console.log('This needs to be implemented');
}

async function getMills(): Promise<User[]> {
  // We use no criteria so this will get all users
  return millRepository.find(); // TODO: some reason await is removed.
}

export { addMill, getMills };
