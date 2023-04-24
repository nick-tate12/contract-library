import { AppDataSource } from '../dataSource';
import { Farmer } from '../entities/Farmer';

export const farmerRepository = AppDataSource.getRepository(Farmer); // will be Farmer instead of User

// do not know params yet
async function addFarmer(name: string, email: string, phone: string): Promise<Farmer> {
  let farmer = new Farmer();
  farmer.name = name;
  farmer.email = email;
  farmer.phone = phone;

  farmer = await farmerRepository.save(farmer);
  return farmer;
}

async function getFarmers(): Promise<Farmer[]> {
  return farmerRepository.find();
}

async function getFarmerById(farmerId: string): Promise<Farmer | null> {
  const farmer = await farmerRepository.findOne({
    select: {
      farmerId: true,
      email: true,
    },
    where: { farmerId },
  });
  return farmer;
}

async function getFarmerByEmail(email: string): Promise<Farmer | null> {
  const user = await farmerRepository.findOne({ where: { email } });
  return user;
}

export { addFarmer, getFarmers, getFarmerByEmail, getFarmerById };
