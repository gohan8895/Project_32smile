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
