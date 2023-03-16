type NewUserRequest = {
  email: string;
  password: string;
};

type UserIdParam = {
  userId: string;
};

type Marketer = {
  id: number; // PK
  name: string;
  phone: number;
  email: string;
  // Check phone is not null or email is not null
};

// I am not sure where i am going to put these
// relationships just yet.

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
