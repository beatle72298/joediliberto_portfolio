
    
$(document).ready(function(){  

var ball   = document.querySelector('.box');
var garden = document.querySelector('.garden');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;    

if(window.DeviceOrientationEvent){
    console.log('this poopin browser supports DEVICEORIENTATION!');
    //document.addEventListener('mousemove', getMouse);
    window.addEventListener('deviceorientation', handleOrientation, false);
} else{
    console.log('this poopin device sucks and does not support orientation');
}

function handleOrientation(event) {
  var  x = event.beta;  // In degree in the range [-180,180]
  var  y = event.gamma; // In degree in the range [-90,90]

  //output.innerHTML  = "beta : " + x + "\n";
  //output.innerHTML += "gamma: " + y + "\n";
        
      // Because we don't want to have the device upside down
      // We constrain the x value to the range [-90,90]
      if (x >  90) { x =  90};
      if (x < -90) { x = -90};

      // To make computation easier we shift the range of 
      // x and y to [0,180]
      x += 90;
      y += 90;

      // 10 is half the size of the ball
      // It center the positioning point to the center of the ball
      ball.style.top  = (maxY*y/180 - 100) + "px";
      ball.style.left = (maxX*x/180 - 100) + "px"; 
        

    if (x == 90){
    mapMouse();
    console.log("x="+x);
    //mapOrientation();
    } else{
    console.log('Device Orientation changed!');
    console.log("x="+x);
  //document.removeEventListener('mousemove', getMouse);
  //clearInterval(followMouse);
  //mapOrientation();
} 
}
    
function mapMouse(){
    document.addEventListener("mousemove", getMouse); 
    var car = document.getElementById("car");
    var carpos = {x:0,y:0};   
        
		setInterval(followMouse, 50);
		
        
        
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		var dir = "right";
		
        
         var initX;
    
        function getMouse(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
            
        
		
         var lastX = 0;
         var diffX = 0;
        
        setTimeout(getMouseStart, 400);
        function getMouseStart(){
            initX = mouse.x;
            //console.log('initX:' + initX);
            //console.log('getMouseStart() FIRED!!')
        };
            
        //console.log('initX2:' + initX);
        lastX = e.pageX;        
        diffX = initX - lastX;
            
        //console.log('lastX:' + lastX);
        //console.log('diffX:' + diffX);
        
        //clearInterval();
        if(diffX >= 550){
            $('#car').addClass('do-transition');
            setTimeout(function(){
            $('#car').removeClass('do-transition');    
            },600);    
        } else if(diffX <= -550){
            $('#car').addClass('do-transition');
            setTimeout(function(){
            $('#car').removeClass('do-transition');    
            },600);   
        };
        //clearTimeout();
    }
   
    
    
		function followMouse(){       
            
			//1. find distance X , distance Y
			var distX = mouse.x - carpos.x;
			var distY = mouse.y - carpos.y;
			//Easing motion 
			carpos.x += distX/5;
			carpos.y += distY/2;
			
            var carScale = 'scale('+ mouse.y/300 +')';
            //car.style.transform = '"'+ carScale +'"';
            car.style.transform = carScale;
            
            
            
            
			car.style.left = carpos.x + "px";
			car.style.top = carpos.y + "px";
            
            
            
            //console.log(carScale);
            
            if (mouse.y < 450){
                car.style.top = 460 + 'px';
                car.style.transform = "scale(1.5)";
            } else if(mouse.y > 700){
                car.style.top = 700 + 'px';
            } else {
                //car.style.top = carpos.y + 'px';
            }    
        }
};
    
    
    
    
	   
        
    
    
    $('.slick').slick({
        slidesToShow: 1,
        initialSlide: 1,
        variableWidth: true,
        arrows: false,
        autoplay: false,
        infinite: false,
        dots: false,
        centerMode: false,
        adaptiveHeight: false,
        draggable: false,
        fade: false,
        speed: 300,
    });
    
    $('.slick-2').slick({
        slidesToShow: 1,
        initialSlide: 0,
        rows: 1,
        variableWidth: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        dots: false,
        adaptiveHeight: true,
        draggable: false,
        fade: true,
        speed: 200,
    });
    
    $('.slick-3').slick({
        slidesToShow: 1,
        initialSlide: 1,
        rows: 1,
        slidesPerRow: 0,
        variableWidth: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        dots: false,
        adaptiveHeight: true,
        draggable: false,
        fade: true,
        speed: 200,
        centerMode: false,
    });
    
    $('#slick-4').slick({
        slidesToShow: 3,
        initialSlide: 0,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        dots: false,
        adaptiveHeight: true,
        draggable: false,
        fade: false,
        speed: 50,
        centerMode: true,
        centerPadding: '200px',
    });
    


    //Music Player Slider Control    
    $('#nextBtn').click(function(){
        $('#slick-4').slick('slickNext');
    });
    
    $('#prevBtn').click(function(){
        $('#slick-4').slick('slickPrev');
    });
    
    $('.arrow').click(function(e){
        var targetSlide = $(this).data('target');
        $('#slick-1').slick('slickGoTo', targetSlide);
        player.soundPause();
//        player.once('pause', function(){
//            
//        });
    });
    
    

//DESIGN & DEV NAV ANIMATION   
    $('.dd-menu a').click(function(e){
        $('.dd-menu a.active').removeClass('active');
        $(this).addClass('active');
        var targetSlide = $(this).data('target');
        $('#slick-3').slick('slickGoTo', targetSlide);
        player.soundPause();
    });
    
//AUDIO NAV ANIMATION   
    $('.audio-menu a').click(function(e){
        $('.audio-menu a.active').removeClass('active');
        $(this).addClass('active');
        var targetSlide = $(this).data('target');
        $('#slick-2').slick('slickGoTo', targetSlide);
        player.soundPause();
    });
    


//LEFT HOVER STYLE EFFECT
    $('.left').hover(function(){
        $('.c1').toggleClass('hover');
        $('.c2').toggleClass('hover');
    });
    
//RIGHT HOVER STYLE EFFECT
    $('.right').hover(function(){
        $('.c4').toggleClass('hover');
        $('.c5').toggleClass('hover');
    });

//LEFT HOVER GLITCH EFFECT   
    $('.left').hover(
        function(){
            $('.glitch-1').mgGlitch({
            glitch: true});
        }, function(){
            $('.glitch-1').mgGlitch({
            glitch: false, destroy: true});
        });

//RIGHT HOVER GLITCH EFFECT
    $('.right').hover(
        function(){
            $('.glitch-2').mgGlitch({
            glitch: true});
        }, function(){
            $('.glitch-2').mgGlitch({
            glitch: false, destroy: true});
        });

    
//AUDIO PAGE (BACK HOME ARROW/ BUTTON GLITCH EFFECT)
$('.b1').hover(
        function(){
            $('.glitch-3').mgGlitch({
            glitch: true});
            $('.b1').addClass('hover');
        }, function(){
            $('.glitch-3').mgGlitch({
            glitch: false, destroy: true});
            $('.b1').removeClass('hover');
        });

//D&D PAGE (BACK HOME ARROW/ BUTTON GLITCH EFFECT)
$('.b2').hover(
        function(){
            $('.glitch-4').mgGlitch({
            glitch: true});
            $('.b2').addClass('hover');
        }, function(){
            $('.glitch-4').mgGlitch({
            glitch: false, destroy: true});
            $('.b2').removeClass('hover');
});

$('.audio-menu a').click(function(){
//    $('#slick-1').addClass('hover');
//    setTimeout(function(){
//        $('#slick-1').removeClass('hover');
//    },300);
    
//    $('.glitch-5').mgGlitch({glitch: true, destroy: false});
//    setTimeout(function(){
//        $('.glitch-5').mgGlitch({glitch: false, destroy: true})
//    }, 500);
});


    
$( function(){
    $('.glitch').mgGlitch({
        destroy: false,
        glitch: true,
        scale: false,
        blend: true,
        blendModeType: 'overlay',
        glitch1TimeMin: 50,
        glitch1TimeMax: 500,
        glitch2TimeMin: 200,
        glitch2TimeMax: 800,
        zIndexStart: 3,
    });
    $('.glitch-1').mgGlitch({
        destroy: false,
        glitch: false,
        scale: true,
        blend: true,
        blendModeType: 'overlay',
        glitch1TimeMin: 10,
        glitch1TimeMax: 20,
        glitch2TimeMin: 10,
        glitch2TimeMax: 20,
        zIndexStart: 8,
    });
    $('.glitch-2').mgGlitch({
        destroy: false,
        glitch: false,
        scale: true,
        blend: true,
        blendModeType: 'overlay',
        glitch1TimeMin: 10,
        glitch1TimeMax: 20,
        glitch2TimeMin: 10,
        glitch2TimeMax: 20,
        zIndexStart: 8,
    });
    $('.glitch-3').mgGlitch({
        destroy: false,
        glitch: false,
        scale: true,
        blend: true,
        blendModeType: 'overlay',
        glitch1TimeMin: 10,
        glitch1TimeMax: 20,
        glitch2TimeMin: 10,
        glitch2TimeMax: 20,
        zIndexStart: 9999,
    });
    $('.glitch-4').mgGlitch({
        destroy: false,
        glitch: false,
        scale: true,
        blend: true,
        blendModeType: 'overlay',
        glitch1TimeMin: 10,
        glitch1TimeMax: 20,
        glitch2TimeMin: 10,
        glitch2TimeMax: 20,
        zIndexStart: 9999,
    });
    $('.glitch-5').mgGlitch({
        destroy: false,
        glitch: false,
        scale: scale,
        blend: true,
        blendModeType: 'screen',
        glitch1TimeMin: 10,
        glitch1TimeMax: 100,
        glitch2TimeMin: 10,
        glitch2TimeMax: 200,
        zIndexStart: -1,
    });
    
//    setTimeout(function(){
//        $('.glitch-5').mgGlitch({destroy: true, glitch: false});
//    }, 10);
});

    

//TYPING EFFECT

var type = $('#type');

    
    
type.data('text', type.text());
type.html('');
type.removeClass('zeroOpacity');

    
// typer
function typer(text, n, speed) {
        
    if (n < (text.length)) {
        type.html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            typer(text, n, speed)
        }, speed);
    }
}

