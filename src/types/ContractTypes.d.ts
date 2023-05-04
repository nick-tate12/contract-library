type Contract = {
  contractId: string; // PK
  employeeId: string;
  millId: string;
  farmerId: string;
  cropId: string; // PK
  createdOn: Date;
  // FK marketer, mill, farmer, crop
};

type ContractRequest = {
  millId: string;
  farmerId: string;
  cropId: string;
};

type ContractsInfo = {
  marketer: Employee | null;
  farmer: Farmer | null;
  crop: Crop | null;
  mill: Mill | null;
}[];
