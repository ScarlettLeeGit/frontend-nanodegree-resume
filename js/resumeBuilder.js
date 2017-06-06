/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Scarlett LEE",
	"role" : "Software Developer Engineer",
	"contacts" : {
		"mobile": "010-1234-5678",
		"email": "scarlett.lee.git@gmail.com",
		"github" : "scarlett",
		"location" : "korea"
	},
	"biopic" : "images/wonder.jpg",
	"welcomeMessage" : "Nice to meet you",
	"skills" : ["awesomeness", "programming", "teaching", "js"],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedName, formattedRole);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGit, formattedLoc);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedLoc);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedPic);

		if(bio.skills.length>0){
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
	}
};

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ],
  "display" : function(){
  	for(job in work.jobs){
  		$("#workExperience").append(HTMLworkStart);

  		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  		var formattedEmployerTitle = formattedEmployer + formattedTitle; 
  		$(".work-entry:last").append(formattedEmployerTitle);

  		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  		$(".work-entry:last").append(formattedDate);

  		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  		$(".work-entry:last").append(formattedDescription);
  	}
  }
};

var education = {
	"schools" : [
		{
			"name" : "Ewha",
			"location" : "Seoul",
			"degree" : "BA",
			"dates" : "2013 -2017",
			"url" : "ewha.ac.kr",
			"majors" : "CS"
		}
	],
	"display" : function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName+formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLoc);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "resume",
			"dates" : "present",
			"description" : "making resume",
			"images" : "images/197x148.gif"
		},
		{
			"title" : "todolist",
			"dates" : "future",
			"description" : "making to do list",
			"images" : "images/197x148.gif"
		}
	],
	"display" : function(){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description); 
			$(".project-entry:last").append(formattedDescription);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

bio.display();
projects.display();
work.display();
education.display();

function locationizer(work_obj){
	var arrLoc=[];
	for(job in work_obj.jobs){
		arrLoc.push(work_obj.jobs[job].location);
	}
	return arrLoc;
}
//console.log(locationizer(work));

//$("#main").append(internationalizeButton);
function inName(name){
	var arr=name.split(" ");
	arr[1]=arr[1].toUpperCase();
	arr[0]=arr[0].slice(0,1).toUpperCase()+arr[0].slice(1).toLowerCase();
	
	var internationalizedName = arr.join(" ");
	return internationalizedName;
}
//console.log(inName("Scarlett lee"));

$("#mapDiv").append(googleMap);

