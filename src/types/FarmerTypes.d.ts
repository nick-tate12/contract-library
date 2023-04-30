type Farmer = {
  farmerId: string; // PK
  name: string;
  email: string;
  phone: number;
  // Check phone is not null or email is not null
};

type FarmerRequest = {
  name: string;
  email: string;
  phone: string;
};
