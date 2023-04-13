import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';
import { registerUser, logIn, getAllUsers, updateUserEmail } from './controllers/UserController';
import { addNewContract, getAllContracts } from './controllers/ContractController';
import { addNewFarmer, getAllFarmers } from './controllers/FarmerController';
import { addNewMill, getAllMills } from './controllers/MillController';
import { addNewBuyer, getAllBuyers } from './controllers/BuyerController';
import { addNewCrop, getAllCrops } from './controllers/CropController';

const app: Express = express();
app.set('view engine', 'ejs');
const { PORT, COOKIE_SECRET } = process.env;

const SQLiteStore = connectSqlite3(session);
const store = new SQLiteStore({ db: 'session.sqlite' });

app.use(express.static('public', { extensions: ['html'] }));

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// the 'user' will be 'marketers' for Delta Grain Marketing
app.post('/api/users', registerUser); // Create an account
app.post('/api/login', logIn); // Log in to an account
app.get('/api/users', getAllUsers); // List all Marketers
app.post('/api/users/:userId/email', updateUserEmail);

// will want a search feature for every single entity
// need: getById, getByEmail, getByPhone, getByName
// This will be best done by a filtering system which can
// be a frontend or backend thing.
app.post('/api/contracts', addNewContract); // create new contract
app.post('/api/farmers', addNewFarmer); // create new farmer
app.post('/api/mills', addNewMill); // create new farmer
app.post('/api/buyers', addNewBuyer); // create new buyer
app.post('/api/crops', addNewCrop); // create new crop (includes Rice)

app.get('/api/contracts', getAllContracts); // List of contracts
app.get('/api/farmers', getAllFarmers); // List of all farmers + personal info
app.get('/api/mills', getAllMills); // List of all mills + personal info
app.get('/api/buyers', getAllBuyers); // List of all buyers + personal info
app.get('/api/buyers', getAllCrops); // List of all crops + info + Rice info

// app.get('/api/users/:userId', getUserProfileData);

app.listen(PORT, () => {
  console.log(`Listening on port http://127.0.0.1:${PORT}`);
});
