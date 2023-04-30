type EmployeeRequest = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

type EmployeeIdParam = {
  marketerID: string;
};

type Employee = {
  marketerID: string;
  passwordHash: string;
  name: string;
  email: string;
  phone: string;
};
