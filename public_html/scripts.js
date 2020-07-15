

$(document).ready(function(){  
    
    
    
    
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
        speed: 500,
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
        initialSlide: 0,
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
        speed: 100,
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
        glitch1TimeMin: 10,
        glitch1TimeMax: 100,
        glitch2TimeMin: 10,
        glitch2TimeMax: 200,
        zIndexStart: 8,
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
        zIndexStart: 8,
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
        zIndexStart: 8,
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

var vidPlayer = videojs("video-player"); 
//    {techOrder: ['html']}, function(){
//    videojs_player = this;
//    videojs_player.play();}


    
//VIDEO METADATA
var vidPlaylist = [{
    name: 'Jodie | Short Film',
    description: 'Production Sound Supervisor, Production Sound Mixer, Post-Production Sound Supervisor, Editor, and Mixer',
    duration: 520,
    sources: [{
        src: 'video/Jodie CONFORM_071020.mp4',
        type: 'video/mp4'
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
    description: 'Lorem ipsum shit my pantsum1',
    duration: 481,
    sources: [{
        src: 'https://www.youtube.com/embed/SS45sZFLok4&amp;showinfo=0;',
        type: 'video/youtube'
    }],
    youtube: {
        controls: 0,
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
    description: 'Lorem ipsum shit my pantsum2',
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
    description: 'Test Description 1',
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
    description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
    duration: 2,
    sources: [{
        src: 'video/Logo.mp4',
        type: 'video/mp4'
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
    description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
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
    description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
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
    description: 'Lorem ipsum shit my pantsum3',
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
    


var elms = ['vidDescription', 'vid-overlay'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

vidDescription.innerHTML = vidPlaylist[0].description;

vidPlayer.on('playlistitem', function(){
   var self = this;
   var data = vidPlayer.playlist.currentIndex();
   vidDescription.innerHTML = vidPlaylist[data + 0].description;
});
    
vidPlayer.on('play', () => {
   bgMusic.pause(); 
});
    
//vidPlayer.on('play', bgMusicPause());
//
//var isPaused= vidPlayer.paused();    
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
    
//$('.arrow').click(function(){
//   var vidPlayer = videojs("video-player");
//   var isPaused= vidPlayer.paused();  
//   console.log(isPaused); 
//});
    
//PAUSE VIDPLAYER ON SLIDECHANGE
    
$('#slick-1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('vidPlayerPAUSED: ' + isPaused);
    vidPlayer.pause();
//     $('#slick-1').addClass('glitch-transition');
//     $('.scanlines').addClass('glitch-transition');
//        $('.slide').addClass('glitch-transition');
    setTimeout(function(){
//        $('#slick-1').removeClass('glitch-transition');
//        $('.scanlines').removeClass('glitch-transition');
    //    $('body').removeClass('glitch-transition');
//        $('.slide').removeClass('glitch-transition');
    },500);
});

$('#slick-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('vidPlayerPAUSED: ' + isPaused);
    vidPlayer.pause();
});
    
$('#slick-3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('vidPlayerPAUSED: ' + isPaused);
    vidPlayer.pause();
});

});
    



var saveSeek;

const bgMusic = new Howl({
 //  src: ['audio/Bg_Shyguys_Pursuit_1.mp3'],
    src: ['audio/BgSprite_Marvel83_2049_Song.mp3'],
    volume: 0.5,
    loop: true,
    onplay: function(){
     //   bgMusic.volume(0.5);
//        bgMusic.seek(saveSeek, id1);
    },
    onpause: function(){
//        saveSeek = bgMusic.seek(id1);
    }
});


const bgMusicLoader = new Howl({
   src:['audio/BgSprite_Marvel83_2049_Intro.mp3'],
    volume: 0.5,
    preload: true,
    loop: true,
    sprite: {
        loadermusic:[0, 9500, true]
    }
});

bgMusicLoader.play('loadermusic');



const sprites = new Howl({
       src: ['audio/PoopySFX_1.mp3'],
       volume: 0.02,
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


$('.audio-menu a').click(function(){
   sprites.play('click2');
   sprites.play('slidefast1');
});

//$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//    var slick = $('#slick-1');
//    sprites.play('slide3');
//});
    
//setInterval(function(){sprites.play('startup2')})

//$(window).mouseover(function(){
//    var howlerState = Howler.state;
//    var howlerCtx = Howler.ctx;
////    var audioCtx = new AudioContext();
////    var audioState = audioCtx.state;
//        console.log(howlerState);
//        console.log(howlerCtx);
////        console.log('audioState: ' + audioState);
//    if (Howler.ctx.state !== 'running') {
//        Howler.state = 'running';
//    }
//});  


//var vertexHeight = 15000;
//var planeDefinition = 100;
//var planeSize = 1245000;
//var totalObjects = 50000;
//var frame = 60;
//
//var container = document.createElement('div');
//document.body.appendChild(container);
//
//var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
//camera.position.z = 50000;
//camera.position.y = 15000;
//camera.lookAt(new THREE.Vector3(0, 15900, 0));
//
//var scene = new THREE.Scene();
//scene.fog = new THREE.Fog(0x23233f, 1, 300000);
//
//var uniforms = {
//  time: {
//    type: "f",
//    value: 0.0
//  }
//};
//
//var material = new THREE.ShaderMaterial({
//  uniforms: uniforms,
//  vertexShader: document.getElementById('vertexShader').textContent,
//  fragmentShader: document.getElementById('fragmentShader').textContent,
//  wireframe: true,
//  fog:true
//});
//
//var plane = new THREE.Mesh(new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition), material);
//plane.rotation.x -= Math.PI * .50;
//
//scene.add(plane);
//
//var geometry = new THREE.Geometry();
//
//for (i = 0; i < totalObjects; i++) {
//  var vertex = new THREE.Vector3();
//  vertex.x = Math.random() * planeSize - (planeSize * .5);
//  vertex.y = (Math.random() * 100000) + 10000;
//  vertex.z = Math.random() * planeSize - (planeSize * .5);
//  geometry.vertices.push(vertex);
//}
//
//var material = new THREE.ParticleBasicMaterial({
//  size: 400
//});
//var particles = new THREE.ParticleSystem(geometry, material);
//
//scene.add(particles);
//
//var renderer = new THREE.WebGLRenderer();
//renderer.setSize(window.innerWidth, window.innerHeight);
//container.appendChild(renderer.domElement);
//
//render();
//
//function render() {
//  requestAnimationFrame(render);
//  camera.position.z -= 150;
//  uniforms.time.value = frame;
//  frame += .03;
//  //  dateVerts();
//  renderer.render(scene, camera);
//}    