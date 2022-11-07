// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // onYouTubeIframeAPIReady > 절때 바꾸면 안됨
  //<div id="player"></div> # 하지말고 유튜브 명령이 내부적으로 play라는 id값이 찾아짐
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars:{  // 영상을 재생하기 위한 다양한 변수들
      autoplay: true, //자동 재생 유무
      loop : true,  // 반복 재생 유무
      playlist:'An6LvWQuj_8'  // loop가 true면 다시 반복 재생할 유튜브 영상 ID 목록
    },
    events :{
      onReady : function (event) {
        event.target.mute() // target 재생되고 있는 영상 자체 , mute 음소거
      
      }
    }
    
  });
}
