var list = document.getElementsByClassName("fa-bars")[0];
var message = document.getElementsByClassName("fa-facebook-messenger")[0];
var notification = document.getElementsByClassName("fa-bell")[0];
var dropDown = document.getElementsByClassName("fa-caret-down")[0];

var messageB = document.getElementById("message");
var notificationB = document.getElementById("notification");
var listB = document.getElementById("list");
var dropDownB = document.getElementById("dropDown");

message.addEventListener("click", () => {
  if (messageB.style.display == "block") {
    messageB.style.display = "none";
  } else {
    messageB.style.display = "block";
  }
});
list.addEventListener("click", () => {
  if (listB.style.display == "block") {
    listB.style.display = "none";
  } else {
    listB.style.display = "block";
  }
});
notification.addEventListener("click", () => {
  if (notificationB.style.display == "block") {
    notificationB.style.display = "none";
  } else {
    notificationB.style.display = "block";
  }
});
dropDown.addEventListener("click", () => {
  if (dropDownB.style.display == "block") {
    dropDownB.style.display = "none";
  } else {
    dropDownB.style.display = "block";
  }
});
