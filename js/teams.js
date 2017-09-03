//home button//
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
//leader board tables data//
var dataSet = [
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>MEAN Team</p>", "", "", "", "", "", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>CodeBeast</p>", "", "", "", "", "", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Creative Dev</p>", "", "", "", "", "", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>DevLogics</p>", "", "", "", "", "", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Diverse Dev Ops</p>", "Maciej Rozmarek", "Archit Kaushik", "Lawrence Catahay", "Toan Minh Hoang", "Alberto Magiba", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Wild Cards</p>", "Luys Cedyllo", "Shaksham Kapoor", "Mary Chew", "Gomolemo Matsunyane", "Abhimanyue", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Coders United</p>", "Fayaz Muhammad", "Raphael Gako", "Mislav Mislav", "JeJe Tom", "Rishabh Rathore", "Dee Minturn", "Litonya Monique"],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>JAVASK</p>", "Jenee Dana Ron", "Alice Clark", "Ephraim Mernilo", "Adrienne Ramage", "Kevin Santacruz", "Sandie Beach", "Judel Javier"],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>HacknPull</p>", "Ritik Patni", "Ai Rui", "Easwari Venkatramani", "Cha Laurel", "Saitama", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Web Pros</p>", "Tayyab Ikhlaq", "Stel Dare", "Hamis Sultan", "member", "", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>WebDev Squad</p>", "Shock Shockley", "Maya Costa II", "Arthur Mack", "Oez Bar Grantig", "", "", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>DigiSprouts</p>", "Lawrence beck", "Aditya Agarwai", "Naincy Saxena", "Christie Fox", "Shaun Hall", "Nathan Daniels", ""],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Game of Codes</p>", "James Henderson", "Joseph Chu", "Jack Perry", "Om Mohamad", "Mickey MN", "Shuaib Abdul Ghaffar", "Anuradha Mehrotra"],
    ["<img src='images/180-days.jpg' class='leader-img circle'/>", "<p>Evolve-Code</p>", "Stephan Schlitz", "Erik Son Cas", "", "", "", "", ""]
];
$(document).ready(function() {
    $('#example').DataTable({
        responsive: true,
        data: dataSet,
        columns: [
            { title: "logo" },
            { title: "Team" },
            { title: "member" },
            { title: "member" },
            { title: "member" },
            { title: "member" },
            { title: "member" },
            { title: "member" },
            { title: "member" }
        ]
    });
});