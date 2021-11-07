require('dotenv').config();
import app from './app';
import connectToDB from './db/connect';

const host = process.env.SERVER_HOST || 'http://localhost';
const port = (process.env.PORT || 5000) as number;

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}`);

  connectToDB();
});
