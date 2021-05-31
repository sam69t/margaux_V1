let timeAutoPlay = 2500;
let angleNext = 0;
let anglePrev = 0;

let options = {
  initialIndex: 5,

  cellAlign: "center",
  wrapAround: true,
  freeScroll: true,
  pageDots: false,
  hash: true,
  autoPlay: 3000,

  draggable: false,
  pauseAutoPlayOnHover: false,

  arrowShape:
    "M91.2,101.1C91,99,80,91.5,78,88.9c-4.7-5.8-16.2-3.4-21.2-4C27.9,79.3,32.1,38.3,64.9,40c0,0,24.1-15.1,22.3-19.4s-18-10.5-18-10.5C-23.8,4.7-.4,137.3,78,111.5l11.2-6.6S91.4,103.3,91.2,101.1ZM73.1,21.2c2.4,0,2.4,3.9-.1,3.8S70.6,21.1,73.1,21.2Zm2.3,81.4c-2.4,0-2.3-3.8.1-3.7S77.9,102.7,75.4,102.6Z",
};

// let main = $(".main-carousel").flickity({
//   cellAlign: "center",
//   wrapAround: true,
//   freeScroll: true,
//   pageDots: false,
//   hash: true,
//   draggable:false,
//   autoPlay: 2900,
//   pauseAutoPlayOnHover: false,

//   arrowShape:"M91.2,101.1C91,99,80,91.5,78,88.9c-4.7-5.8-16.2-3.4-21.2-4C27.9,79.3,32.1,38.3,64.9,40c0,0,24.1-15.1,22.3-19.4s-18-10.5-18-10.5C-23.8,4.7-.4,137.3,78,111.5l11.2-6.6S91.4,103.3,91.2,101.1ZM73.1,21.2c2.4,0,2.4,3.9-.1,3.8S70.6,21.1,73.1,21.2Zm2.3,81.4c-2.4,0-2.3-3.8.1-3.7S77.9,102.7,75.4,102.6Z",

// });
$(".main-carousel-cell").click(function () {
  // $(".flickity-prev-next-button.next").addClass("blurry");
  //$(this).css("visibility", "hidden");
  //$(this).children().toggleClass("reveal");
  //$(this).children().toggleClass("reveal");
  // console.log($(this).find(".reveal").toggle());
});

$(".flickity-prev-next-button.next").click(function () {
  $(".flickity-prev-next-button.next").removeClass("blurry");

  //$(this).css("visibility", "hidden");
  //$(this).children().toggleClass("reveal");
  //$(this).children().toggleClass("reveal");
  // console.log($(this).find(".reveal").toggle());
});
$(".main-carousel-cell").hover(function () {
  $(this).find(".reveal").toggle();
  //$(this).css("visibility", "hidden");
  //$(this).children().toggleClass("reveal");
  //$(this).children().toggleClass("reveal");
  // console.log($(this).find(".reveal").toggle());
});

$(".plus").hover(function () {
  $(".plus").toggleClass("rotatePlus");
});

$(".plus").click(function () {
  $(this).children().addClass("overflow");
  if ($(".project-text").children().hasClass("overflow")) {
    // $(".project-text", this).children().addClass("slide");
    $(".slider-box").addClass("slide");
    $(".plus").toggleClass("rotatePlus2");

    $(".project-text").toggleClass("addgray");

    //$(this).children().removeClass("reveal");

    $(".slide").slideToggle("1000", "swing");
  }

  console.log("TEST");
});

$(".project-text").click(function () {
  $(this).children().addClass("overflow");
  // if ($(".project-text").children().hasClass("overflow")) {
  //   // $(".project-text", this).children().addClass("slide");
  //   $(".slider-box").addClass("slide");
  //   $(".plus").toggleClass("rotatePlus2");

  //   $(".project-text").toggleClass("addgray");

  //   //$(this).children().removeClass("reveal");

  //   $(".slide").slideToggle("1000", "swing");
  // }

  console.log("TEST");
});

$(".main-carousel-cell").click(function () {
  //console.log("cllick");
  //   $(this).find(".reveal").toggle();
  // $(".static-banner").css("overflow", "visible");
  //   //$(this).children().toggleClass("reveal");
  //$(this).children().css("overflow", "visible");
  //$(this).addClass("selectedProject");
  // $(this).children().addClass("overflow");
  // if ($(".main-carousel-cell").children().hasClass("overflow")) {
  //   $(".project-text", this).children().addClass("slide");
  //   $(".title-project").removeClass("slide");
  //   //$(this).children().removeClass("reveal");
  //   $(".slide").slideDown();
  // setTimeout(() => {
  //   console.log("remonte");
  //   $(".slide").slideUp();
  // }, 6000);
  //   //  $(this).children().css("overflow", "hidden");
  // $(this).children().addClass("overflow");
  // setTimeout(() => {
  //   $(this).children().removeClass("overflow");
  // }, 7000);
  //   //$(this).children().toggleClass("reveal");
  //   // console.log($(this).find(".reveal").toggle());
});

// if ($(".main-carousel-cell").hasClass("selectedProject")) {
//   console.log("dosomething");

//   //  $(this).children().css("overflow", "hidden");
// }

// $('.main-carousel-cell').hover(function(){
//   $(".reveal").toggle(
//     function(){
//       $('.reveal').hide();
//     },
//     function(){
//       $('.reveal').hide();
//     },
//     function(){;
//   });
// });

let mainCarousels = document.querySelectorAll(".main-carousel-cell");

