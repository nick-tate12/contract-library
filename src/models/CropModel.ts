import { Crop } from '../entities/Crop';
import { AppDataSource } from '../dataSource';

export const cropRepository = AppDataSource.getRepository(Crop); // will be Crop instead of User

// do not know params yet
async function addCrop(
  name: string,
  cropYield: number,
  price: number,
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

export { addCrop, getCrops };
