type Contract = {
  contractId: string; // PK
  employee: Employee | null;
  mill: Mill | null;
  farmer: Farmer | null;
  crop: Crop | null; // PK
  createdOn: Date;
  // FK marketer, mill, farmer, crop
};

type ContractRequest = {
  employeeId: string;
  millId: string;
  farmerId: string;
  cropId: string;
};
