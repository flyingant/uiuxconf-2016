var body = $('body');

function toggleMenu() {
  $('button.nav').bind("click tap", function() {
    body.toggleClass('menu-open');
  })
  $('#header button.close, a.about,a.program,a.sponsors,a.speakers').bind("click tap", function() {
    body.removeClass('menu-open');
  })
}

function tab() {
  $('.tabs h3').click(function() {
    var _index = $('.tabs h3').index(this);
    if ($(this).hasClass('active') == true) {
      return false;
    } else {
      $("html,body").animate({ scrollTop: $("#scheduletop").offset().top }, 500);
    }
    $(this).addClass('active').siblings('h3').removeClass('active');
    $('.tables > .table').eq(_index).show().animate({ 'opacity': 1, 'top': '0px' }, 500).siblings('.table').hide().css({ 'opacity': 0, 'top': '-8px' });
  })
}

function toggleModal() {
  $('.cta').bind("click tap", function() {
    body.toggleClass('modal-open');
  })
  $(this).bind("click tap", function(e) {
    var eTarget = $(e.target);
    if ($(eTarget).hasClass('scroller') || eTarget.hasClass('modal') || eTarget.hasClass('container')) {
      body.toggleClass('modal-open');
    } else {
      e.stopPropagation();
    }
  })
}


function sticky() {
  var rollSet = $('#speakers');
  var offset = rollSet.offset();

  function navsticky() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > offset.top) {
      $(".tabnav").unstick();
    } else {
      $(".tabnav").sticky({ topSpacing: 62, zIndex: 2, responsiveWidth: 1024 });
    }
  }

  $("#header").sticky({ topSpacing: 0, zIndex: 4 });
  navsticky();
  $(window).scroll(function() {
    navsticky();
  })
}

$(document).ready(function() {
  toggleMenu();
  tab();
  toggleModal();
  sticky();

  $('.back-to-top').click(function() {
    $("html,body").animate({ scrollTop: $(body).offset().top }, 200);
  })

  $('.attendees .featured,.attendees .startups').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    // lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


})
