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
    if (quantity === "1") {
      return this.cost;
    } else if (quantity === "2") {
      this.cost = (this.cost) * 2 ;
      return this.cost;
    } else if (quantity === "3") {
      this.cost = (this.cost) * 3;
      return this.cost;
    } else if (quantity === "4") {
      this.cost = (this.cost) * 3;
      return this.cost;
    }
  }
};

// function resetFields() {
//   $("select#size").val("")
//   $("select#topping").val("")
//   $("select#quantity").val("")
//
// }

$(document).ready(function() {

  var newPizza = Object.create(Pizza);

  $("form#Pizza").submit(function(event) {

    var inputtedSize = $("select#size").val();
    var inputtedTopping = $("select#topping").val();
    var inputtedQuantity = $("select#quantity").val();

    newPizza.size(inputtedSize);
    newPizza.topping(inputtedTopping);
    newPizza.quantity(inputtedQuantity);

    $(".pizzacost").text(newPizza.cost);
    event.preventDefault();

  });
});
