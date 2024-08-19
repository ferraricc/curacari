const header=`
<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>        
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <!-- <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3">Kider</i></h1> -->
                    <h1 class="m-0 text-primary"><img src="img/curacari_logo.png" style="min-height: 25px; max-height: 35px; position: relative; bottom: 5px;" alt=""></h1>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a href="index.html" class="nav-item nav-link" >Home</a>
                    <a href="about.html" class="nav-item nav-link">Cosa facciamo</a>
                    <a href="team.html" class="nav-item nav-link">Chi siamo</a>                    
                    <a href="testimonianze.html" class="nav-item nav-link">Testimonianze</a>                    
                    <a href="contact.html" class="nav-item nav-link">Contattaci</a>
                    <a href="donation.html" class="nav-item nav-link mobileonly">Effettua una donazione</a>
                </div>
                <a href="donation.html" class="btn btn-primary btn-redbtn rounded-pill px-3 d-none d-lg-block">Effettua una donazione<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
`;
const footer=`
<div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5 d-flex justify-content-around">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Come puoi contattarci</h3>                        
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+39 353 4618282</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>curacari@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social " href="https://www.instagram.com/curacari?utm_source=webiste"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social " href="https://www.facebook.com/curacari"><i class="fab fa-facebook-f"></i></a>                            
                            <a class="btn btn-outline-light btn-social " href="https://www.linkedin.com/company/curacariaps"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-social " href="https://www.youtube.com/@CuracariAPS"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Collegamenti rapidi</h3>
                        <a class="btn btn-link  " href="404.html">Chi Siamo</a>
                        <a class="btn btn-link  " href="about.html">Cosa facciamo</a>
                        <a class="btn btn-link  " href="testimonianze.html">Testimonianze</a>
                        <a class="btn btn-link  " href="donation.html">Donazioni</a>
                        <a class="btn btn-link  " href="contact.html">Contatti</a>
                    </div>
                    
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Curacari.org</a>, All Right Reserved. 						
							
							Developed with &hearts; by Enrico Bergamini
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="index.html">Home</a>
                                <a href="contact.html">Contatti</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    
`;

const container=document.querySelector("#maincontainer");
container.innerHTML=header+container.innerHTML;
container.innerHTML+=footer;
// SET THE CURRENT PAGE IN THE NAVBAR TO ACTIVE
var currentPage = window.location.pathname.split("/").pop();
setTimeout(()=>{
    var links = document.querySelectorAll('.navbar-nav a');
    links.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {        
            link.classList.add('active');
        }
    });
},200);



