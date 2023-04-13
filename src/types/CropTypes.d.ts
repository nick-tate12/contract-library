type Crop = {
  cropId: string; // PK
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
