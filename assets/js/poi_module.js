var POI = (function(){
  
  //vars 

  var elems = {
    button            : document.getElementsByTagName('button')[0], // voice
    button_restartbgm : document.getElementsByTagName('button')[2], // play,restart_bgm
    button_stopbgm    : document.getElementsByTagName('button')[3], // stop_bgm
    yuudachi_3        : document.getElementsByTagName('img')[0],
    yuudachi_6        : document.getElementsByTagName('img')[1]
  };

  var tweets = {
    poi_tweet     : 0,
    poi_count     : 0,
    tweet_message : "I poied " + this.poi_tweet + " poi!"
  };

  // audio
  var poi = new Audio('assets/audio/poi-wav.wav');

  // hide
  elems.yuudachi_6.style.display = "none";


  //pvt. func.

  function ydc_vocalizercounter (e) {
    e.preventDefault();

    if (poi.played) {
      poi.pause();
      poi.currentTime = 0;
    }

    tweets.poi_count++;
    tweets.poi_tweet = tweets.poi_count;
    
    document.getElementById('counter').innerHTML = tweets.poi_count;
    
    poi.play();
  }

  function ydc_mouthopen (e) {
    e.preventDefault();
    elems.yuudachi_3.style.display = "none";
    elems.yuudachi_6.style.display = "block";
  }

  function ydc_mouthclose (e) {
    e.preventDefault();
    elems.yuudachi_3.style.display = "block";
    elems.yuudachi_6.style.display = "none";
  }

  function touchStart(e){
    ydc_vocalizercounter();
    // Dirty fix stalled loading
    ydc_mouthopen();
  }


  /*typical pc browser: onkey- events*/
  elems.button.onkeydown = function(e){
    e.keyCode === 13 ? tweets.poi_count = 0 : ydc_mouthopen();
  };


  // bgm playback 
  // needs to pass scope of bgm to this 
  // or maybe run here everything
  function bgm_start (e, bgm) {
    e.preventDefault();
    bgm.play();
    bgm.loop = true;
  }

  function bgm_stop (e, bgm) {
    e.preventDefault();
    bgm.pause();
    bgm.currentTime = 0;
  }


  function initialize(){
    
    var bgm = new Audio("assets/audio/poi-ost-trimmed.wav");
    bgm.loop = true;
    bgm.play();


    // initialize event, binding
    // attach touch events
    elems.button.addEventListener("touchstart", touchStart, false);
    elems.button.addEventListener("touchend", ydc_mouthclose, false);
    elems.button.addEventListener("touchcancel", ydc_mouthclose, false);

    //attach click, mouse events, keyboard
    elems.button.addEventListener("click", ydc_vocalizercounter, false);
    elems.button.addEventListener("mousedown", ydc_mouthopen, false);
    elems.button.addEventListener("mouseup", ydc_mouthclose, false);
    elems.button.addEventListener("keyup", ydc_mouthclose, false);

    elems.button_restartbgm.addEventListener("click", bgm_start.bind(bgm),false);
    elems.button_stopbgm.addEventListener("click", bgm_stop.bind(bgm),false);

  }


  // exposed public
  return { initialize:initialize };

})();

POI.initialize();

