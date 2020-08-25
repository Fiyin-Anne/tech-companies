import { createCompany, getAll, getCompany, deleteCompany, updateCompany } from '../queries/index.js';
import pool from '../db/db.js'
const Company = {

    create(req, res) {
        const { name, location, founder, year, employees, website}  = req.body;

        const values = [
            name, location, founder, year, employees, website
            ]   
        pool.query(createCompany, values)
            .then(details => {
                res.status(200).json({added: details.rows[0]})
            })
            .catch(err => {
                res.status(500).send(err.stack)
            })      
},
    listCompanies(req, res) {
        pool.query(getAll)
        .then(result => {
            res.status(200).json({companies: result.rows});
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
},

    getOne(req, res) {
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
        const id = parseInt(req.params.id)
        pool.query(deleteCompany, [id])
        .then(result => {
            res.status(200).json({Deleted: result.rows})
        })
        .catch(err => {
            res.status(400).json({error: err })
        })
    },

    updateCompany(req, res) {
        const num = req.body.num
        const id = parseInt(req.params.id)
        
        pool.query(updateCompany, [num, id])
        .then(update => {
            res.status(200).json({updated: update.rows})
        })
        .catch(err => {
            res.status(400).json({error: err})
        })
    }

}

export default Company;