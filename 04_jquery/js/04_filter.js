/**
 * filter 관련 메소드
 * - jquery객체안의 요소를 필터링한 jQuery객체를 반환
 *
 * - filter(selector)
 * - first(0
 * - last()
 * - eq(n)
 * - not(selector)
 */
$(btn1).on("click", () => {
  const $h4 = $("h4");
  console.log($h4);

  console.log($h4.filter(".test").css("color", "tomato"));
});
