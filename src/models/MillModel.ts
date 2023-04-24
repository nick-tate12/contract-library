import { AppDataSource } from '../dataSource';
import { Mill } from '../entities/Mill';

export const millRepository = AppDataSource.getRepository(Mill);

// do not know params yet
async function addMill(): Promise<void> {
  console.log('This needs to be implemented');
}

async function getMills(): Promise<Mill[]> {
  // We use no criteria so this will get all users
  return millRepository.find(); // TODO: some reason await is removed.
}

async function getMillById(millId: string): Promise<Mill | null> {
  const mill = await millRepository.findOne({
    select: {
      millId: true,
      email: true,
    },
    where: { millId },
  });
  return mill;
}

async function getMillByEmail(email: string): Promise<Mill | null> {
  const mill = await millRepository.findOne({ where: { email } });
  return mill;
}

export { addMill, getMills, getMillByEmail, getMillById };
