// elems
var button                = document.getElementsByTagName('button')[0]; // voice
var button_restartbgm     = document.getElementsByTagName('button')[2]; // play,restart_bgm
var button_stopbgm        = document.getElementsByTagName('button')[3]; // stop_bgm
var yuudachi_3            = document.getElementsByTagName('img')[0];
var yuudachi_6            = document.getElementsByTagName('img')[1];

// strings,const
var poi_tweet, poi_count  = 0;
var tweet_message         = "I poied " + poi_tweet + " poi!";

// audio
var poi                   = new Audio('assets/audio/poi-wav.wav');

// hide
yuudachi_6.style.display = "none";

// attach touch events
button.addEventListener("touchstart", touchStart, false);
button.addEventListener("touchend", ydc_mouthclose, false);
button.addEventListener("touchcancel", ydc_mouthclose, false);

//attach click, mouse events, keyboard
button.addEventListener("click", ydc_vocalizercounter, false);
button.addEventListener("mousedown", ydc_mouthopen, false);
button.addEventListener("mouseup", ydc_mouthclose, false);
button.addEventListener("keyup", ydc_mouthclose, false);

function ydc_vocalizercounter (e) {
  e.preventDefault();

  if (poi.played) {
    // reset to start
    poi.pause();
    poi.currentTime = 0;
  }

  poi_count++;
  poi_tweet = poi_count;
  
  document.getElementById('counter').innerHTML = poi_count;
  
  poi.play();
}

function ydc_mouthopen (e) {
  e.preventDefault();
  yuudachi_3.style.display = "none";
  yuudachi_6.style.display = "block";
}

function ydc_mouthclose (e) {
  e.preventDefault();
  yuudachi_3.style.display = "block";
  yuudachi_6.style.display = "none";
}


/* touch based*/

function touchStart(e){
  ydc_vocalizercounter();
  // Dirty fix stalled loading
  ydc_mouthopen();
}


/*typical pc browser: onkey- events*/

button.onkeydown = function(e){
  e.keyCode == 13 ? poi_count = 0 : ydc_mouthopen();
};


// bgm playback 

button_restartbgm.onclick = function (e) {
  e.preventDefault();
  bgm.play();
  bgm.loop = true;
}

button_stopbgm.onclick = function (e) {
  e.preventDefault();
  bgm.pause();
  bgm.currentTime = 0;
}





//=======================================================================================

// https://twittercommunity.com/t/insert-dynamic-content-into-data-text-attribute/19598/6
// document.getElementById('twitter-share-btn').setAttribute("data-text" , "I poied " + poi_tweet + " poi!" );

//=======================================================================================

//Twitter web Intent

document.getElementById("twitter-tweet").addEventListener("click",function(e){
  event.preventDefault();
  window.open(
    "https://twitter.com/intent/tweet?text=I%20poied%20"  + poi_tweet + "%20POI!",
    "Tweet this"
  );
});