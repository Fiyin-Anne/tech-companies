import express from 'express';
import Company from '../controller/company.js';
const companyRouter = express.Router();

companyRouter.get('/list-companies', Company.listCompanies);
companyRouter.post('/add-company', Company.create);

export default companyRouter;