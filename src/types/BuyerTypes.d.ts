type Buyer = {
  buyerId: string; // PK
  name: string;
  email: string;
  phone: string;
  // Check phone is not null or email is not null
};

type BuyerRequest = {
  name: string;
  email: string;
  phone: string;
};
