import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";

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
//   it("adds a company", done => {
//     chai
//       .request(app)
//       .post("/add")
//       .send({ num1: 5, num2: 5 })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.equals("success");
//         expect(res.body.result).to.equals(10);
//         done();
//       });
//   });
});