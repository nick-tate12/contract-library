import { AppDataSource } from '../dataSource';
import { User } from '../entities/User';

export const cropRepository = AppDataSource.getRepository(User); // will be Crop instead of User

// do not know params yet
async function addCrop(): Promise<void> {
  console.log('This needs to be implemented');
}

async function getCrops(): Promise<User[]> {
  // We use no criteria so this will get all users
  return cropRepository.find(); // TODO: some reason await is removed.
}

export { addCrop, getCrops };
