$(document).ready(function(){
  $(".bg-coklat").css("background-color", "rgb(47,36,31)");
  $(".bg-olive").css("background-color", "rgb(203,212,160)");
  $(".text-coklat").css("color", "rgb(151, 115, 105)");
  $(".text-coklat-2").css("color", "rgb(129,114,83)");
  $(".text-olive").css("color", "rgb(203,212,160)");

  $("a").hover(
    function(){
      $(this).css("opacity", "85%");
    }, 
    function(){
      $(this).css("opacity", "100%");
  });
});