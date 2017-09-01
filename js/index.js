$(".button-collapse").sideNav();
$(".dropdown-button").dropdown();
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