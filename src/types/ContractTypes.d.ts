type Contract = {
  id: number; // PK
  marketer: Marketer;
  mill: Mill;
  farmer: Farmer;
  crop: Crop; // PK
  // FK marketer, mill, farmer, crop
};
