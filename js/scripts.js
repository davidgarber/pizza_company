var Pizza = {
  cost: 8,
  size: function(size) {
    if (size === "large") {
      this.cost = this.cost + 2;
    } else if (size === "small") {
      return this.cost;
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

  quantity: function(quantity) {
    if (quantity === 1) {
      return this.cost;
    } else if (quantity === 2) {
      this.cost = (this.cost) * 2;
      return this.cost;
    } else if (quantity === 3) {
      this.cost = (this.cost) * 3;
      return this.cost;
    } else if (quantity === 4) {
      this.cost = (this.cost) * 4;
      return this.cost;
    }
  },
};