for (let i = 0; i < mainCarousels.length; i++) {
  let mainCarousel = mainCarousels[i];
  timeAutoPlay = timeAutoPlay + 50;
  console.log(timeAutoPlay);

  let carousel = new Flickity(mainCarousel, {
    cellSelector: ".children-carousel-cell",

    pageDots: true,
    percentPosition: true,
    prevNextButtons: true,
    wrapAround: true,
    autoPlay: timeAutoPlay,
    //  autoPlay: 2500,

    pauseAutoPlayOnHover: true,
  });
}

$("a#toggle").click(function () {
  $("a#toggle").toggleClass("grey");
});
// $(".children-carousel").click(function(){
//   console.log("click");

//              $(".main-carousel-cell").css("padding-bottom", "1000px")

//              $(".footer").click(function(){
//               $(".main-carousel-cell").css("padding-bottom", "0px")

//              });
// // setTimeout(() => {
// //   $(".main-carousel-cell").css("padding-bottom", "0px")

// // }, 1000);

// });
$(".footer").click(function () {
  $("#CV").slideToggle(600, "swing");
  $("a#toggle").addClass("opa");
});

// $(".flickity-prev-next-button").click(function(){
//   $(".project-text").slideDown(650,"swing");
// });

$(document).ready(function () {
  setTimeout(() => {
    $(".flickity-prev-next-button.next").addClass("blurry");
    $(".flickity-prev-next-button.previous").addClass("blurry");
  }, 1);

  console.log("blury");

  let OriginColor = $("a").css("color", "black");

  $(".footer span").hover(
    function () {
      $(this).css("color", getRandomColor());
    },
    function () {
      $(this).css("color", OriginColor);
    }
  );

  $("a").hover(
    function () {
      let hideTimeout;
      // Show our tooltip on hover
      clearTimeout(hideTimeout);
      $(this).css("color", getRandomColor());
    },
    function () {
      // Hide our tooltip
      hideTimeout = setTimeout(() => {
        console.log("hey");

        // $("a").css("color", OriginColor);
        $("a").css("color", OriginColor);
      }, 1000);

      // $(this).css("color", getRandomColor());

      // setTimeout(() => {
      //   $(this).css("color", OriginColor);
      // }, 500);
    }
  );

  function getRandomColor() {
    setTimeout(() => {}, 0);
    let value = (Math.random() * 0xff) | 0;
    let grayscale = (value << 16) | (value << 8) | value;
    let color = "#" + grayscale.toString(16);

    return color;
  }
  function SetOriginalColor() {
    let color = "#" + "0";

    return color;
  }

  $("#CV").slideToggle(0, "swing");

  // setTimeout(() => {
  //   $("#CV").slideUp(600, "swing");
  // }, 12000);

  $(".reveal").hide();

  let mql = window.matchMedia("(max-width: 800px)");

  mediaqueryresponse(mql); // call listener function explicitly at run time

  mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes

  function mediaqueryresponse(mql) {
    if (mql.matches) {
      // if media query matches

      // phone

      options.prevNextButtons = false;
      $(".project-text").click(function () {
        $(this).children().addClass("overflow");
        if ($(".project-text").children().hasClass("overflow")) {
          // $(".project-text", this).children().addClass("slide");
          $(".slider-box").addClass("slide");
          $(".project-text").toggleClass("addgray");

          //$(this).children().removeClass("reveal");

          $(".slide").slideToggle("1000", "swing");
        }

        console.log("TEST");
      });
      $(".static-banner").removeClass("reveal");
      $(".static-banner").css("display", "block");

      console.log("patatooo");
    } else {
      $(".main-carousel").flickity(options);

      $(".main-carousel")
        .children(".flickity-prev-next-button.next")
        .addClass("droite");

      if ($(".flickity-prev-next-button.next").hasClass("droite")) {
        $(".flickity-prev-next-button.next.droite").click(function () {
          //$(this).toggleClass('active');
          angleNext += 60;
          console.log("clicknext");

          $(".flickity-prev-next-button.next")
            .children()
            .css({
              transform: "rotate(" + angleNext + "deg)",
              "transform-origin": "rotate(" + angleNext + "deg)",

              "-webkit-transform": "rotate(" + angleNext + "deg)",
              "-moz-transform": "rotate(" + angleNext + "deg)",
              "-o-transform": "rotate(" + angleNext + "deg)",
              "-ms-transform": "rotate(" + angleNext + "deg)",
            });
        });
      }
      // $('.flickity-prev-next-button').addClass("dif");

      //   if( $(".flickity-prev-next-button").hasClass("dif"))
      //   {

      $(".main-carousel .flickity-prev-next-button.previous").click(
        function () {
          //$(this).toggleClass('active');
          anglePrev += 60;

          $(".flickity-prev-next-button.previous")
            .children()
            .css({
              transform: "rotate(" + anglePrev + "deg)",
              "transform-origin": "rotate(" + anglePrev + "deg)",

              "-webkit-transform": "rotate(" + anglePrev + "deg)",
              "-moz-transform": "rotate(" + anglePrev + "deg)",
              "-o-transform": "rotate(" + anglePrev + "deg)",
              "-ms-transform": "rotate(" + anglePrev + "deg)",
            });
        }
      );

      //tab or desktop
      console.log("NOOOOOpatatooo");
      // $(".static-banner").css("display", "none");
      // $(".static-banner").addClass("reveal");
    }
  }
});

// $(".main-carousel-cell").flickity({
//   cellAlign: "center",
//   draggable: true,

//   prevNextButtons: true,
//   freeScroll: true,
//   pageDots: true,
//   hash: true,
//  });
// if (window.matchMedia("(max-width: 800px)").matches) {
//   console.log("patatooo");
//   $('.static-banner').removeClass("reveal");

//   /* La largeur minimum de l'affichage est 600 px inclus */
// } else {
//   $('.static-banner').addClass("reveal");
//   console.log("NOT patatooo");

//   /* L'affichage est inférieur à 600px de large */
// }
