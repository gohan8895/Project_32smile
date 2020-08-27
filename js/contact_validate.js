var fname = document.getElementById("contactFname");
var cEmail = document.getElementById("contactEmail");
var cButton = document.getElementById("contactSubmit");
var cMailSubject = document.getElementById("contactSubject");
var cMessage = document.getElementById("contactMessage");


function validationFirstName(event, name) {
  let userNameValue = name.value;
  if (userNameValue == "") {
    alert("Please enter your Full Name!");
    name.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

function validationMailSubject(event, subject) {
  let emailSubject = subject.value;
  if (emailSubject == "") {
    alert("Please enter email subject!");
    subject.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}
function validationContactMessage(event, message) {
  let emailSubject = message.value;
  if (emailSubject == "") {
    alert("Please tell us your message!");
    message.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

function success() {
  alert(
    "Thank you for your registration!" + "\n32 SMILES will contact you shortly"
  );
}

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

//Validate form
cButton.onclick = function (event) {
  if (validationFirstName(event, fname)) {
    if (validationFooterEmail(event, cEmail)) {
      if (validationMailSubject(event, cMailSubject)) {
        if (validationContactMessage(event, cMessage)) {
          success();
        }
      }
    }
  }
};

//Email subsricde at Footer
var footerEmail = document.getElementById("footerEmail");
let footerBtn = document.getElementById("footerSubmit");
footerBtn.onclick = function (event) {
  if (validationFooterEmail(event, footerEmail)) {
    alert("Thank you for subscribing us!");
  }
};
