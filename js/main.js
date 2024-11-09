$(document).ready(function() {
    $('#light-mode').click(function() {
      $('body').removeClass('bg-dark text-white').addClass('bg-light text-dark');
      $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-primary');
    });
  
    $('#dark-mode').click(function() {
      $('body').removeClass('bg-light text-dark').addClass('bg-dark text-white');
      $('.navbar').removeClass('navbar-light bg-primary').addClass('navbar-dark bg-dark');
    });
  });
  