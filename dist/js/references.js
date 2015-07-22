//////////////////////////////////// THEME DES LOGOS ////////////////////////////////////////////
var allElementRef = $(".theme-1, .theme-2, .theme-3, .theme-4, .theme-5, .theme-alone, .theme-1-5, .theme-2-5, .theme-3-4");

////////////////// theme 1 gauche
$(".left .theme-1").mouseover(function() {
    $(".theme-1, .theme-1-5").children('div').removeClass('grayZoom');          // zoom sur
    $(".theme-1, .theme-1-5").children('div').addClass('opacityLogoHover');     // opaity light
    allElementRef.children('div').addClass('opacityLogoOut');                   // opacity dark sur tous
    $(".theme-1, .theme-1-5").children('div').removeClass('opacityLogoOut');    // sauf ceux-ci
});

$(".left .theme-1").mouseout(function() {
    $(".theme-1, .theme-1-5").children('div').addClass('grayZoom');
    $(".theme-1, .theme-1-5").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 2 gauche
$(".left .theme-2").mouseover(function() {
    $(".theme-2, .theme-2-5").children('div').removeClass('grayZoom');          // zoom sur
    $(".theme-2, .theme-2-5").children('div').addClass('opacityLogoHover');     // opaity light
    allElementRef.children('div').addClass('opacityLogoOut');                   // opacity dark sur tous
    $(".theme-2, .theme-2-5").children('div').removeClass('opacityLogoOut');    // sauf ceux-ci
});

$(".left .theme-2").mouseout(function() {
    $(".theme-2, .theme-2-5").children('div').addClass('grayZoom');
    $(".theme-2, .theme-2-5").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 3 gauche
$(".left .theme-3").mouseover(function() {
    $(".theme-3, .theme-3-4").children('div').removeClass('grayZoom');          // zoom sur
    $(".theme-3, .theme-3-4").children('div').addClass('opacityLogoHover');     // opaity light
    allElementRef.children('div').addClass('opacityLogoOut');                   // opacity dark sur tous
    $(".theme-3, .theme-3-4").children('div').removeClass('opacityLogoOut');    // sauf ceux-ci
});

$(".left .theme-3").mouseout(function() {
    $(".theme-3, .theme-3-4").children('div').addClass('grayZoom');
    $(".theme-3, .theme-3-4").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 4 gauche
$(".left .theme-4").mouseover(function() {
    $(".theme-4, .theme-3-4").children('div').removeClass('grayZoom');          // zoom sur
    $(".theme-4, .theme-3-4").children('div').addClass('opacityLogoHover');     // opaity light
    allElementRef.children('div').addClass('opacityLogoOut');                   // opacity dark sur tous
    $(".theme-4, .theme-3-4").children('div').removeClass('opacityLogoOut');    // sauf ceux-ci
});

$(".left .theme-4").mouseout(function() {
    $(".theme-4, .theme-3-4").children('div').addClass('grayZoom');
    $(".theme-4, .theme-3-4").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 5 gauche
$(".left .theme-5").mouseover(function() {
    $(".theme-5, .theme-1-5, .theme-2-5").children('div').removeClass('grayZoom');          // zoom sur
    $(".theme-5, .theme-1-5, .theme-2-5").children('div').addClass('opacityLogoHover');     // opaity light
    allElementRef.children('div').addClass('opacityLogoOut');                               // opacity dark sur tous
    $(".theme-5, .theme-1-5, .theme-2-5").children('div').removeClass('opacityLogoOut');    // sauf ceux-ci
});

$(".left .theme-5").mouseout(function() {
    $(".theme-5, .theme-1-5, .theme-2-5").children('div').addClass('grayZoom');
    $(".theme-5, .theme-1-5, .theme-2-5").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});


////////////////// theme 1 droite
$(".right .theme-1").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(".left .theme-1").children('div').removeClass('grayZoom');
    
    $(this).children('div').addClass('opacityLogoHover');
    $(".left .theme-1").children('div').addClass('opacityLogoHover');
    
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
    $(".left .theme-1").children('div').removeClass('opacityLogoOut');
});

$(".right .theme-1").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(".left .theme-1").children('div').addClass('grayZoom');
    
    $(this).children('div').removeClass('opacityLogoHover');
    $(".left .theme-1").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});


////////////////// theme 3 droite
$(".right .theme-3").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(".left .theme-3").children('div').removeClass('grayZoom');
    
    $(this).children('div').addClass('opacityLogoHover');
    $(".left .theme-3").children('div').addClass('opacityLogoHover');
    
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
    $(".left .theme-3").children('div').removeClass('opacityLogoOut');
});

$(".right .theme-3").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(".left .theme-3").children('div').addClass('grayZoom');
    
    $(this).children('div').removeClass('opacityLogoHover');
    $(".left .theme-3").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 5 droite
$(".right .theme-5").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(".left .theme-5").children('div').removeClass('grayZoom');
    
    $(this).children('div').addClass('opacityLogoHover');
    $(".left .theme-5").children('div').addClass('opacityLogoHover');
    
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
    $(".left .theme-5").children('div').removeClass('opacityLogoOut');
});

