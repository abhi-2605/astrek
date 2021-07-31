$(".show").hide();
var viewport= $(window).width();

$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

function hideSoc(){
    $(".soc").hide();
    $(".show").show();
    $(".hide").hide();
};

function showSoc(){
    $(".soc").show();
    $(".hide").show();
    $(".show").hide();
};

$("#aboutBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 300);
});

$("#homeBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 300);
    console.log(viewport);
});

function contactUs(){
    if(viewport<=500){
            $('html, body').animate({
            scrollTop: $("#contactGForm").offset().top
        }, 200);
    }
    else{
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 200);
    }
    
}

$("#contactBtn").click(function() {
    contactUs();
});

$("#queryBtn").click(function() {
    contactUs()
});
