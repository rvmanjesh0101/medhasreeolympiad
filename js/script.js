$(document).ready(function () {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  //closing navbar

  var navitemList = document.getElementById('navbarNavAltMarkup');

  var navlinks1 = document.getElementsByClassName('scroll')[0];
  var navlinks2 = document.getElementsByClassName('scroll')[1];
  var navlinks3 = document.getElementsByClassName('scroll')[2];
  var navlinks4 = document.getElementsByClassName('scroll')[3];
  var navlinks5 = document.getElementsByClassName('scroll')[4];

  navlinks1.addEventListener('click', function () {
    navitemList.classList.remove('show');
  })

  navlinks2.addEventListener('click', function () {
    navitemList.classList.remove('show');
  })

  navlinks3.addEventListener('click', function () {
    navitemList.classList.remove('show');
  })

  navlinks4.addEventListener('click', function () {
    navitemList.classList.remove('show');
  })

  navlinks5.addEventListener('click', function () {
    navitemList.classList.remove('show');
  })


    // bootstrap dropdown slide effect
    $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
  
    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


})