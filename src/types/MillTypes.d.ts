type Mill = {
  millId: string; // PK
  name: string;
  phone: string;
  email: string;
  // Check phone is not null or email is not null
};

type MillRequest = {
  name: string;
  phone: string;
  email: string;
};
