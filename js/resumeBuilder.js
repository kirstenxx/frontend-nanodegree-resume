var data = "%data%";

var formattedName = HTMLheaderName.replace(data, "Kirsten Berg");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace(data, "Web Developer");
$("#header").append(formattedRole);

var bio = {
  "name": "Kirsten Berg",
  "role": "Web Developer",
  "contacts": {
    "mobile": "5743359398",
    "email": "kirsten.berg@me.com",
    "twitter": "@kirstenlives",
    "github": "https://github.com/kirstenxx",
    "blog": "www.kirstenberg.us",
    "location": "Indianapolis", },
  "biopic": "images/me.jpg",
  "welcome": "test test test",
  "skills": ["HTML", "CSS", "JavaScript", "JQuery", "Adobe Suite"],
};
var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcome);
var formattedSkills = HTMLskills.replace(data, bio.skills);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedBlog);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace(data, bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace(data, bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace(data, bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace(data, bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace(data, bio.skills[4]);
$("#skills").append(formattedSkill);
}

var work = {
  "start" : "Oct 2010",
  "employer" : "Apple",
  "title" : "Genius Admin",
  "location" : "Indianapolis",
  "description" : "fill in a job thing"
};
var formattedWorkStart = HTMLworkStart.replace(data, work.start);
var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.employer);
var formattedWorkTitle = HTMLworkTitle.replace(data, work.title);
var formattedWorkLocation = HTMLworkLocation.replace(data, work.location);
var formattedWorkDescription = HTMLworkDescription.replace(data, work.description);
$("#workExperience").append(formattedWorkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);

var education = {
  "schools" : [
    {
      "name" : "Ball State University",
      "degree" : "Bachelors",
      "dates" : "Aug 2011 Jan 2016",
      "location" : "Muncie, IN",
      "major" : "General Studies"
    },
    {
      "name" : "Ball State University",
      "degree" : "Bachelors",
      "dates" : "Aug 2011 Jan 2016",
      "location" : "Muncie, IN",
      "major" : "General Studies"
    }
] "display" : ""
};
education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formatted
  };
)};
