button = document.getElementsByTagName('button')[0];
yuudachi_3 = document.getElementsByTagName('img')[0];
yuudachi_6 = document.getElementsByTagName('img')[1];

// audio
poi 		= new Audio('assets/audio/poi-wav.wav');

yuudachi_6.style.display = "none";

/*touch events*/
button.addEventListener("touchstart", touchStart, false);
button.addEventListener("touchend", touchEnd, false);
button.addEventListener("touchcancel", touchCancel, false);

poi_tweet = 0;
poi_count = 0;

tweet_message = "I poied " + poi_tweet + " poi!";

/*typical pc browser: mouse events*/
button.onclick = function (e) {
	e.preventDefault();

	if (poi.played) {
		poi.pause();
		poi.currentTime = 0;
	}

	poi_count++;
	poi_tweet = poi_count;
	document.getElementById('counter').innerHTML = poi_count;
	poi.play();
	console.log("poi_tweet: " + poi_tweet);
	console.log("Total poi: " + poi_count);
};

button.onmousedown = function (){
	//yuudachi.src = "yuudachi-6.jpg";

	/*Dirty fix stalled loading*/
	yuudachi_3.style.display = "none";
	yuudachi_6.style.display = "block";
};

button.onmouseup = function(){
	//yuudachi.src = "yuudachi-3.jpg";

	/*Dirty fix stalled loading*/
	yuudachi_3.style.display = "block";
	yuudachi_6.style.display = "none";
};


/*typical pc browser: onkey- events*/
button.onkeydown = function(e){
	if(e.keyCode == 13) {
		poi_count = 0;
	}else{

		yuudachi_3.style.display = "none";
		yuudachi_6.style.display = "block";
	}
};

button.onkeyup = function(e){
	yuudachi_3.style.display = "block";
	yuudachi_6.style.display = "none";
};


/* touch based*/

function touchStart(e){
	e.preventDefault();

	if (poi.played) {
		poi.pause();
		poi.currentTime = 0;
	}

	poi_count++;
	document.getElementById('counter').innerHTML = poi_count;
	poi.play();

	//yuudachi.src = "yuudachi-6.jpg";


	/*Dirty fix stalled loading*/
	yuudachi_3.style.display = "none";
	yuudachi_6.style.display = "block";

}

function touchEnd(e){
	e.preventDefault();

	//yuudachi.src = "yuudachi-3.jpg";


	/*Dirty fix stalled loading*/
	yuudachi_3.style.display = "block";
	yuudachi_6.style.display = "none";

}

function touchCancel(e){
	/*touchcancel: a touch is interrupted (implementation specific).*/
	e.preventDefault();

	//yuudachi.src = "yuudachi-3.jpg";


	/*Dirty fix stalled loading*/
	yuudachi_3.style.display = "block";
	yuudachi_6.style.display = "none";
}

// https://twittercommunity.com/t/insert-dynamic-content-into-data-text-attribute/19598/6
// document.getElementById('twitter-share-btn').setAttribute("data-text" , "I poied " + poi_tweet + " poi!" );

//Twitter web Intent
document.getElementById("twitter-tweet").addEventListener("click",function(e){
  event.preventDefault();
  window.open(
    "https://twitter.com/intent/tweet?text=I%20poied%20"  + poi_tweet + "%20POI!",
    "Tweet this"
  );
});