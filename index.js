let counter = document.getElementById("count");
let incBtn = document.getElementById("inc-btn");
let logBtn = document.getElementById("log-btn");
let saveBtn = document.getElementById("save-btn");
let prevEntries = document.getElementById("prev-ent");
let recoverBtn = document.getElementById("recover-btn");
let allEntries = {};

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

logBtn.addEventListener("click", () => {
  prevEntries.textContent += `${count} - `;
  counter.textContent = 0;
  count = 0;
});

function getCurrDate(currentDate) {
  let datetime =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " @ " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  return datetime;
}

saveBtn.addEventListener("click", () => {
  let currentdate = new Date();
  let datetime = getCurrDate(currentdate);
  let currDateTime = JSON.stringify(datetime);
  let entry = prevEntries.textContent.split(":")[1];
  let total = 0;
  allValues = entry.split("-");
  allValues.forEach((value) => {
    total += Number(value);
  });
  console.log(allValues);
  allEntries[currDateTime] = {
    values: entry,
    total: total,
  };
  localStorage.setItem("entries", JSON.stringify(allEntries));
});

recoverBtn.addEventListener("click", () => {
  window.location.replace("records.html");
});
