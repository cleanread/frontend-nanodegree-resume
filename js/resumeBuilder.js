var awesomeThoughts = "I am Dale and I'm ok!";
var funThoughts = awesomeThoughts.replace("ok", "FUN");
//console.log(firstName);


var slicedThoughts = awesomeThoughts.slice(0,10);

var skillsArray = ["crushing it", "owning"];
//var slicedThoughts = awesomeThoughts;

var bio = {
	"name": "Dale Crane",
	"role": "Scrum Master",
	"contactInfo": {
		"email": "pleb@mmmkay.com",
		"phone": "007-373-5963"
	},
	"picture": "images/fry.jpg",
	"welcome": "I'm here for the scrumming!",
	"skills": skillsArray
};

var work = {};
work.job = "peon";
work.employer = "Globocorp";
work.dates = "1934-1988";
work.city = "Burlington";

var education = {};
education["name"] = "LoboTech";
education["dates"] = "1933-1934";
education["city"] = "Deep Burlington";


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);





$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedPicture);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(work["job"]);
$("#main").append(education.name);
