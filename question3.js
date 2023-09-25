
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input field and the "Add Shopping" button
  var addItemInput = document.getElementById("add_list");
  var addButton = document.getElementById("add_shopping_list");

  // Get a reference to the unordered list
  var shoppingList = document.querySelector("ul");

  // Add a click event listener to the "Add Shopping" button
  addButton.addEventListener("click", function () {
    // Get the value from the input field
    var newItemText = addItemInput.value.trim(); // Trim removes leading and trailing whitespace

    // Check if the input field is not empty
    if (newItemText !== "") {
      // Create a new list item element
      var newItem = document.createElement("li");

      // Set the text content of the new list item
      newItem.textContent = newItemText;

      // Add the new list item to the beginning of the unordered list
      shoppingList.insertBefore(newItem, shoppingList.firstChild);

      // Clear the input field
      addItemInput.value = "";
    }
  });
});

