function initContactUs() {

  var inputName = document.getElementById("name");
  var inputEmail = document.getElementById("email");
  var emailPattern = `/^[A-Za-z]{3}[@][0-9]{3}(.com)$/`;
  var inputGender = document.getElementsByName("gender");
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var inputSubmit = document.getElementById("submitBtn");

  // Username Validation

  inputName.addEventListener("input", function () {
    if (inputName.value.length == 0) {
      inputName.style.border = "2px solid red";
      document.getElementById("nameText").textContent = "Your Name is required ";
    }

    else if (Fname.value.length >= 3) {
      inputName.style.border = "2px solid green"
      document.getElementById("nameText").textContent = "";
    }
    else {
      inputName.style.border = "2px solid red"
      document.getElementById("nameText").textContent = "Your name must be more than 3 chars";

    }
  });


  // Email Validation

  inputEmail.addEventListener("input", function () {
    if (inputEmail.value.length == 0) {
      inputEmail.style.border = "2px solid red";
      document.getElementById("emailText").textContent = "Your Email is Required";
    }
    else if (emailPattern.test(inputEmail.value) == false) {
      inputEmail.style.border = "2px solid red";
      document.getElementById("emailText").textContent = "Your Email is not Valid";
    }
    else {
      inputEmail.style.border = "2px solid green";
      document.getElementById("emailText").textContent = "";
    }
  });


  inputSubmit.addEventListener("click", function (e) {
    debugger;
    e.preventDefault();
    if (inputName.value.length == 0) {
      inputName.style.border = "2px solid red";
      document.getElementById("nameText").textContent = "Your Name Is Required ";
    }
    if (inputEmail.value.length == 0) {
      inputEmail.style.border = "2px solid red";
      document.getElementById("emailText").textContent = "Your Email Is Required";
    }


    if (!inputGender[0].checked && !inputGender[1].checked) {
      document.getElementById("genderText").textContent = "You Must Select Gender";
    }
    else {
      document.getElementById("genderText").textContent = "";
    }
  });

}

initContactUs();