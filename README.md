# Tech-companies

This repo contains a detailed list of the top tech companies in Nigeria.

# Tests
- Add a company
POST http://127.0.0.1:3000/add-company

{
    name: "Tech Base",
    location: "Nigeria",
    employees: 125,
    founder: "Fiyin Akinsiku",
    year: 2020,
    contact: {
        email: "info@techbase.com",
        phone: 0702345678,
        address: "Ikeja, Lagos"
    }
}

- Retrieve list of all companies
GET  http://127.0.0.1:3000/list-companies

- Remove a company from the list
