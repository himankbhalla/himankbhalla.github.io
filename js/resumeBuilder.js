
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "Clickgarage.in",
			"title": "Front-End Web Developer",
			"location": "Green park, New Delhi",
			"dates": "June 2016",
			"description": "Creation of checkout Forms, mobile website development, bugs removal and all frontend related things."
		},
		{
			"employer": "USICT , GGSIPU",
			"title": "Front-End Web Developer",
			"location": "Dwarka, New Delhi",
			"dates": "March ,2015",
			"description": "Revamped the previous Indraprastha University Website to the current. With an emphasis on making it mobile friendly (responsive) and new design. Used html5 , css3 , javascript , jquery and bootsrap for designing the frontend and making it mobile-friendly."
		}

	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		
		{
			"title": "MVP Truckit",
			"date worked": "Jan, 2015",
			"description": "My first django project. created a MVP for a startup uses google's map Api , Enables to order trucks for movement",
			
			"github": "https://github.com/hbhalla123/truckit",
			"demo": "http://139.59.3.4:8001/home",
			"progress": 100
		},
		{
			"title": "IPU Official Website",
			"date worked": "March, 2015",
			"description": "I redesigned and created the front-end of the  Guru Gobind Singh Indraprastha University website. The previous site  was static and in html4 ",
			
			"demo": "http://ipu.ac.in/",
			"progress": 100
		},
		{
			"title": "Canvas Game",
			"date worked": "Nov, 2015",
			"description": "Classic HTML5 Canvas API game built using javascript.",
			
			"github": "https://github.com/hbhalla123/hbhalla123.github.io/tree/master/game",
			"demo": "https://hbhalla123.github.io/game/bricks.html",
			"progress": 100
		},
		
		{
			"title": "Short stories",
			"date worked": "Oct, 2015 - Dec, 2015",
			"description": "My first microbloging project. Post your stories short and concised in 200 cahracters!",
			
			"github": "https://github.com/lei-clearsky/search-recipes-app",
			"demo": "http://www.shtory.in",
			"progress": 100
		},
		{
			"title": "ICCTICT 2016 ",
			"date worked": "Feb, 2016",
			"description": "Designed the international conference of information  and communication technology website using Ember ",
			
			"github": "https://github.com/hbhalla123/icctict16.github.io",
			"demo": "http://ipu.ac.in/usict/icctict/icctict.html",
			"progress": 100
		},
		
		{
			"title": "Foodchaps",
			"date worked": "Jan, 2016 - April, 2016",
			"description": "A Social network based on food.Upload your food photos and explore whats worth trying the town and lot more.",
			
			"github": "https://github.com/hbhalla123/food",
			"progress": 100,
              "demo":"http://www.foodchaps.com"
		},
		
		
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Himank",
	"last name": "Bhalla",
	"role": "Full stack Web Developer",
	"welcome message": "I'm passionate about web design and web development, and learn about the same.I prefer Django with python for backend  and for frontend -Anything that suits the requirement of  project, I love making data driven web apps.Feel free to check out my Github repositories and demo projects.",
	"bio pic": "https://lh3.googleusercontent.com/-SBN15tcmbC8/UkCdJGCGHOI/AAAAAAAAAVE/Gjs_4zrqmfY/w140-h140-p/LeiZ.JPG",
	"contacts": 
		{
			"email": "hbhalla95@gmail.com",
			"github username": "hbhalla123",
			"location": "New Delhi"
		},
	"skills": ["HTML5", "CSS3", "Javascript", "JQuery", "Ember", "Django", "Python", "Bootstrap","C++","Materialize","Canvas","Git"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "USICT GGSIPU",
			"location": "Dwarka, New Delhi ",
			"majors": ["Btech-IT"],
			"dates": "August 2017",
			"url": "http://ipu.ac.in"
		},
		{
			"name": "St Cecilia's Public School",
			"location": "Vikaspuri, New Delhi",
			"degree": "",
			"majors": [],
			"dates": "May 2013",
			"url": "http://www.cecilia.in"
		}
	],

};
//hobbies json
var hobbies={
            "act1":"Web development.",
            "act2":"Reading about new technology , mobile phones , gadgets.",
            "act3":"Listening to music.",
            "act4":"Playing Guitar.",
            "act5":"playing cricket , table tennis , volley ball, PC games.",
            "act6":"Exploring new Apps.",
            "act7":"Exploring food joints , trying different cuisines.",
            "act8":"Watching movies and tv series.",
            "act9":"Web surfing",
            "act10":"Learn new technologies",
};
hobbies.display = function(){
    
//var formattedAct1 = HTMLact1.replace("%data%", hobbies["act1"]);

	$("#hobbies ul").prepend("<li>" + hobbies["act1"]  + "</li>");
	$("#hobbies ul").prepend("<li>" + hobbies["act2"]  + "</li>");
	$("#hobbies ul").prepend("<li>" + hobbies["act3"]  + "</li>");	
	$("#hobbies ul").prepend("<li>" + hobbies["act4"]  + "</li>");
    	$("#hobbies ul").prepend("<li>" + hobbies["act5"]  + "</li>");
	$("#hobbies ul").prepend("<li>" + hobbies["act6"]  + "</li>");
	$("#hobbies ul").prepend("<li>" + hobbies["act7"]  + "</li>");
	$("#hobbies ul").prepend("<li>" + hobbies["act8"]  + "</li>");
    	$("#hobbies ul").prepend("<li>" + hobbies["act9"]  + "</li>");
	$("#hobbies ul").prepend("<li>" + hobbies["act10"]  + "</li>");


}

// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
//	$("#education").append(HTMLonlineClasses);
	// Display online courses
//	for (var onlineCourse in education.onlineCourses){	
//		var num = education.schools.length + parseInt(onlineCourse);
//		$("#education").append(HTMLschoolStart);
//		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
//									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
//									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
//									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
//}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML5",
    labelcolor: "red"
  },
  {
    value: 9,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS3",
    labelcolor: "orange"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 8,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Jquery",
    labelcolor: "yellow"
  },
  {
    value: 9,
    color: "#2ecc71",
    highlight: "#A8B3C5",
    label: "Bootstrap",
    labelcolor: "parrot-green"
  },
    
     {
    value: 7,
    color: "#34495e",
    highlight: "#A8B3C5",
    label: "Django",
    labelcolor: "dark-grey"
  },
     {
    value: 6,
    color: "#e67e22",
    highlight: "#FFC870",
    label: "Canvas",
    labelcolor: "canvas-orange"
  },
     {
    value: 7,
    color: "#f1c40f",
    highlight: "#f39c12",
    label: "Python",
    labelcolor: "lemon"
  },
     {
    value: 7,
    color: "#9b59b6",
    highlight: "#A8B3C5",
    label: "C++",
    labelcolor: "purple"
  },
     {
    value: 9,
    color: "#c0392b",
    highlight: "#e74c3c",
    label: "Materialize",
    labelcolor: "maroon"
  },
  {
    value: 7,
    color: "#3498db",
    highlight: "#2980b9",
    label: "Git",
    labelcolor: "bluesky"
  },
  {
    value: 5,
    color: "#4D5360",
    highlight: "#616774",
    label: "Less",
    labelcolor: "black"
  },
    {
    value: 5,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Ember",
    labelcolor: "light-grey"
  },

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
hobbies.display();
projects.display();
education.display();






