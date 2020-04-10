var $ = jQuery;

$(function() {
            //jQery준비
            $('header #menu>ul>li>.menu_sec, #navi_bg').hide();
            $('header #menu, #navi_bg').mouseenter(function() {
                $('header #menu>ul>li>.menu_sec, #navi_bg').stop().slideDown(300);
            }).mouseleave(function() {
                $('header #menu>ul>li>.menu_sec, #navi_bg').stop().slideUp(300);
            });

            //모바일 네비게이션 바 복제
            var naviClon = $('#menu').contents().clone();
            var navi_list = $('<div id="sm_menu"></div>');
            navi_list.append(naviClon);
            navi_list.appendTo('#mb_navi');



            $('#m_menu').click(function() {
                $('#mb_navi').toggleClass('open');
                if ($('#mb_navi').hasClass('open')) { //열린상
                    $('#mb_navi').stop(true).animate({
                        right: 0
                    }, 500);
                    $('#m_menu > a').find('img').attr('src', 'http://kbportfolio.dothome.co.kr/strida/img/main_img/main_mobile1-2.png');
                    $('body').css('overflow', 'hidden');

                } else { //닫힌상태
                    $('#mb_navi').stop(true).animate({
                        right: '-100%'
                    }, 500);
                    $('#sm_menu > ul > li > .menu_sec').hide();
                    $('#sm_menu > ul > li > a').removeClass('selected');
                    $(this).find('img').attr('src', 'http://kbportfolio.dothome.co.kr/strida/img/main_img/main_mobile1.png');
                    $('body').css('overflow', 'scroll');
                };
            });



            /*모바일 각 메뉴 클릭시 서브메뉴 펼침*/
            $('#sm_menu > ul > li > a').click(function() {
                $(this).toggleClass('selected');
                $('#sm_menu > ul > li > a ').not(this).removeClass('selected');
                $(this).find('+div').slideToggle('fast');
                $('#sm_menu > ul > li > a').not(this).find('+div').slideUp('fast');

            });

            /*pc화면 사이즈에서 모바일 메뉴 사라지고 초기화기*/
            $(window).resize(function() {
                if ($(this).width() > 748) {
                    $('#mb_navi').css('right', '-100%');
                    $('#sm_menu > ul > li > .menu_sec').hide();
                    $('#sm_menu > ul > li > a').removeClass('selected');
                    $('#mb_navi').removeClass('open');
                    $('#m_menu > a').find('img').attr('src', 'http://kbportfolio.dothome.co.kr/strida/img/main_img/main_mobile1.png');
                    $('body').css('overflow', 'scroll');
                };
            });

        }); //jQery 종료