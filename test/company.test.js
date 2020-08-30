import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";
//import { create } from "../src/controller/company.js";

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/api")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equals("Welcome...");
        done();
      });
  });

  it("returns list of all companies", done => {
    chai
      .request(app)
      .get("/api/companies")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('companies');
        expect(res.body.companies).to.be.a('array');
        done();
      });
  });

  it("adds a company", done => {
    let company = {
      name: "Tech Base",
      location: "Nigeria",
      founder: "Fiyin Akinsiku",
      year: 2020,
      employees: 125,
      website: "www.tech2base.com"
  }
    chai
      .request(app)
      .post("/api/add-company")
      .send(company)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('added');
        expect(res.body.added).to.have.property('name');
        expect(res.body.added).to.have.property('location');
        expect(res.body.added).to.have.property('founder');
        expect(res.body.added).to.have.property('year');
        expect(res.body.added).to.have.property('employees');
        expect(res.body.added).to.have.property('website');
        done();
      })
  })

  // it("gets a company by id", done => {
  //   chai
  //   .request(app)
  //   const newCompany = new create
  //   .get('/api/company/:id' + company.id)
  //   .send(book)
  //   .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //   })
  // })
});