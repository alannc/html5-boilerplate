$( document).ready(function() {
  $('#calculate').click(function(e){
    var number = parseInt($('#number').val());
    calculate(number);
  });

  function calculate(n) {
    var number = n;
    function sum() {
      console.log(number);
      var toSum = 10;
      var result = number + toSum;
      $('#sumResult').text(result);
    }
    function mult() {
      var toMult = 0.45;
      var result = number * toMult;
      $('#multResult').text(result);
    }
    sum();
    mult();
  };
});
