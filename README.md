# Tech-companies

This repo contains a detailed list of the top tech companies in Nigeria.

# Tests

- Retrieve list of all companies
GET  http://127.0.0.1:3000/companies

- Return a company
GET  http://127.0.0.1:3000/company/:id

- Add a company
POST http://127.0.0.1:3000/add-company

{
    name: "Tech Base",
    location: "Nigeria",
    employees: 125,
    founder: "Fiyin Akinsiku",
    year: 2020,
    website: 'www.tech2base.com'
}

- Remove a company from the list
DELETE http://127.0.0.1:3000/delete/:id

- Update number of employees
PUT http://127.0.0.1:3000/update/:id

{
    num: 300
}
