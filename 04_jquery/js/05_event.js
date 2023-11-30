/**
 * mouseover/mouseout
 *  - 자식요소 접근시에도 이벤트 발생
 * mouseenter/mouseleave
 * - 자식요소 접근시에도 이벤트발생 안함
 */
// $(".outer").mouseover(() => {
//    console.log('mouseover');
// })
// .mouseout(() => {
//     console.log('mouseout');
// })
// $(".outer")
//   .mouseenter(() => {
//     console.log("mouseenter");
//   })
//   .mouseleave(() => {
//     console.log("mouseleave");
//   });

//hover 이벤트는 존재하지 않는다.
// .hover(() => {
//     console.log('mouseenter');
// }, () => {
//     console.log('mouseleave');
// });

// $(title).hover(() => {
//     $(e.target).addClass('reverse');
// }, (e) => {
//     $(e.target).removeClass('reverse');
// });

// $(counter).on('click', (e) => {
//    let n = $(e.target).html();
//    $(e.target).html(--n);

//    if(n == 0)
//      $(e.target).off('click'); //이벤트핸들러 제거
// });

// $(one),one('click', (e) => {
//     console.log('고기');
//     $(e.target).html('고기');
// });

//trigger event
// $(trg).on('click', (e) => {
//     $(counter).trigger('click'); //클릭이벤트 발생`
// });

$(trg).on('click', (e) => {
    $(counter).triger('click');
});
$(memo).keyup((e) => {
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';
    const fontWeight = len > 30 ? 700 : 400;
    $("#len")
    .html(len)
    .css('color', 'red')
    .css('fontWeight');
});

$(document.memoFrm).submit((e) => {
    const $memo = $(e.target.memo); 
    if($memo.val().length > 30) {
        e.preventDefault();
    }

    // 초기화
    // jquery객체에는 reset이 없다.
    $(e.target).get(0).reset();
});