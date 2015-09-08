//smooth scrolling to bookmarks
//https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

console.log(`

                                                     ___
    Welcome.                                    ,o88888
                                               ,o8888888'
                         ,:o:o:oooo.        ,8O88Pd8888"
                     ,.::.::o:ooooOoOoO. ,oO8O8Pd888'"
                   ,.:.::o:ooOoOoOO8O8OOo.8OOPd8O8O"
                  , ..:.::o:ooOoOOOO8OOOOo.FdO8O8"
                 , ..:.::o:ooOoOO8O888O8O,COCOO"
                , . ..:.::o:ooOoOOOO8OOOOCOCO"
                 . ..:.::o:ooOoOoOO8O8OCCCC"o
                    . ..:.::o:ooooOoCoCCC"o:o
                    . ..:.::o:o:,cooooCo"oo:o:
                 '   . . ..:.:cocoooo"'o:o:::'
                 .'   . ..::ccccoc"'o:o:o:::'
                :.:.    ,c:cccc"':.:.:.:.:.'
              ..:.:"''::::c:"'..:.:.:.:.:.'
            ...:.'.:.::::"'    . . . . .'
           .. . ....:."' '   .  . . ''
         . . . ...."'
         .. . ."'     -hrr-
        .

`);

$('.pointer *').hover(function(){
    $('.pointer *').css("color", "#FF9900");
    }, function(){
    $('.pointer *').css("color", "white");
});