var text = type.data('text');
typer(text, 0, 50);
    




//VIDEO PLAYLIST

vidPlayer = videojs("video-player"); 
//    {techOrder: ['html']}, function(){
//    videojs_player = this;
//    videojs_player.play();}

var sp = ' | ';
var br = '<br>'
    
//VIDEO METADATA
var vidPlaylist = [{
    name: 'Jodie | Short Film',
    year: '(2020)',
    genre: 'Comedy',
    credits: 'Director: Jake Meyer',
    description: "Loyola University New Orleans senior thesis short. Jodie is a young woman in a complete stalemate with her parents, boss, and friends constantly blowing up her phone and proving her dissatisfaction is entirely founded.",
    mycredits: 'Production Sound Mixer' + sp + 'Post-Production Sound Supervisor'+sp+'Post-Production Sound Editor' + sp + 'Post-Production Sound Mixer' +sp+'Foley Supervisor',
    duration: 520,
    sources: [{
        src: 'https://youtu.be/OJ6DYzNNPoM',
        type: 'video/youtube'
    }],
    poster: 'images/VidThumb_Jodie1.jpg',
    thumbnail: [{
      srcset: 'images/VidThumb_Jodie1.jpg',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_Jodie1.jpg'
    }]
},
{
    name: 'The Dead Still Dream | Short Film',
    year: '(2020)',
    genre: 'Comedy',
    credits: 'Director: Molly Redepenning',
    description: "Loyola University New Orleans senior thesis short. The Dead Still Dream follows an undead high school student as he manuvers all the usual difficulties of adolescence and tries to find his place in the world and his human peers.",
    mycredits: 'Grip' + sp + 'Associate Producer' + sp + 'Production Sound Supervisor' +sp+ 'Production Sound Mixer' + sp + 'Boom Operator',
    duration: 481,
    sources: [{
        src: 'https://www.youtube.com/embed/SS45sZFLok4&amp;showinfo=0;',
        type: 'video/youtube'
    }],
    youtube: {
        ytcontrols: 0,
        modestbranding: 1,
    },
    poster: 'images/VidThumb_Molly.png',
    thumbnail: [{
      srcset: 'images/VidThumb_Molly.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_Molly.png'
    }]

}, {
    name: 'They | Short Film',
    year: '(2020)',
    genre: 'Comedy/Drama',
    credits: 'Director: Mary Grace Copa',
    description: "Loyola University New Orleans senior thesis short. They is about a battle with pronouns, priests, and princesses... Well, wannabe princesses.",
    mycredits: 'Production Sound Supervisor' + sp + 'Production Sound Mixer',
    duration: 274,
    sources: [{
        src: 'https://youtu.be/Re7mu7EBSAU',
        type: 'video/youtube'
    }],
    poster: 'images/VidThumb_They.png',
    thumbnail: [{
      srcset: 'images/VidThumb_They.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_They.png'
    }]
},
{
    name: 'Directorial & Cinematography Reel',
    year: '(2018)',
    genre: '',
    credits: 'N/a',
    description: "This is a little five minute showcase of some projects that I am post proud of. All of the works featured in this reel are ones in which I was a key creative role, many times wearing a belt full of titles.",
    mycredits: 'Writer' +sp+ 'Director' + sp + 'Cinematographer' + sp + 'Editor' + sp + 'Many More...',
    duration: 299,
    sources: [{
        src: 'https://youtu.be/gqlb6HsWnWU',
        type: 'video/youtube'
    }],
    poster: 'images/VidThumb_Reel.png',
    thumbnail: [{
      srcset: 'images/VidThumb_Reel.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_Reel.png'
    }] 
},
{
    name: 'The Knight School | Branding Animation',
    year: '(2017)',
    genre: 'N/a',
    credits: 'N/a',
    description: "Motion graphic I put together for The Knight School America, LLC, a chess school with a nationwide network of coaches. I also edited 100+ PowerPoint lessons into video format to enable nationwide franchising.",
    mycredits: 'Motion Graphics Designer/Editor' +sp+ 'Project Manager',
    duration: 2,
    sources: [{
        src: 'https://youtu.be/Jnt6kPjsYcU',
        type: 'video/youtube'
    }],
    poster: 'images/VidThumb_TKS.png',
    thumbnail: [{
      srcset: 'images/VidThumb_TKS.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_TKS.png'
    }]
    
}, {
    name: 'Faythe | Music Video',
    year: '(2017)',
    genre: 'Music Video',
    credits: 'Songwriter/Performer: Joe Diliberto',
    description: "Faythe is a music video I put together to accompany my original song by the same name. The concept was to have a cloud of colorful 3-D particles that react and move with the music. The camera pushes into the cloud and then... There I am.",
    mycredits: 'Songwriter' + sp + 'Performer' + sp + 'Director' + sp + 'Editor' +sp+ 'Visual Effects Artist/Editor',
    duration: 264,
    sources: [{
        src: 'https://www.youtube.com/watch?v=k7JKNOq-ADw',
        type: 'video/youtube',
    }],
    poster: 'images/VidThumb_Faythe.png',
    thumbnail: [{
      srcset: 'images/VidThumb_Faythe.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_Faythe.png'
    }]
    
}, {
    name: 'Pocket Change | Music Video',
    year: '(2017)',
    genre: 'Music Video',
    credits: 'Songwriter/Performer: Elijah Poston',
    description: "Final project submission for Digital Filmmaking I class. Pocket Change follows a disgruntled musician quarreling with lost love and lost dollars.",
    mycredits: 'Writer' +sp+ 'Producer' +sp+ 'Director' +sp+ 'Cinematographer' +sp+ 'Visual Effects Supervisor/Editor' +sp+ 'Assistant Editor',
    duration: 317,
    sources: [{
        src: 'https://youtu.be/vLb8QiG45qg',
        type: 'video/youtube'
    }],
    poster: 'images/VidThumb_PocketChange.png',
    thumbnail: [{
      srcset: 'images/VidThumb_PocketChange.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_PocketChange.png'
    }]
    
},{
    name: 'The Exchange | Short Action Scene',
    year: '(2016)',
    genre: 'Action',
    credits: 'Songwriter/Performer: Elijah Poston',
    description: "Final project submission for Digital Filmmaking I class. Pocket Change follows a disgruntled musician quarreling with lost love and lost dollars.",
    mycredits: 'Director' +sp+ 'Fight Choreographer' +sp+ 'Visual Effects Supervisor/Editor' +sp+ 'Editor' +sp+ 'Post-Production Sound Editor/Mixer' +sp+ 'Foley Supervisor'+sp+'Score Composer',
    duration: 124,
    sources: [{
        src: 'https://www.youtube.com/watch?v=REwbCR8Grxw',
        type: 'video/youtube'
    }],
    poster: 'images/VidThumb_TheExchange.png',
    thumbnail: [{
      srcset: 'images/VidThumb_TheExchange.png',
      type: 'image/png',
      media: 'min-width: 400px;'
    },
    {
      src: 'images/VidThumb_TheExchange.png'
    }]
},
];
    

