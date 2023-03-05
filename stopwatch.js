let startBtn = document.querySelector(".Swa_Op-start");
let stopBtn = document.querySelector(".Swa_Op-stop");
let clearBtn = document.querySelector(".Swa_Op-clear");
let lapBtn = document.querySelector(".Swa_Op-lap");

let hours = 0;
let minutes = 0;
let seconds = 0;

let active = false;

startBtn.onclick = function () {
  if (active == false) {
    active = true;
    timeoutId = setInterval(function () {
      seconds++;

      if (seconds > 59) {
        seconds = 0;
        minutes++;
        if (minutes > 59) {
          minutes = 0;
          hours++;
          if (hours > 59) {
            hours = 0;
          }
        }
      }

      document.getElementById("time").innerText =
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  }
};

stopBtn.onclick = function () {
  clearInterval(timeoutId);
  active = false;
};

clearBtn.onclick = function () {
  clearInterval(timeoutId);
  active = false;
  hours = 0;
  minutes = 0;
  seconds = 0;

  document.getElementById("time").innerText = "00:00:00";
};

let records = "";
var count = 0;

lapBtn.onclick = function () {
  // 숫자 증가시키키
  let number = document.createElement("number");
  count = count + 1;
  number.innerText = count;

  // 시간부분
  records = document.getElementById("time").innerText + "\n";
  let list = document.querySelector("#RecordBox");

  let div = document.createElement("div");
  list.appendChild(div);
  // div 박스 꾸미기

  div.style.height = "60px";
  div.style.lineHeight = "60px";
  div.style.boxShadow =
    " 4px 4px 6px -1px rgba(0, 0, 0, 0.2), -4px -4px 6px -1px rgba(255, 255, 255, 1)";
  div.style.borderRadius = "10px";
  div.style.fontSize = "18px";
  div.style.fontWeight = "700";
  div.style.marginBottom = "20px";

  let span = document.createElement("span");
  div.style.textAlign = "center";

  span.innerText =
    count + "Lap" + "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0" + records;

  div.appendChild(span);
};
