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
});