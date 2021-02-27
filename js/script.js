// スティッキーヘッダー
$(function() {
    var $win = $(window),
        $fv = $(".main-bg"),
        $header = $("header"),
        fvHeight = $fv.outerHeight();
        fixedClass = "fixed";

    $win.on("load scroll",function() {
        var value = $(this).scrollTop();
        if($win.width() > 768){
            if (value >fvHeight) {
                $header.addClass(fixedClass);
            } else{
                $header.removeClass(fixedClass);
            }
        }
    });
});

// スライダー　
$(".slider").slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:1000,
    fade:true,
    cssEase:"linear"
});

// ハンバーガー
$(".burger-btn").on("click",function() {
    $(".header-nav").fadeToggle(300);
    $(this).toggleClass("cross");
    $("body").addClass("noscroll");
});

$(".header-item").on("click",function() {
    if($("body").hasClass("noscroll")){
        $("body").removeClass("noscroll");
        $(".header-nav").fadeOut(300);
        $(".burger-btn").removeClass("cross");
    };
});

// SmoothScrool
var scroll = new SmoothScroll('a[href*="#"]', {
    // header: '[data-scroll-header]'
  });