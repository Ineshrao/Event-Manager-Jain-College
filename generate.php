<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Vismaya | 2019</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">
        <!-- Normalize CSS -->
        <link rel="stylesheet" href="css/normalize.css">
        <!-- Main CSS -->
        <link rel="stylesheet" href="css/main.css">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Animate CSS -->
        <link rel="stylesheet" href="css/animate.min.css">
        <!-- Font-awesome CSS-->
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <!-- Main Menu CSS -->
        <link rel="stylesheet" href="css/meanmenu.min.css">
        <!-- Magnific CSS -->
        <link rel="stylesheet" type="text/css" href="css/magnific-popup.css">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="style.css">
        <!-- Modernizr Js -->
        <script src="js/modernizr-2.8.3.min.js"></script>
    </head>

    <body>
        <div id="wrapper" class="wrapper">
            <!-- Header Area Start Here -->
            <header>
                <div id="header-one" class="header-area header-fixed full-width-compress">
                    <div class="main-menu-area" id="sticker">
                        <div class="container-fluid">
                            <div class="row no-gutters d-flex align-items-center">
                                <div class="col-lg-2 col-md-3 d-none d-lg-block">
                                    <div class="logo-area">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="logo">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-7 possition-static">
                                    <div class="eventalk-main-menu">
                                        <nav class="d-none d-lg-block">
                                            <ul>
                                                <li>
                                                    <a href="index.html">Home</a>
                                                </li>
                                                
                                                <li>
                                                    <a href="events.html">Events</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- Mobile Menu start -->
                                        <nav id="dropdown" class="d-md-none">
                                            <ul>
                                                <li>
                                                    <a href="index.html">Home</a>
                                                    
                                                </li>
                                                
                                                <li>
                                                    <a href="events.html">Events</a>
                                                    
                                                </li>
                                                
                                                
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- Mobile Menu End -->
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 d-none d-lg-block">
                                    <ul class="header-action-items">
                                        <li>
                                            <a href="register.html" title="Register" class="btn-fill size-xs color-yellow border-radius-5">Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <!-- Header Area End Here -->
            <!-- Inne Page Banner Area Start Here -->
            <section class="inner-page-banner" style="background-image: url(img/figure/inner-page-figure.jpg);">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumbs-area">
                                <h1>Generate</h1>
                                <ul>
                                    <li style="color: #fad03b;">Admin
                                    </li>
                                    <li>Generate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Inne Page Banner Area End Here -->
            <div class="container"><br><br>
                <h3 class="title-bold color-dark title-bar">Please Log in to Generate The Excel Files</h3>
                <?php
                    if (isset($_GET['error']) && $_GET['error'] === '1') {
                        echo '<p style="color: red;">Invalid username or password</p>';}?>
                <div class="form-container">
                    
                    <form id="gen" action="download.php" method="post">
                        <label for="name" >Name</label>
                        <input type="text" id="username" name="username" required>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                        <label for="event">Select Event</label>
                        <select id="event" name="event">
                            <option value="Quiz">Quiz</option>
                            <option value="Cosplay">Cosplay</option>
                            <option value="Science Show">Science Show</option>
                            <option value="Expression">expression</option>
                            <option value="Video Making">Video Making</option>
                            <option value="Famelab">Famelab</option>
                            <option value="Math Puzzle">Math Puzzle</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Photography">Photography</option>
                            <option value="Logo Making">Logo Making</option>
                            <option value="Crime Detection">Crime Detection</option>
                            <option value="Event X">Event X</option>
                        </select>
                        <div style="text-align: center;">
                            <button type="submit" class="btn-fill size-xs color-yellow border-radius-5">Generate</button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Footer Area Start Here -->
            <footer>
                <div class="footer-layout2">
                    <div class="footer-top-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-12 col-sm-12">
                                    <div class="widget">
                                        <a class="footer-widget-logo" href="index.html">
                                            <img class="img-fluid" src="img/logo.png" alt="logo">
                                        </a>
                                        <div class="footer-widget-about">
                                            <p>44/4, District Fund Road Jayanagar 9th Block, Kottapalya, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560069.</p>
                                        </div>
                                            <h3 class="widgettitle">Follow Us </h3>
                                        <div class="footer-widget-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/jain.vismaya" title="facebook">
                                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/jaincollege_vismaya/" title="instagram">
                                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="widget">
                                        <h3 class="widgettitle">Useful Links</h3>
                                        <div class="footer-widget-menu">
                                            <ul>
                                                <li>
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li>
                                                    <a href="events.html">Events</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12">
                                    <div class="widget">
                                        <h3 class="widgettitle">For Further Queries</h3>
                                        <div class="footer-widget-newsletter">
                                            <p>TEACHER CO-ORDINATORS<br>
                                                Smt. Sumana H.C : 96866-84287<br>
                                                Smt. Savitha R : 94494-51867<br>
                                                Smt. Pavithra N.S : 98863-34623<br><br>
                                                STUDENT CO-ORDINATOR<br>
                                                Aditya Sarwade : 94480-21043<br>
                                                Arthy Meenakshi : 97892-05363<br>
                                                Vishal Ramesh : 82480-18624
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom-area">
                        <p>© 2019 Vismaya. All Rights Reserved. 
                                </p>
                    </div>
                </div>
            </footer>
            <!-- Footer Area End Here -->
        </div>
        <!-- Wrapper End -->
        <!-- jquery-->
        <script src="js/jquery-2.2.4.min.js"></script>
        <!-- Plugins js -->
        <script src="js/plugins.js"></script>
        <!-- Popper js -->
        <script src="js/popper.js"></script>
        <!-- Bootstrap js -->
        <script src="js/bootstrap.min.js"></script>
        <!-- Meanmenu Js -->
        <script src="js/jquery.meanmenu.min.js"></script>
        <!-- Srollup js -->
        <script src="js/jquery.scrollUp.min.js"></script>
        <!-- Google Map js -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtmXSwv4YmAKtcZyyad9W7D4AC08z0Rb4"></script>
        <!-- Validator js -->
        <script src="js/validator.min.js"></script>
        <!-- Custom Js -->
        <script src="js/main.js"></script>

    </body>
</html>
