$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();
// Project Page
$("#all").click(function() {
    $(".inspirationsCards").children("div").each(function() {
        $(this).css("display", "");
    });
});
$("#portfolio").click(function() {
    $(".inspirationsCards").children("div").each(function() {
        if ($(this).hasClass("portfolio")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#tribute").click(function() {
    $(".inspirationsCards").children("div").each(function() {
        if ($(this).hasClass("tribute")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#twitch").click(function() {
    $(".inspirationsCards").children("div").each(function() {
        if ($(this).hasClass("twitch")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
// Learning Page
$("#all-learning").click(function() {
    $(".learning-links").children("ul").each(function() {
        $(this).css("display", "");
    });
});
$("#html").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("html")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#css").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("css")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#js").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("js")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#UI-UX").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("UI/UX")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#tools").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("tools")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#css-frameworks").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("css-frameworks")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});
$("#icons").click(function() {
    $(".learning-links").children("ul").each(function() {
        if ($(this).hasClass("icons")) {
            $(this).css("display", "");
        } else {
            $(this).css("display", "none");
        }
    });
});

$('#textarea1').trigger('autoresize');
$('.carousel.carousel-slider').carousel({ fullWidth: true });
$(document).ready(function() {
    $('.slider').slider();
});