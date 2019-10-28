$(document).ready(function() {

    $("form.thingsForm").submit(function(event) {
      event.preventDefault();

      var name = $("input#nameForm").val();
      var food = $("input#foodForm").val();
      var places = $("input#placesForm").val();
      var color = $("input#colorForm").val();
      var result1 = [food, places, color]
      var result2 = result1[1]
      var result3 = result1[0]
      var result4 = result1[2]
      var result5 = result1.slice(1);
      var result6 = result5.slice(1);
      var newArray = [];
      newArray.push(result6, food, places);


      $("#name").text(name);
      $("#result1").text(result1);
      $("#result2").text(result2);
      $("#result3").text(result3);
      $("#result4").text(result4);
      $("#result5").text(result5);
      $("#result6").text(result6);
      $("#newArray").text(newArray);
      $("#result").show();

  });
});
