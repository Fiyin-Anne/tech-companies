import express from 'express';
import company from '../controller/company'

const app = express();

//GET list of companies
app.get('/list-companies', company.listCompanies);

//POST create new company
app.post('/add-company', company.create);
