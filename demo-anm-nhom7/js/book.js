  var slide = new Array();
      slide[0] = "images/image_1.jfif";
      slide[1] = "images/image_2.png";
      slide[2] = "images/image_3.png";
      slide[3] = "images/image_4.png";
      slide[4] = "images/image_5.jfif";
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