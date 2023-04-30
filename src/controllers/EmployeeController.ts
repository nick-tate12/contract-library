import argon2 from 'argon2';
import { Request, Response } from 'express';
import { parseDatabaseError } from '../utils/db-utils';
import {
  getEmployeeById,
  getEmployeeByEmail,
  addEmployee,
  getEmployees,
} from '../models/EmployeeModel';

async function registerEmployee(req: Request, res: Response): Promise<void> {
  const { name, email, phone, password } = req.body as EmployeeRequest; // requests for a new employee

  // Hash the employee's password
  const passwordHash = await argon2.hash(password);

  try {
    // Store the hash instead of their actual password
    const newEmployee = await addEmployee(name, email, phone, passwordHash);
    console.log(newEmployee);
    res.redirect('/index');
  } catch (err) {
    console.error(err);
    const databaseErrorMessage = parseDatabaseError(err);
    res.status(500).json(databaseErrorMessage);
  }
}

async function logIn(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body as EmployeeRequest;
  const employee = await getEmployeeByEmail(email);

  if (!employee) {
    res.sendStatus(404); // 404 Not Found - email doesn't exist
    return;
  }

  const { passwordHash } = employee; // not sure what this does

  if (!(await argon2.verify(passwordHash, password))) {
    res.sendStatus(404); // 404 Not Found - employee with email/pass doesn't exist
    return;
  }

  res.sendStatus(200);
}

async function getAllEmployees(req: Request, res: Response): Promise<void> {
  const employee = await getEmployees();

  res.json(employee);
}

async function getEmployeeData(req: Request, res: Response): Promise<void> {
  const { marketerID } = req.params as EmployeeIdParam;
  // Get the employee account
  const employee = await getEmployeeById(marketerID);
  if (!employee) {
    res.sendStatus(404); // 404 Not Found
    return;
  }
  res.json(employee); // Send back the employee's data
}

export { registerEmployee, logIn, getAllEmployees, getEmployeeData };
