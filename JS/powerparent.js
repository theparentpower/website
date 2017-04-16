
var height = $('.navigation-bar').height();
  console.log($('.main-body').offset().top);
  console.log($('#events').offset().top);
  console.log($(window).offset());


$(window).scroll(function(){
  if($(window).width()>500){
  if ($(window).scrollTop() > 0 ){
    /*var docViewBottom = $(window).scrollTop()+$(window).height();
    var aboutView = $('.body-about').scrollTop()+$(window).height();
    var calendarView =  $('.body-events').offset().top+$('#events').height()


    if(docViewBottom > calendarView){
      $('.body-events').animate({
        opacity: 1
      },1000 );
    }

    if(docViewBottom > aboutView){
      console.log("executing");
      $('.body-about').animate({
        opacity: 1
      },1000 );
    }
    */
    $('.navigation-bar').css('position', 'fixed');
    $('.navigation-bar').css('width', '100%');
    $('.navigation-bar').css('height', '50px');
    $('#navbar-links').css('padding-top','0px');
    $('#logo-navbar').css('display', 'none');
    $('#title-navbar').css('display','block');
    $('.navigation-bar').css('box-shadow', '0px 2px 4px rgb(150, 150, 150)');

  }
  if ($(window).scrollTop() < 1 ){
    $('.navigation-bar').css('position', 'relative');
    $('.navigation-bar').css('width', '100%');
    $('.navigation-bar').css('height', '120px');
    $('#navbar-links').css('padding-top','50px');
    $('#logo-navbar').css('height', '100px');
        $('#logo-navbar').css('visibility', 'visible');
        $('#logo-navbar').css('display', 'block');
        $('#title-navbar').css('display','none');
        $('.navigation-bar').css('box-shadow', 'none');

  }
}
})
