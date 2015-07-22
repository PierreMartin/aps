<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- META -->
        <title>APS-Export | Missions</title>
        <meta name="description" content="APS-Export - Missions">
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

		<!-- fonts -->
		<link href="css/font-awesome.css" rel="stylesheet" type="text/css">

		<!-- nav -->
		<link rel="stylesheet" type="text/css" href="css/min.nav.css">

		<!-- pages -->
		<link rel="stylesheet" type="text/css" href="css/min.pages.css">

		<style>
            .missions.nav-link {
                color: #e95b29;
                padding-top: 18px;
            }
            .missions.nav-link::before {
                -webkit-transform: scale(1);
                    -ms-transform: scale(1);
                        transform: scale(1);

                -webkit-transition: -webkit-transform 0,  opacity 0.2s;
                -webkit-transition: transform 0,  opacity 0.2s;

                transition: -webkit-transform 0,  opacity 0.2s;
                transition: transform 0,  opacity 0.2s;

                -webkit-animation: bounce-in 0.4s;
                        animation: bounce-in 0.4s;

                opacity: 1;
            }
        </style>

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


        <!-- MENU MOBILE -->
        <?php include ('navmobile.inc.php'); ?>


        <!-- MENU MAIN -->
        <?php include ('navmain.inc.php'); ?>



        <section class="bloc2 pages">

            <div class="box_menu">
                <ul>
                    <li class="menuIntegrator"><a href="#integrator">Integrator &nbsp;<img src="img_iso/solutions_station-b.png" alt=""></a></li>
                    <br>
                    <li class="menuBuying"><a href="#buying">Buying agency &nbsp;<img src="img_iso/solutions_grue-b.png" alt=""></a></li>
                    <br>
                </ul>
            </div>

            <article class="wrapper">


               <h1>Our missions</h1>
<!--
               <p class="subtitle">Subtitle</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam soluta alias animi</p>
-->
               <hr class="hrEnd margeZero">

               <!-- PART 1 -->
               <div id="integrator">
                   <h2 class="mission_integrator">Integrator</h2>
                   <hr class="hrTitle"><br>
                   <h3>Our approach</h3>
                   <p>A unique partner with the know-how to accompany your projects.
APS is a platform that coordinates and pilots a network of experts in order to offer custom-designed industrial solutions in West Africa.</p>
                   <p>We intervene in:</p>
                   <ul class="styleList1">
                       <li>The implementation of new projects</li>
                       <li>The compliance of installations with standards</li>
                       <li>The modernization of industrial sites</li>
                   </ul>

                   <p>Our know-how consists of putting our partners’ skills at the service of your projects: up front, this entails the most highly-regarded European suppliers of specialized equipment; and down the line, local installers renowned for the quality of their work.</p>

                   <h3>Our method</h3>

                   <div class="containerColumn">
                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre1">Defining needs</h4>
                           <ul class="styleList2">
                               <li>Project objective</li>
                               <li>Identification of constraints</li>
                               <li>Estimation of budget</li>
                               <li>Schedule</li>
                           </ul>
                           <div class="boxMissions">Cahier des charges</div>
                       </div>

                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre2">Creating solutions</h4>
                           <ul class="styleList2">
                               <li>Mobilization of extensive expertise</li>
                               <li>Engineering development</li>
                               <li>Equipment selection</li>
                               <li>Definition of logistics</li>
                           </ul>
                           <div class="boxMissions">Proposition chiffré</div>
                       </div>
                   </div>

                   <div class="containerColumn">
                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre3">Project execution</h4>
                           <ul class="styleList2">
                               <li>Building infrastructure Transportation, transit and customs</li>
                               <li>clearance</li>
                           </ul>
                           <div class="boxMissions">La livraison clef en main</div>
                       </div>

                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre4">No title</h4>
                           <ul class="styleList2">
                               <li>Maintenance and after sales service  </li>
                               <li>Commissioning </li>
                               <li>Drafting of maintenance plans </li>
                               <li>Maintenance service </li>
                           </ul>
                           <div class="boxMissions">SAV</div>
                       </div>
                   </div>
                   <hr class="hrEnd">
               </div><!-- FIN PART 1 -->



               <!-- PART 2 -->
               <div id="buying">
                   <h2 class="mission_buying">Buying agency</h2>
                   <hr class="hrTitle"><br>
                   <h3>Our services</h3>
                   <p>An integrated solution for buying industrial equipment.</p>

                   <p>Our areas of expertise:</p>
                   <ul class="styleList1">
                       <li>Flanges</li>
                       <li>Seals</li>
                       <li>Filters</li>
                       <li>Instrumentation</li>
                       <li>Fire Protection, Safety Equipment</li>
                       <li>Electric Equipment</li>
                       <li>Cryogenic Pumps</li>
                       <li>Industrial tools</li>
                   </ul>

                   <p>Our know-how:</p>
                   <ul class="styleList1">
                       <li>A team of experts to advise you and identify the infrastructure best-adapted to your needs</li>
                       <li>A network of high-performance suppliers who offer a wide range of quality equipment</li>
                       <li>A sales volume that guarantees price optimization</li>
                       <li>“Door-to-door” integrated logistical services that ensure rapid onsite delivery </li>
                   </ul>

                   <h3>Our method</h3>

                   <div class="containerColumn">
                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre1">Reception of request</h4>
                           <ul class="styleList2">
                               <li>Identification of your representative within APS</li>
                               <li>Validation of technical features </li>
                               <li>Budget and deadline estimation </li>
                           </ul>
                           <div class="boxMissions">Cahier des charges</div>
                       </div>

                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre2">Sourcing</h4>
                           <ul class="styleList2">
                               <li>Identification of appropriate suppliers within the APS network</li>
                               <li>Quotation demand</li>
                               <li>Comparative analysis of offers received</li>
                               <li>Transmission of the APS offer (multiple quotations, delivery time and technical documentation</li>
                           </ul>
                           <div class="boxMissions">Proposition chiffré</div>
                       </div>
                   </div>

                   <div class="containerColumn">
                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre3">Validation of the <br>order</h4>
                           <ul class="styleList2">
                               <li>Optimization of payment modes and deadlines</li>
                               <li>Validation of equipment</li>
                               <li>conformity to tender</li>
                           </ul>
                           <div class="boxMissions">La livraison clef en main</div>
                       </div>

                       <div class="column-2 column_2_missions">
                           <h4 class="content-titre content-titre4">Equipment delivery</h4>
                           <ul class="styleList2">
                               <li>Handling of procedures for transit and dispatching</li>
                               <li>Handling of customs procedures</li>
                               <li>Prise en charge des démarches douanières</li>
                               <li>Transporting onsite</li>
                           </ul>
                           <div class="boxMissions">SAV</div>
                       </div>
                   </div>
               </div><!-- FIN PART 2 -->

           </article>
        </section>



        <!-- FOOTER -->
        <?php include ('footer.inc.php'); ?>



        <!--<![endif]--> <!-- FIN DES ANCIENS NAVIGATEUR IE -->


		<!-- LIBS -->
        <script src="js/min.libs.js"></script>

		<!-- MAIN -->
        <script src="js/min.main.js"></script>

	</body>
</html>
