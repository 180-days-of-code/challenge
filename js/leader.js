

//leader board tables data//
var current = '<a href="#"><p>portfolio</p></a>';
var next = '<a href="https://www.facebook.com/groups/1889829428005992/permalink/1894852707503664/"><p>week 2</p></a>';
var greatJob = '<p class="success">Great job! 100%</p>';
var dataSet = [
	[ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>MEAN Team</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>CodeBeast</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>Creative Dev</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>DevLogics</p>", current, next, greatJob],
	[ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>Diverse Dev Ops</p>", current, next, greatJob],
    [ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>Wild Cards</p>", current, next, greatJob],
    [  "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>Coders United</p>", current, next, greatJob],
    [  "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>JAVASK</p>", current, next, greatJob],
    [  "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>HacknPull</p>", current, next, greatJob ],
    ["<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>Web Pros</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>WebDev Squad</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle'/>", "<p>DigiSprouts</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle '/>", "<p>Game of Codes</p>", current, next, greatJob ],
    [ "<img src='img/180-days.jpg' class='leader-img circle'/>", "<p>Evolve-Code</p>", current, next, greatJob ]
   
];
 
$(document).ready(function() {
	
    $('#example').DataTable( {
		responsive: true,
        data: dataSet,
        columns: [
            { title: "logo" },
            { title: "Team" },
            { title: "Current project" },
            { title: "Next project" },
            { title: "Status" }
        ]
    } );
	
} );
