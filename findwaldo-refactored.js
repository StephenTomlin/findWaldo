// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(found)
}

function actionWhenFound(element, index, array) {
  console.log(element)
  console.log(index)
  console.log(array)
  if (array[index] == "Waldo") {
    console.log("Waldo was found at:", index)
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

