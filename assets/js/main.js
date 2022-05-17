$(window).click(function () {
  $(".carousel__categories > nav > ul > li > div").css({ display: "none" });
});

const listItem = $(".carousel__categories > nav > ul > li");

listItem.click(function (e) {
  e.preventDefault();
  e.stopPropagation();

  $(".carousel__categories > nav > ul > li")
    .not(this)
    .children("div")
    .css({ display: "none" });

  $(this).children("div").slideToggle(300);
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});

const owl = $(".owl-carousel");
owl.owlCarousel();
// Listen to owl events:
owl.on("changed.owl.carousel", function (event) {
  $(".owl-item.active h3").css("-webkit-animation-play-state", "running");

  setTimeout(() => {
    $(".owl-item h3").css("-webkit-animation-play-state", "paused");
  }, 1000);
});
