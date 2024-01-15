var slide = new Array();
    slide[0] = "images/banner/bn2.jpg"
    slide[1] = "images/banner/bn3.jpg"
    slide[2] = "images/banner/bn4.jpg"   
    slide[3] = "images/banner/bn5.jpg"
    slide[4] = "images/banner/bn6.jpg"
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
     
 

     