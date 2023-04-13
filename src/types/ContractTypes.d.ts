type Contract = {
  contractId: string; // PK
  marketerId: string;
  millId: string;
  farmerId: string;
  cropId: string; // PK
  createdOn: Date;
  // FK marketer, mill, farmer, crop
};
