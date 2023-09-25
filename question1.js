#Question1

<script>
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the select and button elements
  var foodSelect = document.getElementById("foodgroup");
  var eatButton = document.getElementById("eat");

  // Add a click event listener to the "Eat!" button
  eatButton.addEventListener("click", function () {
    // Get the selected food item from the dropdown
    var selectedFood = foodSelect.value;

    // Display an alert message
    alert("You are eating the " + selectedFood);

    // Get all the img elements
    var imgElements = document.querySelectorAll("img");

    // Loop through the img elements and remove those with alt matching the selected food
    for (var i = 0; i < imgElements.length; i++) {
      var img = imgElements[i];
      if (img.alt === selectedFood) {
        img.parentNode.removeChild(img);
      }
    }
  });
});
</script>
