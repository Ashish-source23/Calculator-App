var firstNumber, secondNumber;

// function to generate number
$(".btn").click(function () {
  var number;
  var pressedBtn = this.id;
  $("#" + pressedBtn)
    .fadeOut(50)
    .fadeIn(50);
  number = pressedBtn;
  $(".display").html(pressedBtn);
});
