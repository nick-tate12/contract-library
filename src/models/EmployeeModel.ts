import { AppDataSource } from '../dataSource';
import { Employee } from '../entities/Employee';

export const employeeRepository = AppDataSource.getRepository(Employee);

async function addEmployee(
  name: string,
  email: string,
  phone: string,
  passwordHash: string
): Promise<Employee> {
  // 1) Create a new Employee object and set the properties
  let employee = new Employee();
  employee.name = name;
  employee.email = email;
  employee.phone = phone;
  employee.passwordHash = passwordHash;

  // 2) Save it in the database
  employee = await employeeRepository.save(employee);

  // 3) Return the created employee
  return employee;
}

async function getEmployees(): Promise<Employee[]> {
  return employeeRepository.find();
}

async function getEmployeeByEmail(email: string): Promise<Employee | null> {
  const employee = await employeeRepository.findOne({ where: { email } });
  return employee;
}

async function getEmployeeById(marketerID: string): Promise<Employee | null> {
  const employee = await employeeRepository.findOne({ where: { marketerID } });
  return employee;
}

export { addEmployee, getEmployees, getEmployeeByEmail, getEmployeeById };
