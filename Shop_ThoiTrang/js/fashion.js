var slide = new Array();
    slide[0] = "images/js_animation/js1.jpg"
    slide[1] = "images/js_animation/js2.jpg"
    slide[2] = "images/js_animation/js3.jpg"   
    slide[3] = "images/js_animation/js4.jpg"
    slide[4] = "images/js_animation/js5.jpg"
     //khai bao bien n luu vi tri anh
     var n = 0;
     $(document).ready(function(){
           setInterval(function(){
               //tac dong vao the html co id=slide-img
               $("#slide-img").fadeOut(function(){
                   $("#slide-img").attr("src",slide[n]);
                   //hien thi anh
                   $("#slide-img").fadeIn();
                   n++;
                   //neu n o vi tri anh cuoi cung thi reset n
                   if(n == slide.length)
                      n = 0;
               });
           },5000);
     }); 
         function next() {
           n++;
           if(n == slide.length)
             n = 0;
           //thay doi duong dan anh
           document.getElementById('slide-img').setAttribute("src",slide[n]);
         }
         function prev() {
           n--;
           if(n < 0)
             n = slide.length - 1;
           //thay doi duong dan anh
           document.getElementById('slide-img').setAttribute("src",slide[n]);
         }
     
     $(document).ready(function(){
       $('.slide-book').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         arrows: true, // Show navigation arrows
         prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
         autoplay: true,
         autoplaySpeed: 3000,
       });
     });
     $(document).ready(function(){
       $('.slide-book').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         arrows: true, // Show navigation arrows
         prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
         autoplay: true,
         autoplaySpeed: 3000,
       });
     });
     $(document).ready(function(){
       $('.content-product-home').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         infinite: true,
         arrows: true, // Show navigation arrows
         prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
         autoplay: true,
         autoplaySpeed: 3000,
       });
     });
     $(document).ready(function(){
       $('.slide-news').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         arrows: true, // Show navigation arrows
         prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
         autoplay: true,
         autoplaySpeed: 3000,
       });
     });

    
     document.addEventListener('DOMContentLoaded', function () {
         // Get references to the password and confirm password fields
         var passwordField = document.getElementById('password');
         var confirmPasswordField = document.getElementById('confirmPassword');
         var passwordError = document.getElementById('passwordError');

         // Add event listener to the registration form
         document.getElementById('registrationForm').addEventListener('submit', function (event) {
             // Check if passwords match
             if (passwordField.value !== confirmPasswordField.value) {
                 // Prevent form submission
                 event.preventDefault();
                 // Display error message
                 passwordError.textContent = 'Mật khẩu và Nhập lại mật khẩu phải giống nhau.';
             } else {
                 // Clear error message
                 passwordError.textContent = '';
             }
         });
     });


     