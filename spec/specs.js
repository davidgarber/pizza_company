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

  describe("quantity", function() {
    it("charges a multiple based on the quantity", function() {
      var testPizza = Object.create(Pizza)
      testPizza.quantity("2")
      expect(testPizza.cost).to.equal(16)
    });

    it("charges a total for all variables", function() {
      var testPizza = Object.create(Pizza)
      testPizza.size("large")
      testPizza.topping("pepperoni")
      testPizza.quantity("3")
      expect(testPizza.cost).to.equal(33)
    });
  });
});
