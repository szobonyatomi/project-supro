/* Countdown */

/* With day settings */

/* var yourDateToGo = new Date();
      yourDateToGo.setDate(yourDateToGo.getDate() + 1);   /* set number of days/

      var timing = setInterval(function () {
        var currentDate = new Date().getTime();
        var timeLeft = yourDateToGo - currentDate; */

/* With fix date end */
var beCodeEndDate = new Date('2021-10-26'); /* set end date */

/* timer */

var timing = setInterval(function () {
  var currentDate = new Date().getTime();
  var timeLeft = beCodeEndDate - currentDate;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  if (days < 10) days = '0' + days;
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours < 10) hours = '0' + hours;
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes < 10) minutes = '0' + minutes;
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML =
    '<div class=" p-2 py-lg-3 px-lg-4 bg-white text-center"> <h4> -' +
    days +
    '</h4><p>days</p></div>' +
    '<div class="  p-2 py-lg-3 px-lg-4 bg-white text-center"> <h4> -' +
    hours +
    '</h4><p>hours</p></div>' +
    '<div class=" p-2 py-lg-3 px-lg-4 bg-white text-center"> <h4> -' +
    minutes +
    '</h4><p>minutes</p></div>' +
    '<div class=" p-2 py-lg-3 px-lg-4 bg-white text-center"> <h4> -' +
    seconds +
    '</h4><p>seconds</p></div>';

  if (timeLeft <= 0) {
    clearInterval(timing);
    document.getElementById('countdown').innerHTML = "It's over";
  }
}, 1000);
