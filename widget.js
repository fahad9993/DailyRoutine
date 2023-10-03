// Define the schedule array at the top-level scope so it's accessible to all functions
const schedule = [
  { start: "5:20 AM", end: "6:00 AM", activity: "Salah, Quran" },
  { start: "6:00 AM", end: "7:00 AM", activity: "GRE Words Review" },
  { start: "7:00 AM", end: "9:00 AM", activity: "GRE Verbal" },
  { start: "9:00 AM", end: "11:00 AM", activity: "GRE Quants" },
  { start: "11:00 AM", end: "12:00 PM", activity: "GRE Verbal" },
  { start: "12:00 PM", end: "1:00 PM", activity: "GRE Words Review" },
  { start: "1:00 PM", end: "3:00 PM", activity: "Salah, Lunch" },
  { start: "3:00 PM", end: "4:00 PM", activity: "GRE Quants" },
  { start: "4:00 PM", end: "5:00 PM", activity: "GRE Verbal" },
  { start: "5:00 PM", end: "6:30 PM", activity: "GRE Words Review" },
  { start: "6:30 PM", end: "9:00 PM", activity: "GRE Verbal" },
  { start: "9:00 PM", end: "10:00 PM", activity: "GRE Quants" },
  { start: "10:00 PM", end: "11:00 PM", activity: "GRE Words Review" },
  { start: "11:00 PM", end: "5:20 AM", activity: "Sleep" },
];

document.addEventListener("DOMContentLoaded", function () {
  const widgetContainer = document.querySelector(".all-activity");

  // Populate the widget with schedule data
  schedule.forEach((item) => {
    const timeSlot = document.createElement("div");
    timeSlot.classList.add("time-slot");

    const time = document.createElement("span");
    time.classList.add("time");
    time.textContent = item.start;

    const activity = document.createElement("span");
    activity.classList.add("activity");
    activity.textContent = item.activity;

    timeSlot.appendChild(time);
    timeSlot.appendChild(activity);

    widgetContainer.appendChild(timeSlot);
  });
});

const currentActivityText = document.querySelector(".current-activity-text");

// Function to convert time to a timestamp for comparison
function timeToTimestamp(time) {
  const timeParts = time.split(" ");
  const timeDigits = timeParts[0].split(":");
  let hours = parseInt(timeDigits[0]);
  const minutes = parseInt(timeDigits[1]);

  // Adjust for "PM" times
  if (timeParts[1] === "PM" && hours !== 12) {
    hours += 12;
  }

  return hours * 60 + minutes;
}

// Function to update the current activity
function updateCurrentActivity() {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to a timestamp

  for (const entry of schedule) {
    const startTime = timeToTimestamp(entry.start);
    const endTime = timeToTimestamp(entry.end);

    if (currentTime >= startTime && currentTime <= endTime) {
      currentActivityText.textContent = entry.activity;
      return;
    }
  }

  currentActivityText.textContent = "No scheduled activity at the moment.";
}

// Update the current activity initially
updateCurrentActivity();

// Update the current activity every minute
setInterval(updateCurrentActivity, 60000);
