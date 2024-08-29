// variable for datapicker
let datapicker = document.querySelector("#User_date_picker");
let Choose_Date = document.querySelector("#Choose_Date");

// variable for printing Values
// function Ca  lculateAge() {
//     console.log(user_input);
// }
let AgeYears = document.querySelector("#AgeYears");
let AgeMonths = document.querySelector("#AgeMonths");
let AgeDays = document.querySelector("#AgeDays");
let AgeHours = document.querySelector("#AgeHours");
let AgeSeconds = document.querySelector("#AgeSeconds");
let AgeMiliSeconds = document.querySelector("#AgeMiliSeconds");

datapicker.addEventListener("change", function() {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let SelectedDate = new Date(this.value);
    // console.log(this.value);
    let DOB = SelectedDate.toLocaleDateString("en-US", options);
    // console.log(`DOB is ${DOB}`);
    Choose_Date.innerHTML = `DOB : ${DOB}`;
    let MiliSeconds_btw_DOB = Date.parse(DOB);
    let MiliSeconds_btw_now = Date.now();
    let Age_in_milisecond = MiliSeconds_btw_now - MiliSeconds_btw_DOB;
    // console.log(Age_in_milisecond);
    let miliseconds = Age_in_milisecond;
    let second = 1000;
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;

    let Years = Math.round(miliseconds / year);
    let months = Years * 12;
    let days = Years * 365;
    let hours = Math.round(miliseconds / hour);
    let seconds = Math.round(miliseconds / second);
    AgeYears.innerHTML = Years;
    AgeMonths.innerHTML = months;
    AgeDays.innerHTML = days;
    AgeHours.innerHTML = hours;
    AgeSeconds.innerHTML = seconds;
    AgeMiliSeconds.innerHTML = miliseconds;

    document.querySelector(".age_cal").classList.add("expand");
});
// console.log();