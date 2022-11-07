



const badgeEl = document.querySelector('header .badges');
const toTopEl =document.querySelector('#to-top');     /*    효율적으로 코드를 관리 하기 위해 51번째 줄을 가져와서 올려주고 '#to-top'  >>>>>  toTopEl 로 다 바꿔준다    */ 


window.addEventListener('scroll', _.throttle(function () { /*scroll사용할때 많이 사용 throttle > 일정시간에 한번씩만 실행되도록 제약을 걸었다*/ 
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity :0,
      display:'none' //css속성이므로 문자로 바꿔줘야함
    });                    // gsap.to(요소, 지속시간, 옵션);gsap에서 제공하는 애니메이션 처리 방법중에 to라는 기능을                        // badgeEl.style.display = 'none';  스타일 전형속성에 display값을 어떻게 할것인가
 
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x : 0
    });
  }else {
    // 500이하 일 경우 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity :1,
      display:'block'
    });                                                 // badgeEl.style.display = 'block';  badgeEl 요소라고 한다
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x : 100
    });  
  }
}, 300));
//  _.throttle(함수, 시간) 밀리세컨단위로 사용해야한다.


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo : 0    // 화면에 위치를 0픽셀 지점으로 옮겨주겠다 0.7초 동안 , gsap에서 가져온 plugin을 가져와서 쓸 수 있다.
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){  /* 반복처리하는 함수는 요소들을 쓸 수 있게 데이터로 내어주는데 fadeEl이라는 단수로 사용하기 사용하고 싶은 이름을 사용 할 수 있다 index가 0이라*/
  gsap.to(fadeEl, 1, {
    delay:(index+1)* .7,   //0.7 > 1.4 > 2.1 > 2.7 index가 0이라 1을 더해줌
    opacity: 1
  });
});

// SWIPER
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction :'vertical',  //방향 옵션 : 수직을 의미하는
  autoplay : true,        //자동재생여부
  loop : true             // 자동재생(반복재생)
});
new Swiper('.promotion .swiper-container',{
  slidesPerView:3, //한번에 보여줄 슬라이드 개수 기본값은 1이다
  spaceBetween :10, // 슬라이드 사이 여백
  centeredSlides :true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  autoplay : {
    delay :5000 // 500은 0.5초 마다 슬라이드가 자동으로 된다
  },
  pagination :{
    el :'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable :true // 사용자의 페이지 번호 요소 제어 가능여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 슬라이드 보는 버튼
    nextEl: '.promotion .swiper-next'   //다음 슬라이드 보는 버튼
  }
});

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 하나의 화면에 몇개의 화면이 보일꺼냐
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

// 프로모션 숨기고 열기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion =false; // 보이고 있다
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion  // false로 시작되면서 true가 다시 변수에 들어간다
  if(isHidePromotion){
    // true면 숨김처리!
    promotionEl.classList.add('hide');  //요소부문에 hide가 추가된다
  }else{
    // false면 보임처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {    //(selector ,매개변수, 위아래로 움직이는 크기)
 // gsap.to(요소,시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
      y: size ,                                         //y축으로 얼마만큼 움직이면서 애니메이션 처리를 하는지
      repeat : -1,                                    // -1로 무한반복이 되도록 설정, 라이브러리에서 지원해주는 기능
      yoyo:true,                                      // 한번재생된 애니메이션을 다시 뒤로 재생해서 위에서 밑으로 내려오고 다시 올라가게 해줌
      ease: Power1.easeInOut,
      delay :random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){//반복되는 요소를 적어주기
  new ScrollMagic              //Scene > 제어하려는 섹션들을 라이브러리를 도움받아서 감시하는 옵션. .setClassToggle >클래스를 Toggle넣었다 뺐다 지정할 것이다
    .Scene({
      triggerElement :spyEl,    // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());       

});


