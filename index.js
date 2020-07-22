import express from 'express';
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.statusCode(200).json({message: "Welcome to the Homepage."});
})

app.listen(port, () => {
  console.log(`Listening on Port ${port}...`);
});

