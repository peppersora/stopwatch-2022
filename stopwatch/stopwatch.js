//1. 버튼 가져오기
let startBtn =  document.querySelector(".stopBox_startBtn");
let stopBtn = document.querySelector(".stopBox_stopBtn");
let clearBtn = document.querySelector(".stopBox_clearBtn");
let lapBtn = document.querySelector(".stopBox_lapseBtn");
// console.log(startBtn,stopBtn,clearBtn,lapBtn);


/* 스톱워치 작동 방식
strat 버튼, stop 버튼, clear버튼이 존재
1. 60초가 되면 00이되면서 분이 01분으로 바뀌고
60분이 되면 01시가 된다는 것을 이용...

*/
let hours=0;
let minutes=0;
let seconds=0;

/* setInterval의 중복 해결을위해
active = false;로 설정 해놓고 Start 버튼을 클릭 할 때 
if문으로 조건 확인 후 실행  
false일 때, 타이머 실행 및 false -> true
-> true일 때, 현재 타이머 실행 중으로 Start 버튼을 눌러도 호출 X*/
let active = false;

startBtn.onclick=function(){
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
          (seconds < 10 ? "0" + seconds : seconds) 
           
          ;

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
let records ="";

lapBtn.onclick = function(){
    
   records= document.getElementById("time").innerText+"\n";
   
//    document.querySelector(".Record_ul").innerText=records;
    let list = document.querySelector(".Record_ul");
    
    let li = document.createElement("li");
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerText = records;
    
    li.appendChild(span);
    
    
    
    
 
    
    
    
}





    

