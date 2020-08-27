var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var dateline = document.getElementById("date");

//Validate user First Name
function validationFirstName(event, name) {
  let userNameValue = name.value;
  if (userNameValue == "") {
    alert("Please enter your First Name!");
    name.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

//Validate user Last Name
function validationLastName(event, name) {
  let lastName = name.value;
  if (lastName == "") {
    alert("Please enter your Last Name!");
    name.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

// Validate input Date from user
// Date must be later than the current date
// Accept only Monday to Friday
function checkDate(event, date) {
  let userDate = date.value;
  let dt = new Date(userDate);
  let currentDate = new Date();
  if (userDate) {
    if (dt <= currentDate) {
      alert("Please select a date later then today!");
    } else {
      if (dt.getDay() === 6 || dt.getDay() === 0) {
        alert("Please choose from Monday to Friday only");
      } else {
        return true;
      }
    }
  }
}

function success() {
  alert(
    "Thank you for your registration!" + "\n32 SMILES will contact you shortly"
  );
}

let btn = document.getElementById("firstSubmit");
btn.onclick = function (event) {
  if (validationFirstName(event, fname)) {
    if (validationLastName(event, lname)) {
      if (checkDate(event, dateline)) {
        success();
      }
    }
  }
};

//Generic functions
function validationFooterEmail(event, email) {
  let emailValue = email.value;
  let pattern = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  if (emailValue === "") {
    alert("Please enter your email!");
    email.focus();
    event.preventDefault();
    return false;
  } else if (emailValue.match(pattern)) {
    return true;
  } else {
    alert("Please enter the correct email format. Example: abc@yahoo.com");
    email.focus();
    event.preventDefault();
    return false;
  }
}

//Email subsricde at Footer
var footerEmail = document.getElementById("footerEmail");
let footerBtn = document.getElementById("footerSubmit");
footerBtn.onclick = function (event) {
  if (validationFooterEmail(event, footerEmail)) {
    alert("Thank you for subscribing us!");
  }
};
