var Pizza = {
  cost: 8,
  size: function(size) {
    if (size === "large") {
      this.cost = this.cost + 2;
    } else if (size === "small") {
      return this.cost
    }
  },

  topping: function(topping) {
    if (topping === "none") {
      return this.cost;
    } else if (topping === "pepperoni") {
      this.cost = this.cost + 1;
      return this.cost;
    }
  },
}
