describe("Pizza", function () {
  describe("size", function() {
    it("charges for the pizza based on the size", function() {
      var testPizza = Object.create(Pizza)
      testPizza.size("small")
      expect(testPizza.cost).to.equal(8)
    });
  });

  describe("topping", function() {
    it("charges extra for a topping", function() {
      var testPizza = Object.create(Pizza)
      testPizza.topping("pepperoni")
      expect(testPizza.cost).to.equal(9)
    });
  });
});
