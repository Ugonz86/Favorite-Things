$(document).ready(function() {

    $("form.thingsForm").submit(function(event) {
      event.preventDefault();

      var name = $("input#nameForm").val();
      var food = $("input#foodForm").val();
      var places = $("input#placesForm").val();
      var color = $("input#colorForm").val();
      var result1 = [name, food, places, color] //This complilation of all the variables into one array
      var result2 = result1[1] //This will access a specific element.
      var result3 = result1[0] //This will access a specific element.
      var result4 = result1[2] //This will access a specific element.
      var result5 = result1.slice(0, 3); //This will slice the array from the first element until the last, which in this case it leaves the 3rd element out which is var color.
      console.log(result5 + " copy of array"); //
      var result6 = result5.slice(1); //This will cut the array starting at the 1st element.
      var newArray = [];
      newArray.push(result6, food, places); //This is an empty new array where we push or add the last array with the others.


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
