import { Buyer } from '../entities/Buyer';
import { AppDataSource } from '../dataSource';

export const buyerRepository = AppDataSource.getRepository(Buyer); // will be Buyer instead of User

async function addBuyer(name: string, phone: string, email: string): Promise<Buyer> {
  let buyer = new Buyer();
  buyer.email = email;
  buyer.phone = phone;
  buyer.name = name;

  buyer = await buyerRepository.save(buyer);
  return buyer;
}

async function getBuyers(): Promise<Buyer[]> {
  return buyerRepository.find();
}

async function getBuyerById(buyerId: string): Promise<Buyer | null> {
  const buyer = await buyerRepository.findOne({ where: { buyerId } });
  return buyer;
}

async function getBuyerByEmail(email: string): Promise<Buyer | null> {
  const buyer = await buyerRepository.findOne({ where: { email } });
  return buyer;
}

export { addBuyer, getBuyers, getBuyerById, getBuyerByEmail };
