type NewUserRequest = {
  email: string;
  password: string;
};

type Marketer = {
  id: number; // PK
  name: string;
  phone: number;
  email: string;
  // Check phone is not null or email is not null
};

type Mill = {
  id: number; // PK
  name: string;
  phone: number;
  email: string;
  // Check phone is not null or email is not null
};

type Buyer = {
  id: number; // PK
  name: string;
  phone: number;
  email: string;
  // Check phone is not null or email is not null
};

type Farmer = {
  id: number; // PK
  name: string;
  phone: number;
  email: string;
  // Check phone is not null or email is not null
};

type Crop = {
  id: number; // PK
  name: string;
  yield: number; // >= 0.00
  price: number; // >= 0.00
  status: string;
};

type Rice = {
  id: number; // PK
  variety: string; // not null
  // Constraint fkeyID Foreign Key (id)
  // References Crop(id) Deferrable initially Immediate
};

type Contract = {
  id: number; // PK
  marketer: Marketer;
  mill: Mill;
  farmer: Farmer;
  crop: Crop; // PK
  // FK marketer, mill, farmer, crop
};

type Prefers = {
  farmer: Farmer;
  mill: Mill;
  // Both FKs
};

type Samples = {
  marketer: Marketer;
  crop: Crop;
  // Both FKs
};

type WorksFor = {
  buyer: Buyer; // PK
  mill: Mill;
  // Both FKs
};

type Produces = {
  farmer: Farmer;
  crop: Crop; // PK
  // Both FKs
};

type Stores = {
  mill: Mill;
  crop: Crop; // PK
  // Both FKs
};

type BuysFrom = {
  marketer: Marketer;
  farmer: Farmer;
  // Both FKs
};

type TradesWith = {
  mill: Mill;
  marketer: Marketer;
  // Both FKs
};
