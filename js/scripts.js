var Pizza = {
  cost: 8,
  size: function(size) {
    if (size === "large") {
      this.cost = this.cost + 2;
    } else if (size === "small") {
      return this.cost
    }
  }
}
