const axios = require("axios");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");
const app = require("../index");
const expect = chai.expect


chai.use(chaiHttp);

describe("Get all stories", () => {
  it("should return an array", (done) => {
    chai.request(app)
      .get("/api/stories")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.not.be.null;
        done();
    });
  });

  it("should add a new story", (done) => {

    const testStory = {
      title: 'test story',
      contents: 'test contents',
      status: "In Progress",
      user_id:"1"
    }
    chai.request(app)
      .post("/api/stories")
      .send(testStory)
      .end((err, res) => {
        expect(err).to.be.null;
        done();
    })
  })


});
