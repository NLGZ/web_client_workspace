/**
 * 정규표현식 Regular Expression
 * - 문자열에 대해서 유효성검사/검색/대체등을 처하기 위한 표현식
 * - 조건/ 반복처리를 내부적으로 진행. 간결하게 작성가능하다.
 * - 문법자체 숙지 어려운편.
 * - 언어독립적으로
 */

document.querySelector("#btn1").addEventListener("click", () => {
  // 하나의 문자가 숫자(0123456789)인지 검사하는 정규식
  const re = /[0-9]/gi;
  const re2 = new RegExp(/[0-9]/gi);
  const re3 = new RegExp("[0-9]");

  console.dir(re, re2, re3);

  //정규식 메소드
  // RegExp#test(string): boolean
  console.log(re.test("abc123")); //true
  console.log(re.test("xyz12345")); //false

  //문자열 메소드
  //String#split(re): strng[]
  console.log("a1b3c3d".split(re)); //['a','b','c','d']

  //Strig#replace(re, newString): string
  console.log("abc-123".replace(re, "*")); //abc-***
  console.log("abc1def2ghi".replace(re, "<$&>")); //abc<1>def<2>ghi

  //String#match(re):{} 매칭된 결과를 배열로 반환
  console.log("a1b2c3d".match(re)); //['1', '2', '3']

  // String#search(re):number 매칭된 문자열의 인덱스반환
  console.log("a1b2c3d".search(re)); // 1
  console.log("xyzㅋㅋㅋㅋ".search(re)); // -1
});

/**
 * flags 옵션
 * - g : global 전역비교 수행
 * - i : ignore 대소문자 구분안함
 * - m : multiline 여러줄인 경우 행단위 비교
 */

document.querySelector("#btn2").addEventListener("click", (e) => {
  const src = "Javascript Jquery Ajax sass";
  const area = e.target.nextElementSibling;
  area.innerHTML = `<p>${src.replace(/a/g, "<mark>$&</mark>")}</p>`;
  area.innerHTML += `<p>${src.replace(/a/g, "<mark>$&</mark>")}</p>`;
  area.innerHTML += `<p>${src.replace(/a/gi, "<mark>$&</mark>")}</p>`;
});

/**
 * anchor
 * - ^ 시작
 * - $ 끝
 */
document.querySelector("#btn3").addEventListener("click", (e) => {
  const src = "Javascript Jquery Ajax sass";
  const area = e.target.nextElementSibling;

  area.innerHTML = `<p>${src.replace(/j/gi, `<mark>$&</mark>`)}</p>`;
  area.innerHTML += `<p>${src.replace(/^j/gi, `<mark>$&</mark>`)}</p>`;
  area.innerHTML += `<p>${src.replace(/x/gi, `<mark>$&</mark>`)}</p>`;
  area.innerHTML += `<p>${src.replace(/x$/gi, `<mark>$&</mark>`)}</p>`;

  const src2 = `Javascript
jQuery
Ajax
satisfiesxxx`;

area.innerHTML += `<p>${src.replace(/^j/gi, `<mark>$&</mark>`)}</p>`;
area.innerHTML += `<p>${src.replace(/x$/gi, `<mark>$&</mark>`)}</p>`;
});

/**
 * 임의의 문자하나.
 * - 문자/특수문자/공백
 * - 개행문자는 처리되지 않음.
 */
document.querySelector("#btn4").addEventListener("click", (e) => {
    const re = /^a.b/;
    console.log(re.test('acb'));//true
    console.log(re.test('a b'));//ture
    console.log(re.test('a*b'));//ture
    console.log(re.test('ab'));//false
    console.log(re.test('a\nb'));//false
    //in다음에 한글자로 끝나느 문자열 검사
    const re2 = /in.$/;
    console.log(re2.test('going')); //ture
    console.log(re2.test('inner')); //false
    console.log(re2.test('holidayin')); //false 

});
/**
 * []한글자에 대한 값목록
 * - ascii code기반으로 범위설정 가능
 * - ^으로 시작하면 반전처리
 */
document.querySelector("#btn5").addEventListener("click", (e) => {
    const src = `ABCDEFGhijklmn 가나다라마바사ㅋㅋㅎㅎㅓㅓㅏㅏ1234567890 !@#$%^&*()\t\n`; 
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/[aj]/gi, '<mark>$&</mark')}</p>`
    area.innerHTML += `<p>${src.replace(/[^aj]/gi, '<mark>$&</mark')}</p>`
    area.innerHTML += `<p>${src.replace(/[^aj]/gi, '<mark>$&</mark')}</p>`

    area.innerHTML += `<p>${src.replace/[0123456789]/gi '<mark>$&</mark')}</p>`


//알파벳 소문자로 시작하는 문자열 검사
const re = /^[a-z]/i;
console.log(re.test('abcde')); // true
console.log(re.test('aㅏㅏㅏㅏ')); // true
console.log(re.test('ABCDE')); // false
console.log(re.test('가나다')); // false

// 숫자 4자리인지 검사
const re2 = /^\d{4}$/;
console.log(re2.test('1234')); // true
console.log(re2.test('12345')); // false
console.log(re2.test('abcd')); // false
console.log(re2.test('12')); // false


});

/**
 * 단축문자(문자하나)
 * \d digit 숫자
 * \w word 영문자 숫자
 * \s 
 */
document.querySelector("#btn6").addEventListener("click", (e) => { 
    const src = "Javascript Jquery Ajax sass";
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/\d/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\W/g, '<mark>$&</mark>')}</p>`;

});

/**
 * ()그룹핑 목적
 * | OR
 */
document.querySelector("#btn5").addEventListener("click", (e) => {
    const src = '월요일에는 월요병, 화가 부르르르 화요일 홧병, 수수술한잔 하는 수요일, 목이 컥~ 목요일, 금방 오지 않는 금요일, 하지만 오늘은 금요일';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/(월요일|수요일|금요일)/g, '<mark>$&</makr>')}</p>`;
});

/**
 * Escaping
 * - ^$|[]. 문법요소를 문자 그대로 사용하려면 \를 이용해 escaping처리 필수
 */
document.querySelector("#btn5").addEventListener("click", (e) => {
    const src = '3.4$';
    const area = e.target.nextElementSibling;

    area.innerHTML = '<p>'
});

document.querySelector("password").addEventListener('blur', () => {
    const regexps = [/^.{8,12}$/, / /, / /, / /];
    const value = e.target.value;

    //문자 8~12자리
    if(!regexps[0].test(value)){
        alert('비밀번호는 8~12자리여야 합니다.');
        return
    }
}








/**
 * @실습문제 주민번호
 * - 6자리생년월일- 7자리 숫자
 *  '유효한 주민번호 입니다.' 출력
 */
document.querySelector("#btn-ssn").addEventListener('click', (e) => {
    const ssnInput = document.querySelector("#ssn-input").value;
    const regex = /^\d{6}-\d{7}$/;

    if (regex.test(ssnInput)) {
        console.log('유효한 주민번호 입니다.');
    } else {
        console.log('유효하지 않은 주민번호 입니다.');
    }
});

