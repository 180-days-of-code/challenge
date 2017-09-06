$(function() {
    $("#home-button").on({
        mouseenter: function() {
            $(this).attr('src', 'http://www.clker.com/cliparts/d/3/R/P/q/e/hot-pink-home-icon-md.png');
        },
        mouseleave: function() {
            $(this).attr('src', 'http://openclipart.org/image/800px/svg_to_png/17103/claudita_home_icon.png');
        }
    });

});

function getQuote() {
    var cb = Math.round(new Date().getTime() / 1000);
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function(a) {
        console.log(a);
        var currentQuote = a[0].content;
        var quoteAuthor = a[0].title;
        console.log(currentQuote, quoteAuthor);
        $('.quote').html(currentQuote);
        $('.quote-author').html("-" + quoteAuthor);
    });
}
getQuote();