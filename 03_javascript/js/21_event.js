const test1 = (e) => {
  console.log("컵켘");
  console.log(e);
};

document.querySelector("#btn2").onclick = (e) => {
  console.log("쁘레첼");
  console.log(e);
  console.log(document.querySelector("#btn2").onclick);
};

document.querySelector("#btn2").addEventListener("click", (e) => {
  console.log("도나쓰");
  console.log(e);
});

document.querySelector("#btn3").addEventListener("click", (e) => {
  console.log("커피커피");
});
document.querySelector("#btn3").addEventListener("click", (e) => {
  console.log("녹차녹차");
});

document.querySelector("#btn4").onclick = function (e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.innerHTML);
  console.log(this);
  console.log(this === e.target);
};

document.querySelector("#nickname").onfocus = (e) => {
  console.log("#nickname 포커싱 되었습니다.");
};

document.querySelector("#nickname").onblur = (e) => {
  console.log("#nickname 포커스를 잃었습니다..");
  const value = e.target.value;
  console.log(value);
  if (!value) {
    alert("별칭은 필수입니다.");
  }
};

document.querySelector("#memo").onkeyup = (e) => {
  // key | keyCode | code
  console.log(e.target.value);

  //엔터확인
  if (e.keyCode === 13) alert(e.target.value);
};
/**
 * 제출버튼클릭 -> submit이벤트 발생 -> submit이벤트 핸들러 (유효성검사) 호출 -> 제출
 * - 제출방지 event.preventDefault();
 */
const Frm = document.signupFrm;
console.log(frm);
const username = frm.username;
const password = frm.password;
const confirmPassword = frm["confirm-password"];

document.signupFrm.onsubmit = (e) => {
  const frm = e.target;
  console.log("submit");
};


//   console.log(frm, username, password, confirmPassword);

//아이디검사(4글자이상)
if (username.value.length < 4) {
  alert("아이디는 4글자 이상이어야 합니다.");
  e.preventDefault(); //제출방지
  return;
};
//비밀번호 검사 (4글자 이상)
if (password.value.length < 4) {
  alert("비밀번호는 4글자 이상이어야 합니다..");
  e.preventDefault(); //제출방지
  return;
};
// 비밀번호 일치여부 검사
if (notequalPassword()) {
  e.preventDefault();
  return;
};

const notequalPassword = () => {
    password.value !== confirmPassword.value
    if(bool) {
        alert('두 비밀번호가 일치하지 않습니다.');
        password.select(); //입력값 선택상태
    };
    return bool;
}

//blur 이벤트핸들러 바인딩
confirmPassword.onblur = notequalPassword;

confirmPassword.onblur = notequalPassword;
const requestSignup = () => {
  console.log("폼 제출 성공~");
  //signupFrm 내용출력 / 초기화
  //honggd/1234 회원가입을 요청했습니다.
};

/**
 * 이벤트 전파 Event Propagation
 * - bubbling : 자식객체에서 발생한 이벤트는 부모객체로 전파된다.
 */
// document.querySelector("#bubble1").onclick = (e) => {
//     console.log('#bubble1', e);
// } 

// document.querySelector("#bubble2").onclick = (e) => {
//     console.log('#bubble2', e);
//     e.stopPropagation(); // 전파중지
// } 

// document.querySelector("#bubble3").onclick = (e) => {
//     console.log('#bubble3', e);
// } 

document.querySelector("#bubble1").onclick = () =>  {
    switch(e.target.id) {
        case 'bubble1' : console.log('#bubble1'); break;
        case 'bubble2' : console.log('#bubble2'); break;
        case 'bubble3' : console.log('#bubble3'); break;

    }
}

/**
 * 임의의 이벤트 생성
 * - #btn5 -> #btn1 클릭핸들러 호출!
 */
document.querySelector('#btn5').onclick = () => {

    const event = new MouseEvent('click')
    document.querySelector("#btn1").dispatchEvent(event);
};