vidPlayer.playlist(vidPlaylist);

vidPlayer.playlist.autoadvance(0);

vidPlayer.playlist.repeat(true);

vidPlayer.playlistUi();

$('.ytp-pause-overlay').hide();
$('.ytp-pause-overlay').addClass('none');
$('.ytp-pause-overlay').addClass('none');

function horizPlaylist(){
    if (x.matches){
        vidPlayer.playlistUi({horizontal: false});
        $('.vjs-playlist').removeClass('vjs-playlist-horizontal');
        $('.video-player-wrap').prepend($('.vjs-playlist'));
    } else {
        vidPlayer.playlistUi({horizontal: true});
        $('.video-player-wrap').append($('.vjs-playlist'));
    }
}

var x = window.matchMedia('(min-width: 1200px)')
horizPlaylist(x)
x.addListener(horizPlaylist)

    
function removeStars(){
    if (x2.matches){
        $('#starfield').remove();
        $('.glitch-1').mgGlitch({destroy: true,glitch: false});
        $('.glitch-2').mgGlitch({destroy: true,glitch: false});
        $('.glitch-3').mgGlitch({destroy: true,glitch: false});
        $('.glitch-4').mgGlitch({destroy: true,glitch: false});
        $('.glitch-1').removeClass('glitch-1');
        $('.glitch-2').removeClass('glitch-2');
        $('.glitch-3').removeClass('glitch-3');
        $('.glitch-4').removeClass('glitch-4');
        
    } else{
        //$('body').prepend('<canvas id="starfield"></canvas>');
    }
}    

