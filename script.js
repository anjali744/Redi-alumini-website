
//function handleGraduateClick(name, duration, topSkill) {
//    alert(`Clicked on ${name}. Looking for: ${duration}. Top skill: ${topSkill}`);
//}
// Sample data for demonstration
//const alumniData = [
//    { name: "Natalia Silvestre", category: "UX/UI Designer", duration: "Full time", location: "Berlin" },
//    { name: "Maria Del Pilar Salerno", category: "UX/UI Designer", duration: "Part time", location: "Munich" },
//    { name: "Eva Mozule", category: "Web Developer", duration: "Internship", location: "Hamburg" },
//    // Add more alumni data as needed
//];

// Function to filter alumni based on selected values
function filterAlumni() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const durationFilter = document.getElementById("durationFilter").value;
    const locationFilter = document.getElementById("locationFilter").value;

    const filteredAlumni = alumniData.filter(alumni => {
        return (
            (categoryFilter === "" || alumni.category === categoryFilter) &&
            (durationFilter === "" || alumni.duration === durationFilter) &&
            (locationFilter === "" || alumni.location === locationFilter)
        );
    });

    // Call a function to update the UI with the filtered alumni data
    updateUI(filteredAlumni);
}

// Function to update the UI with filtered alumni data
function updateUI(filteredAlumni) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = ""; // Clear existing content

    filteredAlumni.forEach(alumni => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        // Customize the HTML structure for each alumni card
        gridItem.innerHTML = `
            <div class="grid-item${alumni.category === 'Web Developer' ? '1' : ''}">
                <img src="${alumni.imageUrl}" alt="${alumni.name}" style="width: 100%" />
                <h4><b>${alumni.name}</b></h4>
                <p>Looking for: ${alumni.duration}</p>
                <p>Top skill: ${alumni.category}</p>
            </div>
        `;
        gridContainer.appendChild(gridItem);
    });
}

// Attach the filterAlumni function to the change event of each dropdown
// document.getElementById("categoryFilter").addEventListener("change", filterAlumni);
// document.getElementById("durationFilter").addEventListener("change", filterAlumni);
// document.getElementById("locationFilter").addEventListener("change", filterAlumni);

// Initial display of all alumni
// filterAlumni();



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
document.getElementById("getStartedBtn").addEventListener("click", handleGetStartedClick);
//Yui end here.



//6 button: user can select the course by button in registation page.

var selectedSkills = [];

function toggleSkill(skill) {
  var index = selectedSkills.indexOf(skill);

  if (index === -1) {
    selectedSkills.push(skill);
  } else {
    selectedSkills.splice(index, 1);
  }
  document.getElementById("resultInput").value = selectedSkills.join(", ");
}

// function previewImage() {
var input = document.getElementById("img");
var preview = document.getElementById("preview-img");

var file = input.files[0];

if (file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    preview.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

//adding browser photo in registration form.
function previewImage() {
  var input = document.getElementById("img");
  var preview = document.getElementById("preview-img");

  var file = input.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
}

//registration form error

function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }

  if (name.length == 0) {
    seterror("name", "*Length of name cannot be zero!");
    returnval = false;
  }

  var course = document.forms["myForm"]["fcourse"].value;
  if (course.length <= 5) {
    seterror("course", "*Please enter your course!");
    returnval = false;
  }

  var jobtype = document.forms["myForm"]["fjobtype"].value;
  if (jobtype.length <= 5) {
    seterror("jobtype", "*Enter your full job title name!");
    returnval = false;
  }

  var location = document.forms["myForm"]["flocation"].value;
  if (location.length < 3) {
    seterror("location", "*Enter your city name!");
    returnval = false;
  }

  var social = document.forms["myForm"]["fsocial"].value;
  if (social == 0) {
    seterror("social", "*Length of social cannot be zero! ");
    returnval = false;
  }

  return returnval;
}