$(".right .theme-5").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(".left .theme-5").children('div').addClass('grayZoom');
    
    $(this).children('div').removeClass('opacityLogoHover');
    $(".left .theme-5").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 1-5 droite
$(".right .theme-1-5").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(".left .theme-1, .left .theme-5").children('div').removeClass('grayZoom');
    
    $(this).children('div').addClass('opacityLogoHover');
    $(".left .theme-1, .left .theme-5").children('div').addClass('opacityLogoHover');
    
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
    $(".left .theme-1, .left .theme-5").children('div').removeClass('opacityLogoOut');
});

$(".right .theme-1-5").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(".left .theme-1, .left .theme-5").children('div').addClass('grayZoom');
    
    $(this).children('div').removeClass('opacityLogoHover');
    $(".left .theme-1, .left .theme-5").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 2-5 droite
$(".right .theme-2-5").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(".left .theme-2, .left .theme-5").children('div').removeClass('grayZoom');
    
    $(this).children('div').addClass('opacityLogoHover');
    $(".left .theme-2, .left .theme-5").children('div').addClass('opacityLogoHover');
    
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
    $(".left .theme-2, .left .theme-5").children('div').removeClass('opacityLogoOut');
});

$(".right .theme-2-5").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(".left .theme-2, .left .theme-5").children('div').addClass('grayZoom');
    
    $(this).children('div').removeClass('opacityLogoHover');
    $(".left .theme-2, .left .theme-5").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme 3-4 droite
$(".right .theme-3-4").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(".left .theme-3, .left .theme-4").children('div').removeClass('grayZoom');
    
    $(this).children('div').addClass('opacityLogoHover');
    $(".left .theme-3, .left .theme-4").children('div').addClass('opacityLogoHover');
    
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
    $(".left .theme-3, .left .theme-4").children('div').removeClass('opacityLogoOut');
});

$(".right .theme-3-4").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(".left .theme-3, .left .theme-4").children('div').addClass('grayZoom');
    
    $(this).children('div').removeClass('opacityLogoHover');
    $(".left .theme-3, .left .theme-4").children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});

////////////////// theme alone
$(".theme-alone").mouseover(function() {
    $(this).children('div').removeClass('grayZoom');
    $(this).children('div').addClass('opacityLogoHover');
    allElementRef.children('div').addClass('opacityLogoOut');
    $(this).children('div').removeClass('opacityLogoOut');
});

$(".theme-alone").mouseout(function() {
    $(this).children('div').addClass('grayZoom');
    $(this).children('div').removeClass('opacityLogoHover');
    allElementRef.children('div').removeClass('opacityLogoOut');
});


////////// OPACITER DU TEXTE DES LOGOS //////////
$(".pageReference ul li").mouseover(function(){
    $(this).find('.txt').addClass('opacityText');
});

$(".pageReference ul li").mouseout(function(){
    $(this).find('.txt').removeClass('opacityText');
});