var x2 = window.matchMedia('(max-width: 775px)')    
removeStars(x2)
x2.addListener(removeStars);
//setInterval(horizPlaylist, 1000);


// VIDEO PLAYER INFO HOVER
    
var isClicked;    
var holdHover;
$('#infobtn').hover(
   function(){
   holdHover = setTimeout(function(){
       $('#vid-overlay').slideDown(200);    
   }, 100);
},
    function(){
    isClicked = $('#vid-overlay').hasClass('infoclick');
    if(isClicked == true) {
        console.log('Ive been clicked. Help me Jesus!')
   } else{
        clearTimeout(holdHover);
        $('#vid-overlay').slideUp(200);     
   }
});
    
$('#infobtn').click(function(){
    $('#vid-overlay').toggleClass('infoclick');
    $('#vid-overlay.infoclick').slideDown(200);
    //vidPlayer.playlistUi({horizontal: false});
});  
    

//VIDEO METADATA DISPLAY PANE
var elms = ['vidDescription', 'vid-overlay', 'vidYear', 'vidCredits', 'myvidCredits', 'vidName', 'vidGenre'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

vidGenre.innerHTML = vidPlaylist[0].genre;
vidName.innerHTML = vidPlaylist[0].name;
vidDescription.innerHTML = vidPlaylist[0].description;
vidYear.innerHTML = vidPlaylist[0].year;
vidCredits.innerHTML = vidPlaylist[0].credits;
myvidCredits.innerHTML = vidPlaylist[0].mycredits;
    
vidPlayer.on('playlistitem', function(){
   var self = this;
   var data = vidPlayer.playlist.currentIndex();
   vidName.innerHTML = vidPlaylist[data + 0].name;
   vidYear.innerHTML = vidPlaylist[data + 0].year;
   vidGenre.innerHTML = vidPlaylist[data + 0].genre;
   vidDescription.innerHTML = vidPlaylist[data + 0].description;
   vidCredits.innerHTML = vidPlaylist[data + 0].credits;
   myvidCredits.innerHTML = vidPlaylist[data + 0].mycredits;  

});

//   vidPlayer.on("play", function () {
//        bgMusic.pause();
//   });
//    
//    vidPlayer.on("pause", function () {
//        bgMusic.play();
//});      
    
    
//vidPlayer.on('play', () => {
//   bgMusic.pause(); 
//});
    
//vidPlayer.on('play', bgMusicPause());
//
var isPaused= vidPlayer.paused();    
//
//function bgMusicPause(){
//    if (isPaused == false){
//        bgMusic.stop();
//    }else{
//        bgMusic.play();
//    }
//}    
//    
//setInterval(function(){
//    bgMusicPause();   
//}, 500);
    
console.log(isPaused);

    
function vidAutoPause(){
//    vidPlayer.pause();
     vidPlayer.on("play", function () {
        bgMusic.pause();
     });
    
    vidPlayer.on("pause", function () {
        if (bgMusic.playing() == false){
            bgMusic.play();
        }
    });  
};    

    

    
//PAUSE VIDPLAYER ON SLIDECHANGE
    
$('#slick-1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('vidPlayerPAUSED: ' + isPaused);
//    console.log('')
    vidPlayer.pause();
    vidAutoPause();  
    //console.log('vidPlayerSuccess?:' + vidPlayer);
});

