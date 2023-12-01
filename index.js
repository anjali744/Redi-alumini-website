//Yui added from here
// add function that works when a user click the "Get started button" and shows cards depending on the user's selection.
function handleGetStartedClick(event) {
  //get a value of the element which has the id from html.
  // This is a user's selection.
  let category = document.getElementById("categoryFilter").value;
  let jobType = document.getElementById("durationFilter").value;
  let location = document.getElementById("locationFilter").value;

  //get a list of the elements which has class="grid-item" from html.
  let gridItems = document.getElementsByClassName("grid-item");

  //Now we want to see if the values above (category, jobType and location) matche any students' cards.
  //In order to go throgh all the students' cards, use for loop that iterates the length of "gridItems" which
  // is each element of 6 elements.
  for (let i = 0; i < gridItems.length; i++) {
    //assign variable "gridItem" for each element which is "gridItem[i]" because it is used repeatedlly.
    let gridItem = gridItems[i];

    //get a value of each attribute specified in () of an element "gridItem".
    // This is a student's info.
    let categoryData = gridItem.getAttribute("data-category");
    let jobTypeData = gridItem.getAttribute("data-jobType");
    let locationData = gridItem.getAttribute("data-location");

    //Now we want to compare the user's selection and student cards info to manipulate the filter, i.e.
    // showing the relevant cards only.
    if (
      // either user's selection = student's info OR user's selection = empty data
      (location === locationData || location === "") &&
      (category === categoryData || category === "") &&
      (jobType === jobTypeData || jobType === "")
    ) {
      //if the above is True, show the corresponding cards by manipulating the value of display in the style sheet.
      gridItem.style.display = "block";
    } else {
      //otherwise (if not True) hide the corresponding cards by manipulating the value of display in the style sheet.
      gridItem.style.display = "none";
    }
  }
}

// Install click handler on the Get Started button.
document
  .getElementById("getStartedBtn")
  .addEventListener("click", handleGetStartedClick);
//Yui end here.
