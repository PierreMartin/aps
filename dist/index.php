
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- META -->
        <title>APS-Export | Home</title>
        <meta name="description" content="APS-Export - Home">
        <meta name="keywords" content="<?php include('inc.keywords.php'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

		<!-- IE -->

		<!--[if IE]>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <![endif]-->


		<!--[if lte IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->


		<!-- ************* STYLE CSS ************* -->
		<!-- main + reset -->
		<link rel="stylesheet" href="css/min.main.css" charset="utf-8">

		<!-- intro -->
		<link rel="stylesheet" type="text/css" href="css/min.intro.css">

		<!-- slider -->
		<link rel="stylesheet" type="text/css" href="css/min.slider.css">

		<!-- page home -->
		<link rel="stylesheet" type="text/css" href="css/min.pagehome.css">

		<!-- nav mobile -->
		<link rel="stylesheet" type="text/css" href="css/min.nav.css">


		<!--[if IE 9]>
        	<link href="css/ie.css" rel="stylesheet" type="text/css">
        <![endif]-->

		<!--[if lte IE 8]>
        	<link href="css/ie_old.css" rel="stylesheet" type="text/css">
        <![endif]-->

        <!-- MEDIA QUERIES -->
        <link href="css/min.query.css" rel="stylesheet" type="text/css">

        <!-- FAVICON -->
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">


	</head>
	<body>

        <!-- SI ANCIEN NAVIGATEUR IE, ALORS ON AFFICHE :-->
		<?php include ('ie_old.inc.php'); ?>

        <!-- SI ANCIEN NAVIGATEUR IE, ALORS ON AFFICHE RIEN DU SITE :-->
        <!--[if (!IE 8) & (!IE 7) & (!IE 6)]><!-->


        <!-- INTRO -->
        <?php include ('intro.inc.php'); ?>

        <!-- MENU MOBILE -->
        <?php include ('navmobile.inc.php'); ?>


        <header>

            <!-- SLIDER (en absolute) -->
            <div id="component" class="component component-fullwidth fxFortuneWheel">
                <ul class="itemwrap">
                    <li class="current"><div class="slide1"></div></li>
                    <li><div class="slide2"></div></li>
                    <li><div class="slide3"></div></li>
                    <li><div class="slide4"></div></li>
                </ul>

                <nav>
                    <a class="prev" href="#">Previous item</a>
                    <a class="next" href="#">Next item</a>
                </nav>
            </div>

            <!-- ELEMENTS AU DESSUS DU SLIDER (en absolute) -->
            <div class="slider-matrix">
              <div class="wrapper">
                  <div class="headline">
                       <h1 class="cd-headline letters rotate-2">
                           <span>WE</span>
                           <span class="cd-words-wrapper">
                               <b class="is-visible">AUDIT</b>
                               <b>OPTIMIZE</b>
                               <b>DELIVER</b>
                           </span>
                       </h1>

				  <!--<![endif]--> <!-- FIN DES ANCIENS NAVIGATEUR IE -->

						<!--[if IE 9]>
				        	<h1>
								WE <span class="cd-words-wrapper">AUDIT</span><br>
								WE <span class="cd-words-wrapper">OPTIMIZE</span><br>
								WE <span class="cd-words-wrapper">DELIVER</span><br>
							</h1>
				  		<![endif]-->

				  <!-- SI ANCIEN NAVIGATEUR IE, ALORS ON AFFICHE RIEN DU SITE :-->
		          <!--[if (!IE 8) & (!IE 7) & (!IE 6)]><!-->
                  </div>

                  <div class="scroll">
                      <div class="hi-icon-effect-8">
                          <a href="#ancre1" class="hi-icon hi-icon-contract">Scroll</a>
                      </div>
                  </div>

               </div>
            </div>

        </header>

        <!-- LES MENUS -->
        <?php include ('navmain.inc.php'); ?>





        <section class="bloc1"><!-- BG NOIR & BLANC z-index 1 :  -->

            <article class="wrapper"></article>

            <!-- CURSEUR 2 -->
            <div class="cursorContener">
                <div class="cursor"></div>
                <div class="cursorCircle"></div>
                <div class="cursorTexte">hover <br> the objects</div>
            </div>


            <!-- CLOUDS -->
            <div class="contener_clouds">
                <div class="cloud anim_cloud1"></div>
                <div class="cloud2 anim_cloud3"></div>
                <div class="cloud3 pulse anim_cloud2"></div>
            </div>

            <div class="contener-fume1">
                <div class="fume1"></div>
                <div class="fume2"></div>
                <div class="fume3"></div>
                <div class="fume4"></div>
                <div class="fume5"></div>
            </div>
            <div class="contener-fume2">
                <div class="fume1"></div>
                <div class="fume2"></div>
                <div class="fume3"></div>
                <div class="fume4"></div>
                <div class="fume5"></div>
            </div>

            <!-- POMPIER -->
			<a href="#ancre" class="cursorTarget cursorPompier tooltip">
	            <span class="tooltip-content tooltip_content_pompier">
	                <span class="tooltip-text">
	                    <span class="tooltip-inner">
							Safety solutions :
							<ul>
								<li>All size fire fighting vehicules</li>
							</ul>
	                    </span>
	                </span>
	            </span>
	        </a>
			<img class="pompier" src="img/camion-pompier3.gif" alt="truck fire">


			<!-- BARRIERES -->
            <img class="barriere_g" src="img_iso/barriere_g.png" alt="aaa">
            <img class="barriere_d" src="img_iso/barriere_d.png" alt="aaa">

            <img class="barriereBloc1" src="img_iso/barriereBloc.png" alt="aaa">
            <img class="barriereBloc2" src="img_iso/barriereBloc.png" alt="aaa">


            <!-- BUILDING -->
            <img class="building" src="img_iso/building.png" alt="buildings">


            <!-- BUREAUX -->
            <a class="cursorTarget cursorBureaux tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_bureau">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Automation solutions :
                             <ul>
                                 <li>Terminal supervision</li>
                                 <li>Automation and management system for loading facilities</li>
                                 <li>Fluid monitoring systems</li>
                                 <li>Stock management</li>
                             </ul>
                             <br>
                             Safety solutions :
                             <ul>
                                 <li>Centralized detection and extinction management</li>
                                 <li>Oxygen deficiency &amp; as detection systems</li>
                             </ul>
                             <br>
                             Communication solutions :
                             <ul>
                                 <li>Control station, intercom &amp; public address</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="bureaux" src="img_iso/bureaux.png" alt="Bureaux">

            <!-- ANTENNE -->
			<a href="#ancre" class="cursorTarget cursorAntenne tooltip">
	            <span class="tooltip-content tooltip_content_antenne">
	                <span class="tooltip-text">
	                    <span class="tooltip-inner">
							Safety solutions :
							<ul>
								<li>Surge &amp; lightning protection</li>
								<li>Coolings systems</li>
								<li>Fire extinguishing by gas for electrical and computer rooms</li>
							</ul>
	                    </span>
	                </span>
	            </span>
	        </a>

			<img class="antenne" src="img_iso/antenne.png" alt="antenne">
            <img class="antenne_clignotte" src="img_iso/antenne_clignotte.gif" alt="lueur">


            <!-- BORNE 1 -->
            <a class="cursorTarget cursorBorne1 tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_borne1">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Safety solutions :
                             <ul>
                                 <li>Fixed fire fighting equipments</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="borne1" src="img_iso/borne.png" alt="borne">

            <!-- BORNE 2 -->
            <a class="cursorTarget cursorBorne2 tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_borne2">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Safety solutions :
                             <ul>
                                 <li>Fixed fire fighting equipments</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="borne2" src="img_iso/borne.png" alt="borne">

            <!-- BORNE 3 -->
            <a class="cursorTarget cursorBorne3 tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_borne3">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Safety solutions :
                             <ul>
                                 <li>Fixed fire fighting equipments</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="borne3" src="img_iso/borne.png" alt="borne">


            <!-- CAMION 1 & 2 -->
			<img class="camion1" src="img_iso/camion1.png" alt="truck 1">
			<img class="camion2" src="img_iso/camion2.png" alt="truck 2">


            <!-- CUVES -->
            <a class="cursorTarget cursorCuve tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_cuve">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Tank solutions :
                             <ul>
                                 <li>Geodesic domes</li>
                                 <li>Roof drain</li>
                                 <li>Floating roofs, blankets and suctions</li>
                                 <li>Tank gauging systems</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="cuve" src="img_iso/cuve.png" alt="cuves">

            <!-- PHONE -->
            <a class="cursorTarget cursorPhone tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_phone">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Communication solutions :
                             <ul>
                                 <li>Weather &amp; explosion-proof telephony (ATEX)</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="phone" src="img_iso/phone.png" alt="phone">

            <!-- bonhomme -->
            <a class="cursorTarget cursorBonhomme tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_bonhomme">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Safety solutions :
                             <ul>
                                 <li>Portable gas detectors ;</li>
                             </ul>
                             <br>
                             Communication solutions :
                             <ul>
                                 <li>ATEX GSM</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="bonhomme" src="img_iso/bonhomme.png" alt="bonhomme">

            <!-- GAS -->
            <a class="cursorTarget cursorGas tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_gas">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             cuves de stockage de gaz.
                        </span>
                    </span>
                </span>
            </a>
			<img class="gas" src="img_iso/gas.png" alt="gas">

            <!-- GRUES -->
            <a class="cursorTarget cursorGrue tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_grue">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Loading solutions :
                             <ul>
                                 <li>Marine loading arms</li>
                                 <li>Flexible marine hoses</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="grue1" src="img_iso/grue.png" alt="grue">

            <!-- LANCE -->
            <a class="cursorTarget cursorLance tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_lance">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Safety solutions :
                             <ul>
                                 <li>Fixed fire fighting equipments</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="lance" src="img_iso/lance.png" alt="lance">

            <!-- STATION -->
            <a class="cursorTarget cursorStation tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_station">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Loading solutions :
                             <ul>
                                 <li>Top &amp; bottom loading arms</li>
                                 <li>Vapor recovery systems</li>
                             </ul>
                             <br>
                             Automation solutions :
                             <ul>
                                 <li>Electronic flow computer</li>
                                 <li>Terminal identification (badge reader)</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="station" src="img_iso/station.png" alt="station">

            <!-- USINES 1 -->
            <a class="cursorTarget cursorUsine1 tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_usine1">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Factory :
                             <ul>
                                 <li>aaa</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="usine1" src="img_iso/usine1.png" alt="factory">

            <!-- HP -->
            <a class="cursorTarget cursorHp tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_hp">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Communication solutions :
                             <ul>
                                 <li>Warning sounders and lights</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="hp" src="img_iso/hp.png" alt="hp">
            <img class="hp_clignotte" src="img_iso/hp_clignotte.gif" alt="light alert">


            <!-- BATEAU -->
            <img class="bateau" src="img_iso/bateau.png" alt="bateau">

            <!-- POMPE ROUGE -->
            <a class="cursorTarget cursorPompe tooltip" href="#ancre">
                <span class="tooltip-content tooltip_content_pompe">
                    <span class="tooltip-text">
                        <span class="tooltip-inner">
                             Loading solutions :
                             <ul>
                                 <li>Product &amp; water pumps systems</li>
                             </ul>
                        </span>
                    </span>
                </span>
            </a>
			<img class="pompe" src="img_iso/pompe.png" alt="pompe">


            <!-- BG COLOR deviendra invisible (opacity 0) en hover :  -->
            <!-- cette div a un z-index de 10  -->
            <div class="bg-color"></div>

        </section> <!-- FIN ISO -->










        <section class="bloc2">
           <article class="wrapper">
               <h2>Advanced Products & Services</h2>
               <hr>
               <!-- ABOUT US -->
               <p class="subtitle">Advanced Products & Services is a French company based in Paris. We intervene in the coordination and execution of industrial projects in West Africa. We have developed our expertise on the Nigerian market. Our services fall into three key categories: <br><span style="color: #e95b29 !important;"> Auditing | Optimizing | Delivering</span></p>


               <p>We combine the expertise and know-how of a network of European suppliers to integrate local, custom-designed solutions in the following sectors of activity: piping, electricity, instrumentation, automatism, communication in high-risk environments, and industrial safety.
               </p>
               <p>APS also has an international buying department and a door-to-door logistics service. With offices in Paris and Lagos, APS has been offering state-of-the-art expertise for African industrial projects for the past ten years.</p>

               <div class="steps1">
<!--                   <img src="img/logo_mini.png" alt="We audit">-->
                   <h4>We audit</h4>
                   <p>We are present with an African and French office with a mobile team ready to meet you, <br><br> Our technical partners travel every months to your office and on-site to better understand your needs, <br><br> We work on existing and new facilities in coordination with your team and partners.</p>
               </div><!--
             --><div class="steps2">
<!--                   <img src="img/logo_mini.png" alt="We design">-->
                   <h4>We optimize</h4>
                   <p>We are your one stop interlocutor to supervise the different requirements of your project, <br><br> We source and propose different makers, qualities and technologies to best fit your needs, <br><br> We design according to your objectives for better safety, supervision and performance.</p>
               </div><!--
             --><div class="steps3">
<!--                   <img src="img/logo_mini.png" alt="We deliver">-->
                   <h4>We deliver</h4>
                   <p>We group and oversee the shipping of your orders by sea, air and land, <br><br> We take care of clearing and delivery Door to Door to your office and your industrial site, <br><br> We organize training of your staff, commissioning and maintenance.</p>
               </div>
               <!-- FIN ABOUT US -->
           </article>
        </section>



        <!-- PARTIE REFERENCES -->
        <div class="mapContener">
            <h2>References</h2>

            <div class="wrapper">
               <hr>
            </div>

            <a href="#ancre2">
                <div class="map">
<!--
                      <div class="scroll">
                          <div class="hi-icon-effect-8">
                              <a href="#ancre2" class="hi-icon hi-icon-contract">Scroll</a>
                          </div>
                      </div>
-->
                </div>
            </a>
        </div>

        <section class="pageReference" id="ancre2">

            <!-- CURSEUR 2 -->
            <div class="cursorContener">
                <div class="cursor"></div>
                <div class="cursorCircle"></div>
                <div class="cursorTexte">hover</div>
            </div>


            <!-- TITRES -->
            <div class="titreRefContener">
                <h3 class="titrePageRef titre-left">
                    Some of our suppliers
                    <div class="line"></div>
                </h3>

                <h3 class="titrePageRef titre-right">
                    Some of our references
                    <div class="line"></div>
                 </h3>

            </div>


            <!-- LOGOS GAUCHE -->
            <ul class="left">

                    <li class="theme-1" id="logo1">
                        <div class="logo1 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-3" id="logo2">
                        <div class="logo2 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-5" id="logo3">
                        <div class="logo3 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--


                 --><li class="theme-alone" id="logo4">
                        <div class="logo4 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo5">
                        <div class="logo5 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-4" id="logo6">
                        <div class="logo6 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--


                --><li class="theme-alone" id="logo7">
                        <div class="logo7 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo8">
                        <div class="logo8 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo9">
                        <div class="logo9 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-2" id="logo10">
                        <div class="logo10 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo11">
                        <div class="logo11 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo12">
                        <div class="logo12 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo13">
                        <div class="logo13 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo14">
                        <div class="logo14 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo15">
                        <div class="logo15 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logo16">
                        <div class="logo16 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li>

            </ul>


            <!-- LOGOS DROITE -->
            <ul class="right">

                    <li class="theme-alone" id="logoD1">
                        <div class="logoD1 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-1" id="logoD2">
                        <div class="logoD2 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-1-5" id="logoD3">
                        <div class="logoD3 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--


                 --><li class="theme-2-5" id="logoD4">
                        <div class="logoD4 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logoD5">
                        <div class="logoD5 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-5" id="logoD6">
                        <div class="logoD6 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--


                 --><li class="theme-alone" id="logoD7">
                        <div class="logoD7 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-3" id="logoD8">
                        <div class="logoD8 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-1" id="logoD9">
                        <div class="logoD9 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logoD10">
                        <div class="logoD10 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-5" id="logoD11">
                        <div class="logoD11 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-alone" id="logoD12">
                        <div class="logoD12 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-1-5" id="logoD13">
                        <div class="logoD13 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-1-5" id="logoD14">
                        <div class="logoD14 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-3-4" id="logoD15">
                        <div class="logoD15 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li><!--

                 --><li class="theme-5" id="logoD16">
                        <div class="logoD16 contentLi grayZoom">
                            <p>
                                <span class="txt"></span>
                            </p>
                        </div>
                    </li>


             </ul>

        </section>    <!-- FIN PARTIE REFERENCES -->




        <!-- FOOTER -->
        <?php include ('footer.inc.php'); ?>



        <!--<![endif]--> <!-- FIN DES ANCIENS NAVIGATEUR IE -->



		<!-- ************ FICHERS JS EN PROD (ne pas oublier de compiler avec grunt apres modif !) ************ -->

		<!-- LIBS -->
        <script src="js/min.libs.js"></script>

		<!-- SLIDER -->
        <script src="js/min.slider.js"></script>

		<!-- PAGE ACCUEIL -->
		<script src="js/min.pagehome.js"></script>

		<!-- INTRO -->
		<script src="js/min.intro.js"></script>


		<!-- HACKS IE -->

		<!--[if IE]>
        	<script src="js/ie.js"></script>
        <![endif]-->


		<!-- SI IE 10 (N'EST PAS UN COMMENTAIRE CONDITIONNELLE) -->
		<script type="text/javascript">
		if ( Function('/*@cc_on return document.documentMode===10@*/')() ) {
			$('.tooltip-content').hide();

			$(".cursorTarget").mouseover(function() {
			    $(this).find(".tooltip-content").show();
			});
			$(".cursorTarget").mouseout(function() {
			    $(this).find(".tooltip-content").hide();
			});

			$('a.cursorTarget').css({
				'display' : 'inline-block',
				'background-color' : '#e95b29',
			});
		}
		</script>

		<!-- MAIN -->
        <script src="js/min.main.js"></script>

	</body>
</html>
