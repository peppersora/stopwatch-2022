// /1. 버튼 가져오기
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

      /* 나타내기
          삼항연산자 이용=> hours, minutes,seconds가 10보다 
          작다면..? 01:...*/
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

/* laptop에 기록하기 => 멈추지 않고 누르는 순간에 기록 가져오기
 */
// 기록장을 공백으로 초기화
// 표기법 : "lap"+i+":"+"";
let records = "";

lapBtn.onclick = function () {
  records = document.getElementById("time").innerText + "\n";

  //    document.querySelector(".Record_ul").innerText=records;
  let list = document.querySelector(".Record_ul");

  let li = document.createElement("li");
  list.appendChild(li);
  let span = document.createElement("span");
  span.innerText = records;

  li.appendChild(span);
};
