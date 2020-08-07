export const createCompany = `INSERT INTO companies(name, location, founder, year, employees, website)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`

export const getAll = 'SELECT * FROM companies'

export const getCompany = 'SELECT * FROM companies WHERE id = $1'

export const deleteCompany = 'DELETE FROM companies WHERE id = $1 RETURNING *'

export const updateCompany = 'UPDATE companies SET employees = $1 WHERE id = $2 RETURNING *'
        