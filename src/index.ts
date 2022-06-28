import dotenv from 'dotenv';
import { app } from './server';

dotenv.config();

const port = process.env.PORT || 4444;
const hostname = '127.0.0.1';

app.listen(port, () => console.log(`Server started on ${hostname}:${port}.`));
