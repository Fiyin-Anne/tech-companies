import express from 'express';
import Company from '../controller/company.js';
const companyRouter = express.Router();

companyRouter.get('/companies', Company.listCompanies);
companyRouter.get('/company/:id', Company.getOne)
companyRouter.post('/add-company', Company.create);
companyRouter.delete('/delete/:id', Company.deleteCompany);
companyRouter.put('/update/:id', Company.updateCompany);

export default companyRouter;