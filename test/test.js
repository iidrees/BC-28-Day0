
// import chai from 'chai';


 //chai.assert;

const assert = require('chai').assert;


const rainDrop = require('../lib/rainDrop');


describe('Convert number to a string "Pling", "Plang", "Plong" the content of which depends on the numbers prime factors 3, 5, 7', () => {
  describe('Check data types ', () => {
    it('should return "Please enter an integer" if input not a number', () => {
      assert.equal(rainDrop.findRainDrop(''), 'Please enter an integer');
    })
    it('should return "Please enter an integer" for "Hey hey hey"', () => {
      assert.equal(rainDrop.findRainDrop('Hey hey hey'), 'Please enter an integer');
    })
    it('should return "Please enter an integer" for "28"', () => {
      assert.equal(rainDrop.findRainDrop('28'), 'Please enter an integer');
    })
    
  })
  
  describe('Check if value of number less than 1 ', () => {
    it('should return "Please enter a number greater than 1" if input less than 1', () => {
      assert.equal(rainDrop.findRainDrop(0), 'Please enter a number greater than 1');
    })
    it('should return "Please enter a number greater than 1" if input less than 1', () => {
      assert.equal(rainDrop.findRainDrop(-1), 'Please enter a number greater than 1');
    })
    it('should return "Please enter a number greater than 1" if input less than 1', () => {
      assert.equal(rainDrop.findRainDrop(-28), 'Please enter a number greater than 1');
    })
  })
  describe('Check conversion to "Pling", "Plang", "Plong" ', () => {
    it('should return "Plong" for 28', () => {
      assert.equal(rainDrop.findRainDrop(28), 'Plong');
    })
    it('should return "PlingPlang" for 1755', () => {
      assert.equal(rainDrop.findRainDrop(1755), 'PlingPlang');
    })
    it('should return "Plang" for 500', () => {
      assert.equal(rainDrop.findRainDrop(500), 'Plang');
    })
    it('should return "PlingPlang" for 94545', () => {
      assert.equal(rainDrop.findRainDrop(94545), 'PlingPlang');
    })
  })
   describe('Check unconverted numbers ', () => {
    it('should return 50094589 for a 50094589 input', () => {
      assert.equal(rainDrop.findRainDrop(50094589), 50094589);
    })
    it('should return 34 for 34', () => {
      assert.equal(rainDrop.findRainDrop(34), 34);
    })
  })
})
