import { Crop } from '../entities/Crop';
import { AppDataSource } from '../dataSource';

export const cropRepository = AppDataSource.getRepository(Crop); // will be Crop instead of User

// do not know params yet
async function addCrop(
  name: string,
  price: number,
  cropYield: number,
  status: string
): Promise<Crop> {
  let crop = new Crop();
  crop.name = name;
  crop.yield = cropYield;
  crop.price = price;
  crop.status = status;

  crop = await cropRepository.save(crop);
  return crop;
}

async function getCrops(): Promise<Crop[]> {
  return cropRepository.find();
}

async function getCropById(cropId: string): Promise<Crop | null> {
  const user = await cropRepository.findOne({ where: { cropId } });
  return user;
}

export { addCrop, getCrops, getCropById };
