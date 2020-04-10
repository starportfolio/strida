(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min - 250) {
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        
      });
    });

  }
})(jQuery);
$("#timeline-1").timeline();

$(function() {
            //jQery준비

            //위로가기 클릭시 맨위로 스크롤
            $('#top_go').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });

            //스크롤 보이기, 숨기기
            var offset = 800; //높이 조절
            $(window).scroll(function() {
                var st = $(this).scrollTop();
                if (st > offset) {
                    $('#top_go').fadeIn(500);
                } else {
                    $('#top_go').fadeOut(500);
                }
            });


        }); //jQery 종료