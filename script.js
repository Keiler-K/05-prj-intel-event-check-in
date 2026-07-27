// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const greetingMessage = document.querySelector(".greetingMessage");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const currentAttendeeList = document.getElementById("currentAttendeeList");

//Track Attendance
let count = 0;
const maxCount = 50;
let attendees = [];

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  // Increment attendance
  count++;
  attendeeCount.textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  progressBar.style.width = percentage;

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Update current attendee list
  attendees.push(name+": " + teamName);
  currentAttendeeList.textContent = attendees.join(", ");

  // Welcome the user
  const message = "Welcome to team " + teamName + ", " + name + "!";
  greetingMessage.textContent = message;
  greetingMessage.classList.remove("fade-out");
  greetingMessage.classList.add("show");

  setTimeout(function () {
    greetingMessage.classList.add("fade-out");

    setTimeout(function () {
      greetingMessage.classList.remove("show");
      greetingMessage.classList.remove("fade-out");
    }, 400);
  }, 1000);

  // Output values into console
  console.log(name, teamName);
  console.log(count);
  console.log(count + " (" + percentage + ") in attendance");
  console.log(message);

  // Clear the form on submit
  form.reset();
});
