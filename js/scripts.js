$(document).ready(function () {
  $("#work1").mouseover(function () {
    $("#overlay").show();
  }).mouseout(function () {
    $("#overlay").hide();
  });

  $("#work2").mouseover(function () {
    $("#overlay2").show();
  }).mouseout(function () {
    $("#overlay2").hide();
  });

  $("#work3").mouseover(function () {
    $("#overlay3").show();
  }).mouseout(function () {
    $("#overlay3").hide();
  });

  $("#work4").mouseover(function () {
    $("#overlay4").show();
  }).mouseout(function () {
    $("#overlay4").hide();
  });

  $("#work5").mouseover(function () {
    $("#overlay5").show();
  }).mouseout(function () {
    $("#overlay5").hide();
  });

  $("#work6").mouseover(function () {
    $("#overlay6").show();
  }).mouseout(function () {
    $("#overlay6").hide();
  });

  $("#work7").mouseover(function () {
    $("#overlay7").show();
  }).mouseout(function () {
    $("#overlay7").hide();
  });

  $("#work8").mouseover(function () {
    $("#overlay8").show();
  }).mouseout(function () {
    $("#overlay8").hide();
  });
});

var price, crust_price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

// Order
$(document).ready(function () {
  $("button.proceed").click(function (event) {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch (psize) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 1000;
        console.log(price);
        break;
      case "medium":
        price = 500;
        console.log("The price is " + price);
        break;
      case "small":
        price = 250;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pcrust) {
      case "0":
        crust_price = 0;
        break;
      case "Crispy":
        crust_price = 100;
        break;
      case "large":
        crust_price = 50;
        break;
      case "small-crust":
        crust_price = 25;
        break;
      default:
        console.log("No price");
    }
    let topping_value = ptopping.length * 50;
    console.log("toppins value" + topping_value);

    if ((psize == "0") && (pcrust == "0")) {
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please click on your pizza selection");
    }
    else {
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    // Add pizza button
    $("button.addPizza").click(function () {
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch (psize) {
        case "0":
          price = 0;
          break;
        case "large":
          price = 1000;
          console.log(price);
          break;
        case "medium":
          price = 500;
          console.log("The price is " + price);
          break;
        case "small":
          price = 250;
          console.log(price);
        default:
          console.log("error");
      }
      switch (pcrust) {
        case "0":
          crust_price = 0;
          break;
        case "Crispy":
          crust_price = 100;
          break;
        case "large":
          crust_price = 50;
          break;
        case "small-crust":
          crust_price = 25;
          break;
        default:
          console.log("No price");
      }
      let topping_value = ptopping.length * 50;
      console.log("toppins value" + topping_value);
      total = price + crust_price + topping_value;
      console.log(total);

      checkoutTotal = checkoutTotal + total;
      console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

      $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
      console.log(newOrder);



    });
    // Pick up button
    $("button#checkout").click(function () {
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. " + checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
    });

    // deliver button
    $("button.deliver").click(function () {
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount = checkoutTotal + 50;
      console.log("You will pay sh. " + deliceryamount + " on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: " + deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function (event) {
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount = checkoutTotal + 50;
      console.log("Final Bill is: " + deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
    event.preventDefault();
  });
});