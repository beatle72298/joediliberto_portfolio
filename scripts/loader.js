$('#welcome_btn').fadeOut(10);

let power = function() {
    let loaderWrap = document.getElementById("loader-wrap");
    loaderWrap.className = (loaderWrap.className == "on") ? "off" : "on";
}

$(document).ready(function(){
    
      var stupidJs = setTimeout(screenOff, 20000);
      //var stupidJs = setTimeout(screenOff, 10);

    function screenOff(){
        $('.on #content').css('animation','screen-turn-off .4s linear .5s 1 both reverse');
        $('#welcome_btn').delay(900).fadeIn(500, function(){
            $('#welcome_btn').after($('#sound_on'));    
        });
    };
    
    $('#welcome_btn').click(function(){
        fuckYou(); 
    });
    
    function fuckYou(){
      $('#loader-wrap').fadeOut(200, function(){
          $('#loader-wrap').remove();
      });
      
    };
    
///LOADER BAR ANIMATION 
    function searchBarAnimate(){
	var $bar = $(".loader-bar");
	var $loadtime = $("#loader-text")
	var inc = 30;

	var sp = 1;
		
	animateOrangeLoader(inc, sp);
						
	function animateOrangeLoader(inc, sp){
		var timer = setInterval(function(){
      //width of the bar holder
			if(inc < 337){
        //inc increments the bar's width every 20 milliseconds
				inc++;
        //console.log(inc)
		//at 50% of the width of the bar holder..
        //clear the interval, and you 
        //can also add friendly messages 
				if(inc == 168){
					clearInterval(timer);
					timer = setTimeout(function(){
						sp = 70; 
						animateOrangeLoader(inc, sp);
					}, 300);
					
				}
				//90%
				if(inc == 303){				
					clearInterval(timer);
					timer = setTimeout(function(){
						sp = 30;
						animateOrangeLoader(inc, sp);
					}, 800);	
				}
				//95%
				if(inc == 320){
					clearInterval(timer);
					timer = setTimeout(function(){
						sp = 1000;
						animateOrangeLoader(inc, sp);
					}, 800);
					
				}
				$bar.css('width',inc + "px");
				$loadtime.text(Math.floor(inc / 3.34));
			}else {
				clearInterval(timer);}}, sp);
        }
    }
searchBarAnimate();
    
    
    
    
    
});