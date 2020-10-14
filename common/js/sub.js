$(document).ready(function(){


    //스크롤 이벤트
    var lnb = $(".lowMenu").offset().top;
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
          $("#searchBtn").css("top","0px");
          $(".topBtn").fadeOut();
        }

    })

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
    })


    // 검색버튼 클릭시 검색창 오픈
    $("#search").on("click",function(){
        if($("#searchBtn").css("visibility") == "hidden"){
            $("#searchBtn").css("visibility","visible");
            $(".maindark").css("display","block");
        }
    })

    //검색창 오프
    $("#searchClo").on("click",function(){
        if($("#searchBtn").css("visibility") == "visible"){
            $("#searchBtn").css("visibility","hidden");
            $(".maindark").css("display","none");
        }
    })


    // 장바구니버튼 클릭시 장바구니 오픈
    $("#cart").on("click",function(){
        if($("#shopbagBtn").css("visibility") == "hidden"){
            $("#shopbagBtn").css("visibility","visible").css("right","0");
            $("#shopbagMenu").css("right","0");
            $(".maindark").css("display","block").css("z-index","40");
            $("body").css("overflow","hidden");
        }
    })


    //장바구니 오프
    $("#shopbagMenu > span").on("click",function(){
        if($("#shopbagBtn").css("visibility") == "visible"){
            $("#shopbagBtn").css("visibility","hidden").css("right","-600px");
            $("#shopbagMenu").css("right","-600px");
            $(".maindark").css("display","none").css("z-index","8");
            $("body").css("overflow","unset");
        }
    })


    



})