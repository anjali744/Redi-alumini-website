<<<<<<< HEAD
let studentInfo = [
    {
        fullName:"Natalia Silvestre"
    },
    {
        course:"UX/UI Design Basics"
    },
    {
        jobType:"Full time"
    },
    {
        skill:"UI Design"
    },
    {
        location:"Aarhus"
    },
    {
        socialURL:"https://www.w3schools.com/"
    }
];

let selected = studentInfo[2]["jobType"];

let selectedJobType = studentInfo.filter(jobType => selected.includes(jobType.jobType));

console.log(selectedJobType); 

function handleGraduateClick(name, duration, topSkill) {
    alert(`Clicked on ${name}. Looking for: ${duration}. Top skill: ${topSkill}`);
}
// Sample data for demonstration
const alumniData = [
    { name: "Natalia Silvestre", category: "UX/UI Designer", duration: "Full time", location: "Berlin" },
    { name: "Maria Del Pilar Salerno", category: "UX/UI Designer", duration: "Part time", location: "Munich" },
    { name: "Eva Mozule", category: "Web Developer", duration: "Internship", location: "Hamburg" },
    // Add more alumni data as needed
];

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

function handleGetStartedClick(event) {
    let category = document.getElementById("categoryFilter").value;
    let jobType = document.getElementById("durationFilter").value;
    let location = document.getElementById("locationFilter").value;

    let gridItems = document.getElementsByClassName("grid-item");
    let item1 = gridItems[0];
    let attribute = item1.getAttribute("data-location");

    if (location === attribute) {
        item1.style.display = "block";
    } else {
        item1.style.display = "none";
    }
    
}


// Install click handler on the Get Started button.
document.getElementById("getStartedBtn").addEventListener("click", handleGetStartedClick);

=======
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
>>>>>>> 171c42d (adding form with js, responsive design& code check)
