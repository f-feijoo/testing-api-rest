const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const request = require('supertest');

chai.use(chaiHttp);
const url = 'http://localhost:8080';

describe("Mostrar todos los productos: ", () => {
    it("Deberia mostrar todos los productos", (done) => {
      chai
        .request(url)
        .get("/api/productos")
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  
  describe("Agregar producto: ", () => {
    it("Deberia agregar un producto", (done) => {
      chai
        .request(url)
        .post("/api/productos")
          .send({
            title: "Microscopio23",
            thumbnail:
              "https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png",
            price: 15000,
          })
        .end( (err, res) =>{
          expect(res).to.have.status(201);
          done();
        });
    });
  });
  
  describe("Actualizar producto por id: ", () => {
    it("Deberia actualizar un producto por id", (done) => {
        request(url)
        .put("/api/productos/632a05b2d79a45c00def0df3")
        .send({
            title: "Microscopio Actualizado",
            price: 4567,
            thumbnail:
              "https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png",
          })
        .expect(200, done)
        });
  });
  
  describe("Eliminar producto por id: ", () => {
    it("Deberia eliminar un producto por id", (done) => {
      request(url)
        .delete("/api/productos/632a05b2d79a45c00def0df3")
        .expect(200, done);
    });
  });