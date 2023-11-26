
/**
 * 모든 태그객체는 Node와 Element를 상속한다
 * 
 * - Node
 *      - textNode
 *      - CommentNode
 *      - Element
 *  - Element(태그객체)
 */
document.querySelector("#btn1").addEventListener('click', () => {
    const sample = document.querySelector("#sample");
    console.dir(sample);

    console.dir(Node.prototype);
    console.dir(Element.prototype)
});
/**
 * 새로운 요소
 * 1. innerHTML
 * 2. Tag객체로 만들어서 DOM Tree에 추가
 */
document.querySelector("#btn2").addEventListener("click", () => {
    const h2 = document.createElement("h2");
    const text = document.createTextNode("Helloworld"); //'Helloworld'
    h2.appendChild(text);
    document.querySelector('#target').appendChild(h2); //
    //이벤트핸들러
    h2.addEventListener("mouseover", () => {
        console.log('수박');
    });
});

/**
 * img 태그 생성
 */
document.querySelector("#btn3").addEventListener('click', () => {
    const img = document.createElement("img"); // <img/>
    img.src = '../sample/images/hyunta.jpg'
    img.alt = '예쁜 강아지 사진';
    img.style.width = '200px'
    document.querySelector('#target').appendChiled(img);
    
});

/**
 * 요소제거
 * - remove() 스스로 제거
 * - removeChild(child) 자식요소 제거
 */
document.querySelector("#btn4").addEventListener('click', () => {
    const foo = document.querySelector("#foo");
    foo.remove();
});

document.querySelector("#btn4").addEventListener('click', () => {
    const list = document.querySelector("#list");

    const foo = document.querySelector("#foo");
    list.remove(foo);

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
});

/**
 * DOM Traversing
 * - 특정요소에서 DOM Tree를 따라 다음요소를 찾아가는 기술
 * 
 * Node
 * - 자식 FirstChild | lastChild | childNodes
 * - 부모 parentNode
 * - 형제 nextSibling | previousSibling
 * 
 * Element
 * - 자식 firstElementChild | lastElementChild | children
 * - 부모 parentElement
 * - 형제 nextElementSibling | previousElementSibling
 */
document.querySelector('#btn6').addEventListener('click', () => {
    const src = document.querySelector(".wrapper");
    const p1 = src.firstElementChild;

    const p5 = src.lastElementChild;
    console.log(src. p1, p5, p);

    p1.style.color = 'hotpink'
});

document.querySelector('#btn7').addEventListener('click', () => {
    const src = document.querySelector("#p3");
    const parent = src.parentElement;
    console.log(src, parent);
});

document.querySelector('#btn8').addEventListener('click', () => {
    const src = document.querySelector("#p3");
    const prevSibling = src.previousElementSibling.previousElementSibling //#p1;
    const nextSibling = src.nextElementSibling;

    console.log(src, prevSibling, nextSibling);
});

document.querySelector('#btn9').addEventListener('click', () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.children.forEach((child, index) => {
        console.log(child, index);
        const newText = document.createTextNode('😒${index + 1}');
    });
});