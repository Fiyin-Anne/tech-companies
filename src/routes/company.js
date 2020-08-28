import express from 'express';
import Company from '../controller/company.js';
const companyRouter = express.Router();

companyRouter.get('/api/companies', Company.listCompanies);
companyRouter.get('/api/company/:id', Company.getOne)
companyRouter.post('/api/add-company', Company.create);
companyRouter.delete('/api/delete/:id', Company.deleteCompany);
companyRouter.put('/api/update/:id', Company.updateCompany);

export default companyRouter;