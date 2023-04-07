import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import { registerUser, logIn, getAllUsers, updateUserEmail } from './controllers/UserController';
import { addNewContract, getAllContracts } from './controllers/ContractController';
import { addNewFarmer, getAllFarmers } from './controllers/FarmerController';
import { addNewMill, getAllMills } from './controllers/MillController';
import { addNewBuyer, getAllBuyers } from './controllers/BuyerController';
import { addNewCrop, getAllCrops } from './controllers/CropController';

const app: Express = express();
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { PORT } = process.env;

// the 'user' will be 'marketers' for Delta Grain Marketing
app.post('/api/users', registerUser); // Create an account
app.post('/api/login', logIn); // Log in to an account
app.post('/api/');

app.listen(PORT, () => {
  console.log(`Listening on port http://127.0.0.1:${PORT}`);
});
