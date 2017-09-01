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

var dataSet = [
	[ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>MEAN Team</p>", "","","","","","",""],
	[ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>CodeBeast</p>", "","","","","","",""],
	[ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>Creative Dev</p>", "","","","","","",""],
	[ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>DevLogics</p>", "","","","","","",""],
	[ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>Diverse Dev Ops</p>", "Maciej Rozmarek", "Archit Kaushik", "Lawrence Catahay", "Toan Minh Hoang", "Alberto Magiba", "",""],
    [ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>Wild Cards</p>", "Luys Cedyllo", "Shaksham Kapoor", "Mary Chew", "Gomolemo Matsunyane", "Abhimanyue", "",""],
    [  "<img src='img/180-days.jpg' class='leader-img'/>", "<p>Coders United</p>", "Fayaz Muhammad", "Raphael Gako", "Mislav Mislav", "JeJe Tom", "Rishabh Rathore", "Dee Minturn", "Litonya Monique"],
    [  "<img src='img/180-days.jpg' class='leader-img'/>", "<p>JAVASK</p>", "Jenee Dana Ron", "Alice Clark", "Ephraim Mernilo", "Adrienne Ramage", "Kevin Santacruz", "Sandie Beach", "Judel Javier"],
    [  "<img src='img/180-days.jpg' class='leader-img'/>", "<p>HacknPull</p>", "Ritik Patni", "Ai Rui", "Easwari Venkatramani", "Cha Laurel", "Saitama", "","" ],
    ["<img src='img/180-days.jpg' class='leader-img'/>", "<p>Web Pros</p>", "Tayyab Ikhlaq", "Stel Dare", "Hamis Sultan", "member","", "","" ],
    [ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>WebDev Squad</p>", "Shock Shockley", "Maya Costa II", "Arthur Mack", "Oez Bar Grantig", "","", "" ],
    [ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>DigiSprouts</p>", "Lawrence beck", "Aditya Agarwai", "Naincy Saxena", "Christie Fox", "Shaun Hall", "Nathan Daniels", "" ],
    [ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>Game of Codes</p>", "James Henderson", "Joseph Chu", "Jack Perry", "Om Mohamad", "Mickey MN", "Shuaib Abdul Ghaffar", "Anuradha Mehrotra" ],
    [ "<img src='img/180-days.jpg' class='leader-img'/>", "<p>Evolve-Code</p>", "Stephan Schlitz", "Erik Son Cas", "","", "","",""]
   
];
 
$(document).ready(function() {
	
    $('#example').DataTable( {
		responsive: true,
        data: dataSet,
        columns: [
            { title: "img" },
            { title: "Team" },
            { title: "member" },
            { title: "member" },
            { title: "member" },
			{ title: "member" },
            { title: "member" },
			{ title: "member" },
            { title: "member" }
        ]
    } );
	
} );
