//import model
import pg from 'pg';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config();

const pool = new pg.Pool(
    {connectionString: process.env.DB_URL}
);

pool.connect();

const Company = {

    create(req, res) {
        const text = `INSERT INTO companies(name, location, founder, year, employees, website)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`
         //const { name, location, founder, year, employees, website } = req.body;
        
        const values = [
            req.body.name, 
            req.body.location,
            req.body.founder, 
            req.body.year,
            req.body.employees,
            req.body.website
            ]   
        pool.query(text, values)
            .then(details => {
                res.status(200).json({added: details.rows[0]})
            })
            .catch(err => {
                res.status(500).send(err.stack)
            })      
},
    listCompanies(req, res) {
        const getAll = 'SELECT * FROM companies'
        pool.query(getAll)
        .then(result => {
            res.status(200).json({companies: result.rows});
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
},

    getOne(req, res) {
        const getCompany = 'SELECT * FROM companies WHERE id = $1'
        const id = parseInt(req.params.id)
        pool.query(getCompany, [id])
        .then(result => {
            res.status(200).json({company: result.rows});
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
    },
    deleteCompany(req, res) {
        const text = 'DELETE FROM companies WHERE id = $1 RETURNING *'
        const id = parseInt(req.params.id)
        pool.query(text, [id])
        .then(result => {
            res.status(200).json({Deleted: result.rows})
        })
        .catch(err => {
            res.status(400).json({error: err })
        })
        //res.send('Deleting...')
    },

    updateCompany(req, res) {
        const updatecompany = 'UPDATE companies SET employees = $1 WHERE id = $2 RETURNING *'
        const num = req.body.num
        const id = parseInt(req.params.id)
        
        pool.query(updatecompany, [num, id])
        .then(update => {
            res.status(200).json({updated: update.rows})
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
    }

}

export default Company;