import Model from "../src/model";
const chai = require("chai");
const assert = chai.assert;

const model = new Model();
const newInput = model.input;

describe("Class Model", function() {
  it("should create a new instance", function() {
    assert.typeOf(model, "object");
  });
});

describe("Validation fn", function() {
  it("should match the pattern", function() {
    const pattern = /^https?:\/\/[\w\/?.&-=]+|http?:\/\/[\w\/?.&-=]+$/g;

    assert.equal(newInput.match(pattern), true);
  });
});

describe("Input lookup fn", function() {
  it("should contain not more than one instance of an object", function() {
    const uniqueValues = model.allBookmarks.every(el => el.url !== newInput);
    assert.equal(uniqueValues, false);
  });
});

describe("Adding new obj to an array", function() {
  it("should add new obj to the array", function() {
    const currentLength = model.allBookmarks.length;
    model.lookUpBookmark(newInput);
    assert.equal(currentLength < allBookmarks.length, true);
  });
});
