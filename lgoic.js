const card1 = document.getElementById("card-1");
const fSecs = document.getElementById("fsec");
const bSecs = document.getElementById("bsec");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");
console.log(Array.from(card1.childNodes)[2]);

//zajmijmy sie czasem
const maxTime = new Date(1619998084000);
console.log(maxTime);
let currTime = new Date();
let timeDiff;
let days;
let hours;
let minutes;
let seconds;
// co sekunde srpawdzam zmiane czasu

const auto = (el, val) => {
  const arr = Array.from(el.childNodes);
  console.log(val,arr[1].innerText)
  if(arr[1].innerText =="" ||arr[3].innerText=="" ){
    arr[1].innerText = val;
    arr[3].innerText = val;
  }else{
  if (arr[1].innerText !=val) {
    el.classList.toggle("flip");
    if (!el.classList.contains("flip")) {
      arr[1].innerText = val;
      setTimeout(() => {
        arr[3].innerText = val;
      }, 300);
    } else {
      arr[3].innerText = val;
      setTimeout(() => {
        arr[1].innerText = val;
      }, 300);
    }
  }}
};

currTime = new Date();
timeDiff = Math.abs(maxTime - currTime) / 1000;
days = Math.floor(timeDiff / (3600 * 24));
hours = Math.floor(timeDiff / 3600) % 24;
minutes = Math.floor(timeDiff / 60) % 60;
seconds = Math.floor(timeDiff) % 60;
console.log(days, hours, minutes, seconds);
auto(card1, seconds);
auto(card2, minutes);
auto(card3, hours);
auto(card4, days);


setInterval(() => {
  currTime = new Date();
  timeDiff = Math.abs(maxTime - currTime) / 1000;
  days = Math.floor(timeDiff / (3600 * 24));
  hours = Math.floor(timeDiff / 3600) % 24;
  minutes = Math.floor(timeDiff / 60) % 60;
  seconds = Math.floor(timeDiff) % 60;
  console.log(days, hours, minutes, seconds);
  auto(card1, seconds);
  auto(card2, minutes);
  auto(card3, hours);
  auto(card4, days);

  console.log(card1.childNodes);
}, 1000);
