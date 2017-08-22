$(function(){
  $("#home-button").on({
   mouseenter: function(){
    $(this).attr('src','http://www.clker.com/cliparts/d/3/R/P/q/e/hot-pink-home-icon-md.png');
  },
  mouseleave: function(){
    $(this).attr('src','http://openclipart.org/image/800px/svg_to_png/17103/claudita_home_icon.png');
  }
  });
  
});
/*$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

var teams =["Wildcards","The Coders United","JAVASK","Web Pros"];

var table = document.createElement('table');
document.getElementById('container').appendChild(table);
for (row = 0; row < teams.length; row++) {
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (cell = 0; cell < 5; cell++) {
        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = "text";
    }
}*/

  