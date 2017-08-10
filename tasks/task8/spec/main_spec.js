"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main("95713");
        var expect_string = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        
        expect(expect_string).to.equal(result);
    });

    it("测试用例2", function(){
      
        var result = main("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |")
        var expect_string = '123456789-';

        expect(expect_string).to.equal(result);
    });
    
    it("测试用例3", function(){
      
        var result = main("123456789-")
        var expect_string = '| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |';

        expect(expect_string).to.equal(result);
    });
});