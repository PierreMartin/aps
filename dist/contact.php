
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- META -->
        <title>APS-Export | Contact</title>
        <meta name="description" content="APS-Export - Contact">
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
            .contact.nav-link {
                color: #e95b29;
                padding-top: 18px;
            }
            .contact.nav-link::before {
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
	<body style="background-color: #222A34; height: 20%;">

		<!-- SI ANCIEN NAVIGATEUR IE, ALORS ON AFFICHE :-->
		<?php include ('ie_old.inc.php'); ?>


        <!-- SI ANCIEN NAVIGATEUR IE, ALORS ON AFFICHE RIEN DU SITE :-->
        <!--[if (!IE 8) & (!IE 7) & (!IE 6)]><!-->


        <!-- MENU MOBILE -->
        <?php include ('navmobile.inc.php'); ?>


        <!-- MENU MAIN -->
        <?php include ('navmain.inc.php'); ?>



        <section class="bloc2 page_contact">
            <article class="wrapper">
                <h1>Contact</h1>
                <p class="subtitle">We provide turnkey solutions for your industries</p>
            </article>
        </section>

        <section class="containerBlocMap">
            <div class="blocMap">
               <div class="wrapper">
                    <div class="column-2">
                        <h3>Head Office</h3>
                        <hr class="hrContact">
                        <adress>14 Avenue de l’Opéra, 75001, Paris France</adress>
                        <br>
                        <adress>+33 9 77 21 51 19</adress>
                        <br>
                        <adress><a href="mailto:info@aps-export.com">info@aps-export.com</a></adress>
                    </div><!--
                 --><div class="column-2">
                        <h3>Lagos Office</h3>
                        <hr class="hrContact">
                        <adress>Lagos <br>Nigeria</adress>
                    </div>
               </div>

            </div>
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
