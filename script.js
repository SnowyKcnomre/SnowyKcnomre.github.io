var titleHeight = $('.title').innerHeight();
var imageHeight = $('.image-slide').outerHeight();
var mainContainerHeight = $('.main-container').outerHeight();
var specialSlide = imageHeight - titleHeight;

$('.image-slide').innerHeight(imageHeight -= titleHeight);
$('.samebox').innerHeight(imageHeight);

var secondImgWidth = $('.secondary-container').innerWidth();
$('.samebox').innerWidth(secondImgWidth);

var xWidth = $('.x-close').innerWidth();
var xHeight = $('.x-close').innerHeight();

$('.x-close').css({
 top: `calc(11% - ${xHeight / 2}px)`,
 right: `calc(0% - ${xWidth / 2}px)`
});
$('.x-close').click(function(){
  $('.blackscreen').css({"transform": "scale(1)","border-radius": "0%"
 });
 $('.meta-container').css({"opacity":"1", "z-index":"2"})
});
var docHeight = $(document).height();

$(function(){
 $('.main-container').hide();
});

$('.title').hover(function(){
 $('.main-container').stop(true, true).slideDown(800);
 $('.title-after').stop(true, true).animate({height: docHeight - 40}, 950);
 $('.blink').stop(true, true).animate({left: "-100vw"}, 1950);
 $('.title').stop(true, true).animate({height: "0px",padding: "0px"}, 800);
});

$('.image-cont').css({
 'margin-left':-specialSlide/2,
 'margin-right':specialSlide/2
}).innerWidth(specialSlide).innerHeight(specialSlide);

var sameboxWidth = $('.samebox').innerWidth();
$('.samebox').css({
 'margin-left':-sameboxWidth/2
});

$('.text-boxes').css('top',specialSlide);
$('.arrow').css("top",specialSlide/2);
$('.right-arrow').css("margin-left",specialSlide/2 + 15);
$('.left-arrow').css("margin-right",specialSlide/2 + 15);

var i = 0;
var per = 100;
$('.right-arrow').click(function(){
 if(i < 6) {
  i++;
  $('.image-slide').css('left',-specialSlide * i);
  per = 100 * i;
  $('section').css('right', per + "%");
 } else if(i == 6) {
  $('.partOne').css('opacity','0');
  $('partTwo').css('opacity','1');
 }
});

$('.left-arrow').click(function(){
 if(i >= 1) {
  i--
  $('.image-slide').css('left',-specialSlide * i);
  per = 100 * i;
  $('section').css('right', per + "%");
 }
});

$('.baka').hover(function(){
 $('.quote1-box').css({"z-index":"0", transform:"scale(1)"});
  $('.x-close').css({"z-index":"0",opacity:"1"});
}, function(){
 $('.quote1-box').css({"z-index":"-1",transform:"scale(0)"});
  $('.x-close').css({"z-index":"-1",opacity:"0"});
});
