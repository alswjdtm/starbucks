/* .serch input을 찾기 위해서 앞에 serch를 찾았으므로 .serch를 지우고 document> serchEl*/ 
const serchEl = document.querySelector('.serch');
const serchInputEl= serchEl.querySelector('input'); /*찾아 놓은 요소로부터 찾는거 */

serchEl.addEventListener('click', function(){
  serchInputEl.focus();
});

serchInputEl.addEventListener('focus', function () {    // 위serchInputEl랑 여기 serchInputEl랑 다르다
  serchEl.classList.add('focused'); //특정요소에 클래스 내용을 추가 하겠다
  serchInputEl.setAttribute('placeholder','통합검색');  //(속성이름 ,들어갈 속성값)set ~지정한다 html속성을Attribute라한다
});

serchInputEl.addEventListener('blur', function () {    //focus가 해제 되는걸 > blur
  serchEl.classList.remove('focused'); // remove >지워준다s
  serchInputEl.setAttribute('placeholder','');  
});

//올해가 몇년도인지 자동으로 만들어 주기

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022      // textContent속성 글자 내용들을 값을 알아내거나 값을 지정하는 용도