// @ts-nocheck
/*global $*/
// @ts-ignore
$(function(){

    "use strict";

    $(window).scroll(function(){
      if ($(window).scrollTop() >= 120) {
        $('.fixed-consult').fadeIn();
      }
      else {$('.fixed-consult').fadeOut();}
    });
  // consult
  // @ts-ignore
  $('.fixed-consult .image img.checkup').click(function(){
    $('#consult').removeClass('d-none').addClass('bounceIn');
    $('.image .tip').hide();
    $('.fixed-consult .image img.checkup').hide();
    $('.fixed-consult .image img.off').fadeIn();
    $('.fixed-consult .image img.off').css('transform' , 'rotate(360deg)');
  });
  $('.fixed-consult .image img.off').click(function(){
    $('#consult').addClass('d-none').removeClass('bounceIn');
    $('.image .tip').fadeIn();
    $('.fixed-consult .image img.checkup').fadeIn();
    $(this).hide();
    $('.fixed-consult .image img.off').css('transform' , 'rotate(360deg)');
  });
  // For clean errors
  var cleanError = (function(){
    // @ts-ignore
    $(".has_error").removeClass("has_error").css('border', 'solid 2px green');
    // @ts-ignore
    $(".error_message").remove();
  });
  
  var showError = (function(Element,Message){
    Element.after( "<p class=\"error_message fill\" style=\"margin-top: 6px;font-size: 12px;\" >"+Message+"</p>" );
    Element.focus();
    Element.addClass("has_error");
    Element.css('border', 'solid 2px #2c70b9');
  });
  // For [ consult ]
  // @ts-ignore
  $('#consult').submit(function (e) {
  e.preventDefault();
  cleanError();
  // @ts-ignore
  if ($('#name').val().length < 1) {
    // @ts-ignore
    showError($('#name'), 'Please fill this field');
  }
  // @ts-ignore
  else if ($('#phone').val().length < 1) {
    // @ts-ignore
    showError($('#phone'), 'Please fill this field');
  }
  // @ts-ignore
  else if ($('#cat').val() == 'select') {
    // @ts-ignore
    showError($('#cat'), 'Please fill this field');
  }
  // @ts-ignore
  else if ($('#note').val().length < 1) {
    // @ts-ignore
    showError($('#note'), 'Please fill this field');
  }
  
  else
  {
    // @ts-ignore
    $('#consult').hide();
    // @ts-ignore
    $('.edit').fadeIn();
  }
  });

    // @ts-ignore
    $('#edit').click(function(e){
        e.preventDefault();
        // @ts-ignore
        $('#consult').fadeIn();
        // @ts-ignore
        $('.edit').hide();
    });
    // @ts-ignore
    $('#confirm').click(function(e){
        e.preventDefault();
        // @ts-ignore
        $('.edit').hide();
        // @ts-ignore
        $('.done').fadeIn();
    });

    // @ts-ignore
    $('.fa-bars').click(function(){
        // @ts-ignore
        $('.drop').slideToggle();
    });

    // @ts-ignore
    $('.services .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplaySpeed:2000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});