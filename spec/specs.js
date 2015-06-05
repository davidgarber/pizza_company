describe("Pizza", function () {
  describe("size", function() {
    it("charges for the pizza based on the size", function() {
      var testPizza = Object.create(Pizza)
      testPizza.size("small")
      expect(testPizza.cost).to.equal(8)
    });
  });
});
