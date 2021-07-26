$(".show").hide();

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
    }, 200);
});

$("#homeBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 200);
});

function contactUs(){
    $('html, body').animate({
        scrollTop: $("#contactGForm").offset().top
    }, 200);
}

$("#contactBtn").click(function() {
    contactUs();
});

$("#queryBtn").click(function() {
    contactUs()
});