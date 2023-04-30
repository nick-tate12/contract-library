type Crop = {
  cropId: string; // PK
  name: string;
  yield: number; // >= 0.00
  price: number; // >= 0.00
  status: string;
};

type CropRequest = {
  name: string;
  price: number;
  cropYield: number;
  status: string;
};
