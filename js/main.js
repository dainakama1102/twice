$(function(){
  $('.member > a').click(function(){
    let $profile = $(this).find('.profile-wrap')
    if($profile.hasClass('open')){
      $profile.removeClass('open');
      $profile.fadeOut();
    } else {     
      $profile.addClass('open');
      $profile.fadeIn();
    }
  });  
});