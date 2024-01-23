var assert = require("chai").assert;

var {} = require("../src/book.js");

describe("book.js", function () {
  describe("createTitle", function () {
    it("should be a function", function () {
      assert.isFunction(createTitle);
    });

    it("should take in a title and return a modified title", function () {
      var bookIdea = createTitle("Storm's Awakening");

      assert.equal(bookIdea, "The Storm's Awakening");
    });

    it("should be able to create many modified titles", function () {
      var sushiTitle = createTitle("Dancing Sushi");
      var dragonTitle = createTitle("Dragon in the Summer");
      var ghostTitle = createTitle("Teenage Ghoul");

      assert.equal(sushiTitle, "The Dancing Sushi");
      assert.equal(dragonTitle, "The Dragon in the Summer");
      assert.equal(ghostTitle, "The Teenage Ghoul");
    });
  });
});
