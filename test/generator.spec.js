import { expect, spy } from "chai";
import generator from "./../lib/generator"
console.log(generator);

describe('generator', function() {
    it('instantiates', function () {
        "use strict";
        expect(generator).not.to.equal(null);
    });

    it('pass when passed variable is empty array', function() {
       expect(function() {
           generator([]);
       }).not.to.throw();
    });

    it('throws error when path semantic is wrong', function() {
        expect(function(){
            generator({});
        }).to.throw(Error, 'Variable passed must be an array');
    });

    it('throws error when path not contains parser type', function() {
        expect(function(){
            generator([
                {}
            ]);
        }).to.throw(Error, 'Type property not found in path');
    });

    it('throws error when path contains bad parser type', function() {
        expect(function(){
            generator([
                {type:undefined}
            ]);
        }).to.throw(Error, 'Type property must be defined');

        expect(function(){
            generator([
                {type:'notFoundParser'}
            ]);
        }).to.throw(Error, 'Invalid path property: notFoundParser');
    })
});

