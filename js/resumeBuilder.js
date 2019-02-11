var awesomeThoughts = "I am Dale and I'm ok!";
//var age = 40;
//var funThoughts = awesomeThoughts.replace("ok", "FUN");
//console.log(firstName);

var formattedName = HTMLheaderName.replace("%data%", "Dale Crane");
var formattedRole = HTMLheaderRole.replace("%data%", "Scrum Master");

//var slicedThoughts = awesomeThoughts.slice(-1,0);

var slicedThoughts = awesomeThoughts;

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(slicedThoughts);
