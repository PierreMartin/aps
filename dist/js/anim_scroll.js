/* GESTION DES ANIMATIONS EN FONCTION DU NIVEAU DE SCROLL */

$(window).scroll(function () {
    var windowWidth     = $(this).width();
    var windowHeight    = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    // position des éléments (relatif au top du document) :
    var step1PosTop     = $(".steps1").position().top;
    var refTitlePosTop  = $(".titreRefContener").position().top;

    // console.log('Position window : ' + windowScrollTop);
    // console.log('Position de l\'element 1 : ' + step1PosTop);
    // console.log('Position de l\'element 2 : ' + refTitlePosTop);


    ////// 1ER ANIMATION ////
    var firstAnimation = function () {
        $('.steps1').delay(800).animate({ opacity: 1, left: 0}, 800, "easeOutQuart");    // gauche
        $('.steps2').delay(300).animate({ opacity: 1, bottom: 0}, 1000, "easeOutQuart"); // millieu
        $('.steps3').delay(800).animate({ opacity: 1, right: 0}, 800, "easeOutQuart");   // droite
    };

    ////// 2EME ANIMATION ////
    var secondeAnimation = function () {
        $(".line").addClass('lineFull');
        $(".titrePageRef").addClass('titreAnim');
    };

    ////// RESET ////
     var reset = function () {
        $('.steps2').each(function () {
            $(this).delay(0).animate({ opacity: 1, bottom: 0}, 0);
        });

        $('.steps1').each(function () {
            $(this).delay(0).animate({ opacity: 1, left: 0}, 0);
        });

        $('.steps3').each(function () {
            $(this).delay(0).animate({ opacity: 1, right: 0}, 0);
        });

    };


    // CONDITIONS DE LARGEUR ET NIVEAU DE SCROLL :
    if (windowWidth <= 780) {
        // FORMAT MOBILE
        if (windowScrollTop > 0) {
            reset();
            if (windowScrollTop > (refTitlePosTop - 400)) {
                secondeAnimation();
            }
        }
    } else {
        // FORMAT DESTOCK
        if (windowScrollTop > (step1PosTop - 400)) {
            firstAnimation();
            if (windowScrollTop > (refTitlePosTop - 400)) {
                secondeAnimation();
            }
        }
    }

});



/* RESPONSIVE WEB DESIGN SUR LES ELEMENTS DE L'ISO */

var windowWidth2        = $(this).width(),
    nombreDisivibiliter = 2.8,
    backgroundWifth     = 1717,
    backgroundHeight    = 847;

console.log('largeur windows : ' + windowWidth2);

// CONDITION VERSION MOBILE
if (windowWidth2 <= 780) {

    // SCRIPT QUI REDUIS LES IMAGES
    var tableauImg = ['.camion1', '.camion2', '.building', '.antenne', '.borne1', '.borne2', '.borne3', '.cuve', '.gas', '.grue1', '.lance', '.station', '.usine1', '.bateau', '.pompier', '.antenne_clignotte', '.bureaux', '.barriere_g', '.barriere_d', '.barriereBloc1', '.barriereBloc2', '.pompe', '.bonhomme', '.phone', '.hp', '.hp_clignotte'],
        imgWidth,
        imgHeight,
        imgWidthResize,
        imgHeightResize;

    for (var i = 0; i < tableauImg.length; i++) {

        imgWidth            = $(tableauImg[i]).width();
        imgHeight           = $(tableauImg[i]).height();

        console.log('Largeurs depart : ' + imgWidth);

        imgWidthResize      = (imgWidth      / nombreDisivibiliter);
        imgHeightResize     = (imgHeight     / nombreDisivibiliter);

        imgWidthResize      = imgWidthResize + 'px';
        imgHeightResize     = imgHeightResize + 'px';

        $(tableauImg[i]).css("width", imgWidthResize).css("height", imgHeightResize);

        console.log('Image width : '    + tableauImg[i] + ' => ' + imgWidthResize);
        console.log('Image height : '   + tableauImg[i] + ' => ' + imgHeightResize);

    }


    // SCRIPT QUI REDUIS LES MARGES
    var tableauImg2 = ['.camion1', '.camion2', '.building', '.antenne', '.borne1', '.borne2', '.borne3', '.cuve', '.gas', '.grue1', '.lance', '.station', '.usine1', '.bateau', '.pompier', '.antenne_clignotte', '.bureaux', '.barriere_g', '.barriere_d', '.barriereBloc1', '.barriereBloc2', '.pompe', '.bonhomme', '.phone', '.hp', '.hp_clignotte', '.cursorPompier', '.cursorAntenne', '.cursorBureaux', '.cursorBorne1', '.cursorBorne2', '.cursorBorne3', '.cursorCuve', '.cursorPhone', '.cursorBonhomme', '.cursorGas', '.cursorGrue', '.cursorLance', '.cursorStation', '.cursorUsine1', '.cursorHp', '.cursorPompe'],
        imgTop,
        imgMarginLeft,
        imgTopResize,
        imgMarginLeftResize;


    for (var j = 0; j < tableauImg2.length; j++) {

        imgTop              = $(tableauImg2[j]).css("top");
        imgMarginLeft       = $(tableauImg2[j]).css("margin-left");

        imgTop              = parseInt(imgTop);
        imgMarginLeft       = parseInt(imgMarginLeft);

        imgTopResize        = (imgTop        / nombreDisivibiliter);
        imgMarginLeftResize = (imgMarginLeft / nombreDisivibiliter);

        //console.log('position top resize : ' + imgTopResize);

        // CORRECTION BUG BORNES :
        // if (tableauImg2[j] === '.borne1' || tableauImg2[j] === '.borne2' || tableauImg2[j] === '.borne3' ) {
        //     imgTopResize -= 10;
        // }
        // FIN CORRECTION BUG BORNES

        $(tableauImg2[j]).css("top", imgTopResize + 'px');
        $(tableauImg2[j]).css("margin-left", imgMarginLeftResize + 'px');
    }

    // RESIZE DES BG
    backgroundWifth     = (backgroundWifth / nombreDisivibiliter) + 'px';
    backgroundHeight    = (backgroundHeight / nombreDisivibiliter) + 'px';

    console.log('largeur BG ' + backgroundWifth);
    console.log('heuteur BG ' + backgroundHeight);

    $('.bloc1, .bloc1 .bg-color').css("background-size", backgroundWifth + ' ' + backgroundHeight );
    $('.bloc1 .bg-color').css("height", backgroundHeight);

//    $('.bloc1, .bloc1 .bg-color').css("background-size", '858px 423px');
//    $('.bloc1 .bg-color').css("height", '423px');


    //$(".borne1, .borne2, .borne3").css("top", imgTopResize - 10 + 'px');

    // CHANGEMENT DU TEXTE :
    $(".cursorTexte").empty();
    $(".cursorTexte").append("Click on the objects");

}
// FIN CONDITION VERSION MOBILE
