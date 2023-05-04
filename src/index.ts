import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';
import { registerEmployee, logIn, getAllEmployees } from './controllers/EmployeeController';
import {
  addNewContract,
  getAllContracts,
  getAllEntitiesForNewContract,
  getContractsByEmployeeId,
} from './controllers/ContractController';
import {
  addNewFarmer,
  getAllFarmers,
  getFarmerInfo,
  renderNewFarmer,
} from './controllers/FarmerController';
import { addNewMill, getAllMills, getMillInfo, renderNewMill } from './controllers/MillController';
import { addNewBuyer, getAllBuyers, renderNewBuyer } from './controllers/BuyerController';
import {
  validateLoginBody,
  validateFarmerBody,
  validateMillBody,
  validateBuyerBody,
  validateCropBody,
  validateNewEmployeeBody,
} from './Validators/authValidators';
import { addNewCrop, getAllCrops, getCropInfo, renderNewCrop } from './controllers/CropController';

const app: Express = express();
const { PORT, COOKIE_SECRET } = process.env;

const SQLiteStore = connectSqlite3(session);
app.set('view engine', 'ejs');
const store = new SQLiteStore({ db: 'session.sqlite' });
app.use(
  session({
    store,
    secret: COOKIE_SECRET || '',
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8 hours
    name: 'session',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static('public', { extensions: ['html'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// the 'user' will be 'marketers' for Delta Grain Marketing
app.post('/api/users', validateNewEmployeeBody, registerEmployee); // Create an account
app.get('/api/users', getAllEmployees); // List all Marketers
app.post('/home', validateLoginBody, logIn); // Log in to an account
app.get('/home', getContractsByEmployeeId);

app.get('/contract', getAllEntitiesForNewContract);
app.get('/farmer', renderNewFarmer);
app.get('/mill', renderNewMill);
app.get('/buyer', renderNewBuyer);
app.get('/crop', renderNewCrop);

app.get('/farmer/:farmerId', getFarmerInfo);
app.get('/mill/:millId', getMillInfo);
app.get('/crop/:cropId', getCropInfo);

app.post('/contract', addNewContract); // create new contract
app.post('/farmers', validateFarmerBody, addNewFarmer); // create new farmer
app.post('/mills', validateMillBody, addNewMill); // create new farmer
app.post('/buyers', validateBuyerBody, addNewBuyer); // create new buyer
app.post('/crops', validateCropBody, addNewCrop); // create new crop (includes Rice)

app.get('/contracts', getAllContracts); // List of contracts
app.get('/farmers', getAllFarmers); // List of all farmers + personal info
app.get('/mills', getAllMills); // List of all mills + personal info
app.get('/buyers', getAllBuyers); // List of all buyers + personal info
app.get('/crops', getAllCrops); // List of all crops + info + Rice info

app.listen(PORT, () => {
  console.log(`Listening on port http://127.0.0.1:${PORT}`);
});
