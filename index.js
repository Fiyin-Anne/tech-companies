import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.get('/api', (req, res) => {
  res.status(200).json({message: 'Welcome...'});
})

import companyRouter from './src/routes/company.js';
app.use('/', companyRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});

export default app;