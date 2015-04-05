var button = document.getElementsByTagName('button')[0];
var yuudachi = document.getElementsByTagName('img')[0];
var poi = new Audio('assets/audio/poi-wav.wav');

/*touch events*/
button.addEventListener("touchstart", touchStart, false);
button.addEventListener("touchend", touchEnd, false);
button.addEventListener("touchcancel", touchCancel, false);

poi_count = 0;

/*typical pc browser: mouse events*/
button.onclick = function (e) {
    e.preventDefault();

    console.log(poi.play ? "true" : "nope");
    console.log("Latest playback frame: " + poi.currentTime);

    if (poi.played) {
        poi.pause();
        poi.currentTime = 0;
    }

    poi_count++;
    document.getElementById('counter').innerHTML = poi_count;
    poi.play();
};

button.onmousedown = function (){
    yuudachi.src = "yuudachi-6.jpg";
};

button.onmouseup = function(){
    yuudachi.src = "yuudachi-3.jpg";
};





/* touch based*/

function touchStart(e){
    e.preventDefault();

    console.log(poi.play ? "true" : "nope");
    console.log("Latest playback frame: " + poi.currentTime);

    if (poi.played) {
        poi.pause();
        poi.currentTime = 0;
    }

    poi_count++;
    document.getElementById('counter').innerHTML = poi_count;
    poi.play();
    yuudachi.src = "yuudachi-6.jpg";
}
function touchEnd(e){
    e.preventDefault();
    yuudachi.src = "yuudachi-3.jpg";
}
function touchCancel(e){
    /*touchcancel: a touch is interrupted (implementation specific).*/
    e.preventDefault();
    yuudachi.src = "yuudachi-3.jpg";
}

