/**
 * window
 * - 브라우저 최상위객체
 * - 탭별로 하나씩 존재함.
 *
 * - BOM Browser Object Model - navigator, history, screen, ...
 * - DOM Document Object Model - document
 * - Javascript Object
 */
const test1 = () => {
  console.log(window);
};

/**
 * open
 * - 새창(탭/팝업)을 여는 함수
 * - 새창의 window객체를 반환. 해당 창에 대한 제어 가능
 */
const test2 = () => {
  //open(url, name, spec)
  // open('01_hellojs.html', 'hellojs', '');
  const newWindow = open(
    "01_hellojs.html",
    "hellojs",
    "width=500, height=300, top=400, left=400"
  );
  // const newWindow = open('01_hellojs.html', '_self');
  console.log(newWindow);

  setTimeout(() => {
    // newWindow.close();
    newWindow.alert("악악헤악");
    newWindow.document.write("<h1> 트으리 </h1>");
  }, 3000);
};
/**
 * Time API - setTimeout
 * - milli초 후에 callback함수 실행
 * - js의 시간은 쓰레드 스케쥴링에 의해 늘어질 수 있다.
 */
const test3 = () => {
  const timeoutId = setTimeout(() => {
    alert("빵빠레");
  }, 1000);
  console.log("취소");
};

(() => {
  setTimeout(() => {
    console.log("회원가입후 더많은 혜택을 누리세요");
  }, 5000);
})();
/**
 * setInterval(callbackFunction, millis)
 * - mills초 후에 callbackFunction을 실행
 * - millis초 간격으로 callbackFunction을 실행
 * - clearInteval(id)취소하기 전까지 실행!!!
 */
let intervalid;
const test4 = () => {
  let i = 1;
  setInterval(() => {
    console.log(i++);
  }, 1000);
  console.log(intervalid, "번 인터벌이 등록되었습니다.");
};

/**
 * 사용자 타이머
 */
let timeoutId;
const test5 = () => {
  const message = document.getElementById("message").value;
  const seconds = document.getElementById("sec").value;

  // Perform actions with 'message' and 'seconds' values, e.g., set a timer
  console.log(`Message: ${message}, Seconds: ${seconds}`);

  // Example: Set a timer to display the message after the specified seconds
  const messageVal = message.value;

  if (!message.value || !sec.value) {
    alert("유효한 값을 입력하세요");
    return;
  }
  setTimeout(() => {
    alert(messageVal);
    timeoutId = undefined;
  }, seconds * 1000);
  console.log(timeoutId, "번 타이머가 설정되었습니다.");

  //초기화
  message.value = "";
  sec.value = "";
};

const test6 = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    alert("타이머가 취소되었습니다");
  }
};

/**
 * 초시계
 */

const clock = (n) => n <10 ? ;{
  const d = new Date();
  const hh = d.getHours
  const hh = d.getMinutes
  const hh = d.getSeconds
  console.log(`$hh~`);
  
}

document.querySelector("#clocdk-display"
    document.)