$(document).ready(function(){


    //스크롤 이벤트
    var lnb = $(".topMenu").offset().top;
    $(window).scroll(function() {
          var window = $(this).scrollTop();
    
        if(lnb <= window) {
          $("header").addClass("scroll");
          $("#wholeMenu").css("top","100px");         
          $("#searchBtn").css("top","0px");
          $(".topBtn").fadeIn();
        } else {
          $("header").removeClass("scroll");
          $("#wholeMenu").css("top","280px");
          $("#searchBtn").css("top","60px");
          $(".topBtn").fadeOut();
        }

    });

    $(".topBtn").on("click",function() {
        $( "html,body").animate( { scrollTop : 0 }, 400 );
        return false;
    });

    // 메뉴버튼 클릭시 전체 메뉴 오픈
    $(".shopImg").on("click",function(){
        if($("#wholeMenu").css("display") == "none"){
            $("#wholeMenu").css("display","block");
            $(".maindark").css("display","block");
            $(".shopImg").css("background-image","url(common/img/top_icon/btn_all_menu_close.png)");
            $(".bgHeader").css("display","block");

        }else if($("#wholeMenu").css("display") == "block"){
            $("#wholeMenu").css("display", "none");
            $(".maindark").css("display","none");
            $(".shopImg").css("background-image","url(common/img/top_icon/btn_all_menu.png)");
            $(".bgHeader").css("display","none");
        }
    });


    // 검색버튼 클릭시 검색창 오픈
    $("#search").on("click",function(){
        if($("#searchBtn").css("visibility") == "hidden"){
            $("#searchBtn").css("visibility","visible");
            $(".maindark").css("display","block");
        }
    });

    //검색창 오프
    $("#searchClo").on("click",function(){
        if($("#searchBtn").css("visibility") == "visible"){
            $("#searchBtn").css("visibility","hidden");
            $(".maindark").css("display","none");
        }
    });


    // 장바구니버튼 클릭시 장바구니 오픈
    $("#cart").on("click",function(){
        if($("#shopbagBtn").css("visibility") == "hidden"){
            $("#shopbagBtn").css("visibility","visible").css("right","0");
            $("#shopbagMenu").css("right","0");
            $(".maindark").css("display","block").css("z-index","40");
            $("body").css("overflow","hidden");
        }
    });


    //장바구니 오프
    $("#shopbagMenu > span").on("click",function(){
        if($("#shopbagBtn").css("visibility") == "visible"){
            $("#shopbagBtn").css("visibility","hidden").css("right","-600px");
            $("#shopbagMenu").css("right","-600px");
            $(".maindark").css("display","none").css("z-index","8");
            $("body").css("overflow","unset");
        }
    });


    // 이미지 슬라이드

    var container = $(".eventRitem"),
        container2 = $(".colLitem"),
        slideGroup = container.find(".eventSlide"),
        slideGroup2 = container2.find(".colSlide"),
        slides = slideGroup.find(".eventRImgFr"),
        slides2 = slideGroup2.find(".colLImgFr"),
        indicator = container.find("#btn"),
        indicator2 = container2.find("#btn2"),
        slideCount = slides.length,
        slideCount2 = slides2.length,
        indicatorHtml = '',
        indicatorHtml2 = '',
        currentIndex = 0,
        currentIndex2 = 0,
        duration = 500,
        interval = 3500,
        timer,
        timer2;


        slides.each(function(i){
            var newRight = -i * 110 + '%';

            $(this).css({right: newRight});

            indicatorHtml += "<li>"+"<a>"+(i+1)+"</a>"+"</li>";
            
        });
        
        indicator.html(indicatorHtml);

        slides2.each(function(i){

            var newLeft = -i * 110 + '%';

            $(this).css({left: newLeft});

            indicatorHtml2 += "<li>"+"<a>"+(i+1)+"</a>"+"</li>";
        });


        indicator2.html(indicatorHtml2);
 

        function goToSlide(index){
            slideGroup.animate({right: 110 * index + '%'},duration);
           
            currentIndex = index;
           

            updateNav(); 
        }

        function goToSlide2(index2){
            slideGroup2.animate({left: 110 * index2 + '%'},duration);
            currentIndex2 = index2;
            updateNav();
        }

        function updateNav(){
            indicator.find('li').removeClass('active');
            indicator.find('li').eq(currentIndex).addClass('active');
            indicator2.find('li').removeClass('active');
            indicator2.find('li').eq(currentIndex2).addClass('active');
        }

        indicator.find('li').on("click",function(e){
            e.preventDefault();//a태그를 사용 했을 때 자동 적용되는 이벤트 막기

            var idx = $(this).index();
            goToSlide(idx);

        });

        indicator2.find('li').on("click",function(e){
            e.preventDefault();//a태그를 사용 했을 때 자동 적용되는 이벤트 막기

            var idx2 = $(this).index();
            goToSlide2(idx2);
        });

        updateNav();

        function startTimer(){
            timer = setInterval(function(){
                var nextIndex = (currentIndex +1) % slideCount;
                
                goToSlide(nextIndex);
                
            },interval);
            timer2 = setInterval(function(){
                var nextIndex2 = (currentIndex2 +1) % slideCount2;
                goToSlide2(nextIndex2);

            }, interval);
        }
        startTimer();

        function stopTimer(){
            clearInterval(timer);
            clearInterval(timer2);
        }

        container.mouseenter(function(){
            stopTimer();
        })
        .mouseleave(function(){
            startTimer();
        });

        container2.mouseenter(function(){
            stopTimer();
        })
        .mouseleave(function(){
            startTimer();
        });


        // 네번째 메뉴 탭 클릭시 화면 바뀜

      var tapname = $("#itemTopMenu > #listName"),
          tapimg = tapname.find("li"),
          tiles = $(".tapitemimg"),
          tileimg = tiles.find(".itemlistPicF"),
          tileCount = 0;


        tapimg.on("click",function(){
            tileCount = $(this).index();
            tapimg.each(function(index){
                $(this).hasClass('listactive', $(this).addClass('listactive'));
                if(tileCount != index){
                    $(this).removeClass('listactive');
                }
            });
            tileimg.eq(tileCount).show().siblings('div').hide();
        });
});