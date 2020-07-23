//import model

const Company = {

    create(req, res) {
    res.send('Create a new company.');
},

 listCompanies(req, res) {
    res.send('List of all companies.')
}
} 

export default Company;