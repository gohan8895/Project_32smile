//Function to validate email for Footer
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

// Validate user Full Name
function validationBlogFullName(event, name) {
  let userNameValue = name.value;
  if (userNameValue === "") {
    alert("Please enter your Full Name!");
    name.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

// Validate input message
function validationBlogMessage(event, message) {
  let userMessage = message.value;
  if (userMessage === "") {
    alert("Please enter your message!");
    message.focus();
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

var blogFullName = document.getElementById("blogName");
var blogEmail = document.getElementById("blogEmail");
var blogBtn = document.getElementById("blogSubmit");
var blogMessage = document.getElementById("Blogmessage");

blogBtn.onclick = function (event) {
  if (validationBlogFullName(event, blogFullName)) {
    if (validationFooterEmail(event, blogEmail)) {
      if (validationBlogMessage(event, blogMessage)) {
        alert(
          "Thank you your sending us your comment." +
            "\nWe will review and update it shortly!"
        );
      }
    }
  }
};

var footerEmail = document.getElementById("footerEmail");
var footerBtn = document.getElementById("footerSubmit");
footerBtn.onclick = function (event) {
  if (validationFooterEmail(event, footerEmail)) {
    alert("Thank you for subscribing us!");
  }
};
