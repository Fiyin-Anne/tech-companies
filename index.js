import express from 'express';
const port = process.env.PORT || 3000;
//const router = express.Router();
const app = express();


app.use(express.json());

//app.use('/', router);

app.get('/', (req, res) => {
  res.status(200).json({message: "Welcome to the Homepage."});
})

//import from routes
import companyRouter from './routes/company.js';
app.use('/', companyRouter)

app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});

