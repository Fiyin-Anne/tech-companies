import express from 'express';
import bodyParser from 'body-parser'
const port = process.env.PORT || 3000;
import cors from 'cors';
//import pool from './db.js'

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome...'});
})

//pool.connect();

//import from routes
import companyRouter from './routes/company.js';
app.use('/', companyRouter)

app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});

