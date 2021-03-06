// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element == "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(waldoLocation) {
    console.log("Waldo was found at:", waldoLocation)
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

