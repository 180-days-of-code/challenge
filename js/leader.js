//home button//
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


//leader board tables data//
var current = '<a href="#"><p>portfolio</p></a>';
var next = '<a href="https://www.facebook.com/groups/1889829428005992/permalink/1894852707503664/"><p>week 2</p></a>';
var greatJob = '<p class="success">Great job! 100%</p>';
var dataSet = [
	[ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>MEAN Team</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>CodeBeast</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Creative Dev</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>DevLogics</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Diverse Dev Ops</p>", current, next, greatJob],
    [ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Wild Cards</p>", current, next, greatJob],
    [  "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Coders United</p>", current, next, greatJob],
    [  "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>JAVASK</p>", current, next, greatJob],
    [  "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>HacknPull</p>", current, next, greatJob ],
    ["<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Web Pros</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>WebDev Squad</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>DigiSprouts</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Game of Codes</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle responsive-img'/>", "<p>Evolve-Code</p>", current, next, greatJob ]
   
];
 
$(document).ready(function() {
	
    $('#example').DataTable( {
		responsive: true,
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Team" },
            { title: "Current project" },
            { title: "Next project" },
            { title: "Status" }
        ]
    } );
	
} );
