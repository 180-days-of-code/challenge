$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

var teams =["Wildcards","The Coders United","JAVASK","Web Pros"];

var table = document.createElement('table');
document.getElementById('container').appendChild(table);
for (row = 0; row < 5; row++) {
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (cell = 0; cell < 5; cell++) {
        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = "text";
    }
}

	
	