$('#slick-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('vidPlayerPAUSED: ' + isPaused);
    vidPlayer.pause();
});
    
$('#slick-3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//    console.log('vidPlayerPAUSED: ' + isPaused);
    vidPlayer.pause();

});
    
window.addEventListener("deviceorientation", handleOrientation, true); 
    
//if (window.DeviceOrientationEvent){
 


//var road = document.querySelector('body');
//var car = document.querySelector('#car');   
    
//var maxY = road.clientWidth - car.clientWidth;
//var maxX = road.clientHeight - car.clientHeight;
    
//function handleOrientation(event) {
  //var absolute = event.absolute;
  //var alpha    = event.alpha;
    
    
  //var x  = event.beta;
  //var y  = event.gamma;
    
    
  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
 // if (x >  90) { x =  90};
  //if (x < -90) { x = -90};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  //x += 90;
  //y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
//  car.style.top  = (maxY*y/180 - 10) + "px";
 // car.style.left = (maxX*x/180 - 10) + "px";
  
     //   if (mouse.y < 450){
     //           car.style.top = 460 + 'px';
     //           car.style.transform = "scale(1.5)";
     //       } else if(mouse.y > 700){
     //           car.style.top = 700 + 'px';
     //       } else {
     //           //car.style.top = carpos.y + 'px';}    

