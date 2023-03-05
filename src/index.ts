import './config'; // Load environment variables
import 'express-async-errors'; // Enable default error handling for async errors
import express, { Express } from 'express';
import { registerUser, logIn, getAllUsers } from './controllers/UserController';

const app: Express = express();
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { PORT } = process.env;

app.get('/api/users', getAllUsers);
app.post('/api/users', registerUser); // Create an account
app.post('/api/login', logIn); // Log in to an account

app.listen(PORT, () => {
  console.log(`Listening on port http://127.0.0.1:${PORT}`);
});

console.log("Hello");
