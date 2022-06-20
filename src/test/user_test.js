const axios = require("axios");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");
const app = require("../index");
const expect = chai.expect


chai.use(chaiHttp);

describe("Get all users", () => {
  it("should return an array", (done) => {
    chai.request(app)
      .get("/api/users")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.not.be.null;
        done();
    });
  });

  it("should add a new user", (done) => {

    const testUser = {
      username: 'slow',
      email: 'slow@123.com',
      password: "123456",
      password2: "123456"
    }
    chai.request(app)
      .post("/api/register")
      .send(testUser)
      .end((err, res) => {
        expect(err).to.be.null;
        done();
      })
  })


});