//}
    
//window.addEventListener("deviceorientation", handleOrientation, true); 

    
     
//}
 
//document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
    
    
    
});





//var saveSeek;


 bgMusic = new Howl({
   src: ['audio/Bg_Shyguys_Pursuit_1.mp3'],
//    src: ['audio/BgSprite_Marvel83_2049_Song.mp3'],
    volume: 0.5,
    loop: true,
});  

    






   
    
    
 bgMusicLoader = new Howl({
   src:['audio/BgSprite_Marvel83_2049_Intro.mp3'],
    volume: 0.5,
    preload: true,
    loop: true,
    sprite: {
        loadermusic:[0, 9500, true]
    }
});

bgMusicLoader.play('loadermusic');



 sprites = new Howl({
       src: ['audio/PoopySFX_1.mp3'],
       volume: 0.2,
       preload: true,
       onplayerror: function(){
            sprites.once('unlock', function(){
               sprites.play('startup1'); 
            });
        },
        sprite: {
            startup1:[0, 1668],
            glitch: [1668, 667],
            click1: [2336, 467],
            click2: [2803, 567],
            click3: [3370, 601],
            click4: [3971, 534],
            click5: [4505, 267],
            slide1: [4771, 801],
            slide2: [5572, 1368],
            slide3: [6940, 1201],
            slide4: [8141, 1301],
            slidefast1: [9443, 701],
            slidefast2: [10143, 701],
            slide5: [10844, 1168],
            startup2: [12012, 934],
            powerdown: [12946,1068],
        }
        
});

