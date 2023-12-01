//8 button: user can select the course by button in registation page.

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