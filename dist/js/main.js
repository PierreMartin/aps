// affiche le logo d'intro au charement de la page (opacity :0 en css) :
$('.contenerLogo').fadeIn(1000);

// EN MODE DEVELOPPEMENT; ON DESACTIVE L'INTRO :
//$(".hideIntroBottom, .hideIntroTop, .contenerLogo").remove();



/////// VELOCOTY ANIMATION ///////
$(document).ready(function() {

     $.Velocity

        .RegisterEffect("callout.animationLogo", {
            defaultDuration: 800,
            calls: [
                [ { scaleX: 0.95,       scaleY: 0.95,                  }, 0.35 ],
                [ { scaleX: 1.1,        scaleY: 1.1, translateZ: 0     }, 0.35 ],
                [ { opacity: [ 0, 1 ],  scaleX: 0.3, scaleY: 0.3       }, 0.30 ],
            ]
        })
         .RegisterEffect("callout.animationTop", {
            defaultDuration: 1060,
            calls: [
                [ { backgroundColor: '#fff' }, 3 ],
                [ { translateY: [-20, 0] }, 0.5, { easing: "easeOutExpo" } ],
                [ { translateX: ['100%', 0] }, 1.3, { easing: "easeOutExpo" } ],
                [ { opacity: 0 } ],
            ]
        })
         .RegisterEffect("callout.animationBottom", {
            defaultDuration: 1060,
            calls: [
                [ { backgroundColor: '#fff' }, 3 ],
                [ { translateY: [20, 0] }, 0.5, { easing: "easeOutExpo" } ],
                [ { translateX: ['-100%', 0] }, 1.3, { easing: "easeOutExpo" } ],
                [ { opacity: 0 } ],
            ]
        });

    // APPELLE DE LA FONCTION
    $(".contenerLoad").velocity("callout.animationLogo", { delay: 2600 } ).fadeOut(800, function(){
        $(this).remove();
    });

    $(".hideIntroTop").velocity("callout.animationTop", { delay: 0 }).fadeOut(800, function(){
        $(this).remove();
    });

    $(".hideIntroBottom").velocity("callout.animationBottom", { delay: 0 }).fadeOut(800, function(){
        $(this).remove();
    });


});



//$(document).ready(function(){
//
//    $('.contenerLogo').delay(3400).animate({ "margin-top" : "-500px" }, 1600, "easeInOutElastic");
//
//    $('.contenerAllLoad').delay(5300).fadeOut(800, function(){
//        $(this).remove();
//    });
//
//});


/////// SCROLL TRANSITION ANCRE : /////////

$('a[href^="#ancre1"], a[href^="#ancre2"], a[href^="#automation"], a[href^="#loading"], a[href^="#tank"], a[href^="#safety"], a[href^="#communications"], a[href^="#integrator"], a[href^="#buying"]').click(function(){
    var id = $(this).attr("href");
    var offset = $(id).offset().top;
    $('html, body').animate({scrollTop: offset + 5}, 500, "easeInOutExpo");
    return false;
});


/////// MENU CROSS ICON (ANIMATION DE L'ICON) : /////////

jQuery(document).ready(function($){
    var menu = document.querySelector('.menu-icon');
    function toggleMenu () {
      menu.classList.toggle('openNav');
    }
    menu.addEventListener('click', toggleMenu);
});

///////// CURSOR : /////////
$(".bloc1").mouseover(function() {
    $(".bloc1 .cursorContener").addClass('hideCursor');
});

$(".pageReference").mouseover(function() {
    $(".pageReference .cursorContener").addClass('hideCursor');
});


/////// HEADLINE : /////////

jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 4000, // DURER ICI !
		//loading bar effect
		barAnimationDelay = 2500,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 70,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (var i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading'); }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10;
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			}

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ); }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);

		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function(){
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay); }, typeAnimationDelay);

		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord); }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading'); }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord); }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
				setTimeout(function(){ hideWord($word); }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');

		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else if($bool) {
		 	setTimeout(function(){ hideWord(takeNext($word)); }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');

		if(!$letter.is(':last-child')) {
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else {
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if (!$bool) {
                setTimeout(function(){
                    hideWord($word);
                }, animationDelay);
            }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});




/////// ANIMATION DEPLACEMENT MENU INTRO : /////////
var identifier = window.location.href;

$(document).ready(function(){

    switch (identifier) {
            // en local :
        case 'http://localhost:8888/aps-export/dist/index.php' :
            $(".navtop").delay(4000).animate({ "margin-top" : "-110px" }, 1000, "easeOutBounce");
            $(".scroll").animate({ "bottom" : "95px" }, 700);
        break;
        case 'http://localhost:8888/aps-export/dist/' :
            $(".navtop").delay(4000).animate({ "margin-top" : "-110px" }, 1000, "easeOutBounce");
            $(".scroll").animate({ "bottom" : "95px" }, 700);
        break;
        case 'http://localhost:8888/aps-export/dist/home.php' :
            $(".navtop").delay(10).animate({ "margin-top" : "-110px" }, 1000, "easeOutBounce");
            $(".scroll").animate({ "bottom" : "95px" }, 700);
        break;

            // en prod :
        case 'http://pierredesigner.com/sites/aps/' :
            $(".navtop").delay(4000).animate({ "margin-top" : "-110px" }, 1000, "easeOutBounce");
            $(".scroll").animate({ "bottom" : "95px" }, 700);
        break;
        case 'http://pierredesigner.com/sites/aps/index.php' :
            $(".navtop").delay(4000).animate({ "margin-top" : "-110px" }, 1000, "easeOutBounce");
            $(".scroll").animate({ "bottom" : "95px" }, 700);
        break;
        case 'http://pierredesigner.com/sites/aps/home.php' :
            $(".navtop").delay(10).animate({ "margin-top" : "-110px" }, 1000, "easeOutBounce");
            $(".scroll").animate({ "bottom" : "95px" }, 700);
        break;
    }

});



/////// STICKY NAV (FIXE LA NAV) /////////

//$(document).ready(function(){
//    $(".navmain").sticky({topSpacing:0});
//    $(".box_menu_solutions_container").sticky({topSpacing: 80});
//});

var nav;
var posScroll;
var posBloc1;

$(window).scroll(function() {
    posScroll  = $(document).scrollTop();
    posBloc1   = $('.navtop').position().top+$('.navtop').outerHeight(true);
    nav        = $(".navmain");

    // console.log('position scroll : ' + posScroll);
    // console.log('position navTop : ' + posBloc1);

    if (posScroll > posBloc1) {
        nav.addClass('fixeNav');
        $('.addDivContainer').addClass('addDiv'); /* compense la sortis du flux de la nav */
    } else {
        nav.removeClass('fixeNav');
        $('.addDivContainer').removeClass('addDiv'); /* compense la sortis du flux de la nav */
    }


});

$(window).scroll();


///////////////////////////////////////////////// ISO /////////////////////////////////////////////////

////// FONCTIONS ////
// .bonhomme, .phone, .hp, .hp_clignotte
var elementsShow = function () {
    $(".bg-color, .antenne, .borne1, .borne2, .borne3, .cuve, .gas, .grue1, .lance, .station, .usine1, .pompier, .pompe, .contener-fume1, .contener-fume2, .antenne_clignotte, .bureaux, .barriere_g, .barriere_d, .barriereBloc1, .barriereBloc2, .bateau, .bonhomme, .phone, .hp, .hp_clignotte, .building, .cursorPompier, .cursorAntenne, .cursorBureaux, .cursorBorne1, .cursorBorne2, .cursorBorne3, .cursorCuve, .cursorPhone, .cursorBonhomme, .cursorGas, .cursorGrue, .cursorLance, .cursorStation, .cursorUsine1, .cursorHp, .cursorPompe").stop().animate({"opacity": 1});
};

var elementsHide = function () {
    $(".bg-color, .antenne, .borne1, .borne2, .borne3, .cuve, .gas, .grue1, .lance, .station, .usine1, .pompier, .pompe, .contener-fume1, .contener-fume2, .antenne_clignotte, .bureaux, .barriere_g, .barriere_d, .barriereBloc1, .barriereBloc2, .bateau, .bonhomme, .phone, .hp, .hp_clignotte, .building, .cursorPompier, .cursorAntenne, .cursorBureaux, .cursorBorne1, .cursorBorne2, .cursorBorne3, .cursorCuve, .cursorPhone, .cursorBonhomme, .cursorGas, .cursorGrue, .cursorLance, .cursorStation, .cursorUsine1, .cursorHp, .cursorPompe").stop().animate({"opacity": 0.15});
};



////////// CUVES //////////
$( ".cursorCuve" ).mouseover(function() {
    elementsHide();
    $(".cuve, .cursorCuve").stop().animate({"opacity": 1});
});

$( ".cursorCuve" ).mouseout(function() {
    elementsShow();
});

////////// GAS //////////
$( ".cursorGas" ).mouseover(function() {
    elementsHide();
    $(".gas, .cursorGas").stop().animate({"opacity": 1});
});

$( ".cursorGas" ).mouseout(function() {
    elementsShow();
});

////////// BORNES LANCE //////////
$( ".cursorBorne1, .cursorBorne2, .cursorBorne3, .cursorLance" ).mouseover(function() {
    elementsHide();
    $(".borne1, .borne2, .borne3, .lance, .cursorBorne1, .cursorBorne2, .cursorBorne3, .cursorLance").stop().animate({"opacity": 1});
});

$( ".cursorBorne1, .cursorBorne2, .cursorBorne3, .cursorLance" ).mouseout(function() {
    elementsShow();
});

////////// POMPE //////////
$( ".cursorPompe" ).mouseover(function() {
    elementsHide();
    $(".pompe, .cursorPompe").stop().animate({"opacity": 1});
});

$( ".cursorPompe" ).mouseout(function() {
    elementsShow();
});

////////// STATION //////////
$( ".cursorStation, .barriere_g, .barriere_d, .barriereBloc1, .barriereBloc2" ).mouseover(function() {
    elementsHide();
    $(".station, .cursorStation, .barriere_g, .barriere_d, .barriereBloc1, .barriereBloc2").stop().animate({"opacity": 1});
});

$( ".cursorStation, .barriere_g, .barriere_d, .barriereBloc1, .barriereBloc2" ).mouseout(function() {
    elementsShow();
});

////////// BUREAUX //////////
$( ".cursorBureaux" ).mouseover(function() {
    elementsHide();
    $(".bureaux, .cursorBureaux").stop().animate({"opacity": 1});
});

$( ".cursorBureaux" ).mouseout(function() {
    elementsShow();
});

////////// USINES  //////////
$( ".cursorUsine1" ).mouseover(function() {
    elementsHide();
    $(".usine1, .cursorUsine1").stop().animate({"opacity": 1});
});

$( ".cursorUsine1" ).mouseout(function() {
    elementsShow();
});

////////// ANTENNE //////////
$( ".cursorAntenne" ).mouseover(function() {
    elementsHide();
    $(".antenne, .cursorAntenne, .antenne_clignotte").stop().animate({"opacity": 1});
});

$( ".cursorAntenne" ).mouseout(function() {
    elementsShow();
});

////////// GRUES //////////
$( ".cursorGrue" ).mouseover(function() {
    elementsHide();
    $(".grue1, .cursorGrue").stop().animate({"opacity": 1});
});

$( ".cursorGrue" ).mouseout(function() {
    elementsShow();
});

/* gestion du z-index en hover */
$( ".cursorGrue, .grue1" ).mouseover(function() {
    $(".cursorGrue, .grue1").addClass('hoverAnimGrue');
    $(".cursorGrue").css('z-index', '200');
});
$( ".cursorGrue, .grue1" ).mouseout(function() {
    $(".cursorGrue, .grue1").removeClass('hoverAnimGrue');
});

////////// BATEAU //////////
//$( ".bateau" ).mouseover(function() {
//    elementsHide();
//    $(".bateau").stop().animate({"opacity": 1});
//});
//
//$( ".bateau" ).mouseout(function() {
//    elementsShow();
//});

////////// POMPIER //////////
$( ".cursorPompier" ).mouseover(function() {
    elementsHide();
    $(".pompier, .cursorPompier").stop().animate({"opacity": 1});
});

$( ".cursorPompier" ).mouseout(function() {
    elementsShow();
});

////////// BONHOMME //////////
$( ".cursorBonhomme" ).mouseover(function() {
    elementsHide();
    $(".bonhomme, .cursorBonhomme").stop().animate({"opacity": 1});
});

$( ".cursorBonhomme" ).mouseout(function() {
    elementsShow();
});

////////// PHONE //////////
$( ".cursorPhone" ).mouseover(function() {
    elementsHide();
    $(".phone, .cursorPhone").stop().animate({"opacity": 1});
});

$( ".cursorPhone" ).mouseout(function() {
    elementsShow();
});

////////// hp //////////
$( ".cursorHp" ).mouseover(function() {
    elementsHide();
    $(".hp, .cursorHp, .hp_clignotte").stop().animate({"opacity": 1});
});

$( ".cursorHp" ).mouseout(function() {
    elementsShow();
});


/////// STOP ANIMATION EN SURVOLLE DES ELEMENTS DANS L'ISO ///////

$(".pompier, .cursorPompier").mouseover(function() {
   $(".pompier, .cursorPompier").addClass('stopAnimPompier');
});

$(".pompier, .cursorPompier").mouseout(function() {
   $(".pompier, .cursorPompier").removeClass('stopAnimPompier');
});


///////////////////// PAGES ////////////////////////////

// GESTION DE L'EFFET HOVER AUTOMATIQUE DE LA NAV :
var aChildren = $(".box_menu li").children();
var aArray = [];

for (var i = 0; i < aChildren.length; i++) {
    var aChild  = aChildren[i];
    var ahref   = $(aChild).attr('href');
    aArray.push(ahref);
}

$(window).scroll(function(){
    var windowPos       = $(window).scrollTop();
    var windowHeight    = $(window).height();
    var docHeight       = $(document).height();

    for (var i = 0; i < aArray.length; i++) {
        var theID       = aArray[i];
        var divPos      = $(theID).offset().top;
        var divHeight   = $(theID).height();
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $("a[href='" + theID + "']").parent().addClass("nav-active");
        } else {
            $("a[href='" + theID + "']").parent().removeClass("nav-active");
        }
    }
});
