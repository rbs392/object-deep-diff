var chai = require("chai")
var expect = chai.expect

describe("object deep diff",function(){

	var diff = require("../index");

	it("should work for objects with numbers",function(){
		expect(diff).not.to.be.undefined

		var source = {a:1}
		var defaults = {a:1}
		var result = diff(defaults,source)
		expect(result).to.deep.equal({})

		var source1 = {a:1}
		var defaults1 = {a:2}
		var result = diff(defaults1,source1)
		expect(result).to.deep.equal(source1)


	})

	it("should work for objects with strings",function(){
		expect(diff).not.to.be.undefined

		var source = {a:"hello"}
		var defaults = {a:"hello"}
		var result = diff(defaults,source)
		expect(result).to.deep.equal({})

		var source1 = {a:"hello"}
		var defaults1 = {a:"hello world"}
		var result = diff(defaults1,source1)
		expect(result).to.deep.equal(source1)
	})

	it("should work for objects with arrays",function(){
		expect(diff).not.to.be.undefined

		var source = {a:[1,2,3]}
		var defaults = {a:[1,2,3]}
		var result = diff(defaults,source)
		expect(result).to.deep.equal({})

		var source1 = {a:[1,2,3,4,5]}
		var defaults1 = {a:[1,2,3]}
		var result = diff(defaults1,source1)
		expect(result).to.deep.equal(source1)
	})

	it("should work for objects with objects",function(){
		expect(diff).not.to.be.undefined
		//test for object array
		var defaultsArr = {a:{b:[1,2,3]}}
		
		var srcArr = {a:{b:[1,2,3]}}
		var srcArr1 = {a:{b:[1,2,3,4,5]}}
		
		var result = diff(defaultsArr,srcArr)
		var result1 = diff(defaultsArr,srcArr1)
		
		expect(result).to.deep.equal({})
		expect(result1).to.deep.equal(srcArr1)

		//test for object number
		var defaultsNum = {a:{b:1}}
		
		var sourceNum = {a:{b:1}}
		var sourceNum1 = {a:{b:2}}
		
		var result = diff(defaultsNum,sourceNum)
		var result1 = diff(defaultsNum,sourceNum1)
		
		expect(result).to.deep.equal({})
		expect(result1).to.deep.equal(sourceNum1)

		//test for object string
		var defaultsStr = {a:{b:"hello"}}
		
		var sourceStr = {a:{b:"hello"}}
		var sourceStr1 = {a:{b:"hello world"}}
		
		var result = diff(defaultsStr,sourceStr)
		var result1 = diff(defaultsStr,sourceStr1)
		
		expect(result).to.deep.equal({})
		expect(result1).to.deep.equal(sourceStr1)

		//test for object object
		var defaultsObj = {a:{b:{c:"hello"}}}
		
		var sourceObj = {a:{b:{c:"hello"}}}
		var sourceObj1 = {a:{b:{c:"hello world"}}}
		
		var result = diff(defaultsObj,sourceObj)
		var result1 = diff(defaultsObj,sourceObj1)
		
		expect(result).to.deep.equal({})
		expect(result1).to.deep.equal(sourceObj1)
	})
})