function toggleSpritesMute(){
    var vol = sprites.volume();
    if (vol == 0.00){
        sprites.volume(0.02);
        $('#mute').removeClass('muted');
    } else{
        sprites.volume(0.00);
        $('#mute').addClass('muted');
    }
}

function toggleBgMusicMute(){
    var vol = bgMusic.volume();
    if (vol == 0.00){
        bgMusic.volume(0.5);
    } else{
        bgMusic.volume(0.00);
    }
}


$('#mute-btn').click(function(){
   toggleSpritesMute();
   toggleBgMusicMute();
});

$('#mute-btn').hover(function(){
   sprites.play('click1');
});

$('#welcome_btn').mouseenter(function(){
   sprites.play('click1');
});

$('#welcome_btn').click(function(){
   sprites.play('startup1');
   sprites.play('click4');
   sprites.play('slide5');
   sprites.play('glitch');
   bgMusicLoader.stop();
//   bgMusic.play();
   const id1 = bgMusic.play();
    
});

$('.arrow').click(function(){
   sprites.play('slide3');
//   bgMusic.play();
});

$('.main-nav').mouseenter(function(){
   sprites.play('click1'); 
});

$('.dd-menu a').mouseenter(function(){
   sprites.play('click1');
});

$('.audio-menu a').mouseenter(function(){
   sprites.play('click1');
});

$('#social-bar i').mouseenter(function(){
   sprites.play('click1');
});


$('.audio-menu a').click(function(){
   sprites.play('click2');
   sprites.play('slidefast1');
//   bgMusic.play();
});

//$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//    var slick = $('#slick-1');
//    sprites.play('slide3');
//});
    
//setInterval(function(){sprites.play('startup2')})


    
    


$(function() {
        // Load the Folio theme
//        Galleria.loadTheme('/scripts/galleria.folio.min.js');

        // Initialize Galleria
        Galleria.run('.galleria', {
            _center: true,
        });
});