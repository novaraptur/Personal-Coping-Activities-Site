
// alert("Linked up!");

//call filterObjects
filterObjects("all");

function filterObjects(tagName) {
  //fetch all "activity" items from the page and store them in arr1 array
  var arr1 = document.getElementsByClassName("activity");

  if (tagName == "all") {
    tagName = "";
  }

  for (var i = 0; i < arr1.length; i++) {
    //add the .hidden class
    addClass(arr1[i], "hidden");
    if (arr1[i].className.indexOf(tagName) > -1) {
      //remove the .hidden class from objects that match the filter tag
      removeClass(arr1[i], "hidden");
    }
  }
}

function addClass(element, tag) {
  //grab array of elements' classes & store in arr1
  var arr1 = element.className.split(" ");
  var arr2 = tag.split(" ");

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, tag) {
  //grab array of elements' classes & store in arr1
  var arr1 = element.className.split(" ");
  var arr2 = tag.split(" ");

  for (var i = 0; i < arr2.length;  i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  element.className = arr1.join(" ");
}

//randomizer function
function randomObject() {
  //number of elements with "activity" class
  var arr1 = document.getElementsByClassName("activity");
  var numElements = document.getElementsByClassName("activity").length;

  //generate random number between 1 and numElements
  var randomNum = Math.floor((Math.random() * numElements) + 1);

  for (var i = 0; i < numElements; i++) {
    if (i === randomNum) {
      removeClass(arr1[i], "hidden");
    } else {
      addClass(arr1[i], "hidden");
    }
  }
}
