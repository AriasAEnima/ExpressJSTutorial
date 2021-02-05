const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8080';

describe('Array', function() {
  
  it('should return -1 when the value is not present', function() {
    assert.equal([1,2,3].indexOf(4), -1);
  })  


  
});


const mascotasrouter = require('../router/mascotas')
describe('Mascotas', function() {
  
  it('deberia obtner las mascotas', 
     async () => {
        const response = await chai.request(url).get('/mascotas/data');
        expect(response.status).to.equal(200);    
        assert(response.body.length>0);
    }
  )  

});

