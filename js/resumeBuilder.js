
/* ********************* */
/* ******* MODEL ******* */
/* ********************* */


class School {
	constructor(name, location, degree, majors, dates, url) {
		this.name = name;
		this.location = location;
		this.degree = degree;
		this.majors = majors;
		this.dates = dates;
	};
};

class Course {
	constructor(title, school, dates, url) {
		this.title = title;
		this.school = school;
		this.dates = dates;
		this.url = url;
	};
};

class Job {
	constructor(employer, title, location, dates, description) {
		this.employer = employer;
		this.title = title;
		this.location = location;
		this.dates = dates;
		this.description = description;
	};
};

class Project {
	constructor(title, dates, description, images) {
		this.title = title;
		this.dates = dates;
		this.description = description;
		this.images = images;
	};
};


let bio = {
		name: "John Doe",
		role: "Frontend Developer",
		contacts: {
			mobile: "999-888-7777",
			email: "john.doe@gmail.com",
			github: "github.com/jdoe/xxx.git",
			location: "633 Dundee Ave., Elgin, IL"
		},
		welcomeMessage: "Gruss Gott!",
		skills: ["Web Development", "Application & Data Design", "System Integration", "Database Administration", "System Administration", "Legacy Modernizations", "Data Conversions", "Programming Languages"],
		biopic: "images/einstein_400x400.jpg",
		display: function() {
			console.log("Name: " + this.name + "  " + "Role: " + this.role + "\n" +
						"Mobile: " + this.contacts.mobile + "  " + "Email: " + this.contacts.email + "\n" +
						"Github: " + this.contacts.github + "  " + "Loc: " + this.contacts.location + "\n" +
						"Message: " + this.welcomeMessage + "\n" +
						"Skills: " + this.skills + "\n" +
						"Biopic: " + this.biopic
					   )
		}
	};


let education = {
		schools: [new School("Purdue University",
							 "W. Lafayette, IN",
							 "M.S.",
							 ["Math", "Physics", "Computer Science"],
							 "9/1/1966-6/5/1971"
				  ),
				  new School("Indiana Purdue - Indianapolis",
				  			 "Indianapolis, IN",
				  			 "Ph.D.",
				  			 ["Computer Science"],
				  			 "9/1/1979-6/6/1984"
				  )
		],
		onlineCourses: [new Course("Programming Languages",
								   "Purdue University",
								   "9/1/1967-1/15/1968",
								   "https://www.purdue.edu/CS/205"
						),
						new Course("Operating Systems",
								   "Purdue University",
								   "2/1/1968-6/4/1968",
								   "https://www.purdue.edu/CS/352"
						),
						new Course("Frontend Programming",
								   "Udacity",
								   "1/23/2018-7/23/2018",
								   "https://www.udacity.com"
						)
		],

		display: function() {

		}
	};


let work = {
	jobs: [new Job("US Army",
				   "Captain",
				   "Regensburg, Germany",
				   "1/6/1971-12/21/1974",
				   "HAWK Missile Site Commander"
		   ),
		   new Job("Udacity",
				   "Frontend Developer",
				   "Mountain View, CA",
				   "8/1/2018-",
				   "Develops Udacity website"
		   )
	],

	display: function() {

	}
};


let projects = {
	p: [new Project("Hospital Registration System",
				 	"2/1/1981-10/23/1985",
				 	"Designed & developed hospital information system",
				 	["images/community hospital east.jpg"]
				   ),
	 	new Project("VGH Massive Data Conversion",
				 	"1/2/2001-3/21/2002",
				 	"Converted hospital's entire database",
				 	["images/VGH1-360x243.jpg"]
			       )
	]
};



/* ********************* */
/* ******* VIEW ******** */
/* ********************* */


let bioView = {

	init: function() {
		this.display();
	},

	display: function() {
		for (let property of Object.keys(bio)) {
			if (bio.hasOwnProperty(property)) {
				switch (property) {
					case "name":
						$('#header').prepend(HTMLheaderName.replace("%data%", bio['name']) +
												  HTMLheaderRole.replace("%data%", bio['role'])
												 );
						break;
					case "contacts":
						$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts['mobile']));
						$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts['email']));
						$('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts['github']));
						$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts['location']));
						$('#footerContacts').append(HTMLmobile.replace("%data%", bio.contacts['mobile']));
						$('#footerContacts').append(HTMLemail.replace("%data%", bio.contacts['email']));
						$('#footerContacts').append(HTMLgithub.replace("%data%", bio.contacts['github']));
						$('#footerContacts').append(HTMLlocation.replace("%data%", bio.contacts['location']));
						break;
					case "biopic":
						let skills = "";
						for (let i=0; i<Math.min(bio.skills.length, 7); i++) {
							skills += HTMLskills.replace("%data%", bio.skills[i]);
						};
						$('#header').append(HTMLbioPic.replace("%data%", bio[property]) +
											HTMLwelcomeMsg.replace("%data%", bio['welcomeMessage']) +
											HTMLskillsStart +
											skills
										   );
						break;
					case "role":
					case "welcomeMessage":
					case "skills":
					case "display":
						break;
					default:
						alert("*** invalid bio property in switch ***");
				};
			};
		};
	}
};


let workView = {

	init: function() {
		this.display();
	},

	display: function() {
		$('#workExperience').append(HTMLworkStart);
		for (let property of Object.keys(work)) {
			switch (property) {
				case "jobs":
					for (let i=0; i<work.jobs.length; i++) {
						for (let jobProp of Object.keys(work.jobs[i])) {
							switch (jobProp) {
								case "employer":
									$('.work-entry').append(HTMLworkEmployer.replace("%data%", work.jobs[i][jobProp]) +
															HTMLworkTitle.replace("%data%", work.jobs[i]['title'])
														   );
									break;
								case "title":
//									$('.work-entry').append(HTMLworkTitle.replace("%data%", work.jobs[i][jobProp]));
									break;
								case "dates":
									$('.work-entry').append(HTMLworkDates.replace("%data%", work.jobs[i][jobProp]));
									break;
								case "location":
									$('.work-entry').append(HTMLworkLocation.replace("%data%", work.jobs[i][jobProp]));
									break;
								case "description":
									$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i][jobProp]));
									break;
								case "display":
									break;
								default:
									alert("*** invalid job property in switch ***");
							};
						};
					};
					break;
				case "display":
					break;
				default:
					alert("*** invalid work property in switch ***");
			};
		};
	}
};


let projectsView = {

	init: function() {
		this.display();
	},

	display: function() {
		$('#projects').append(HTMLprojectStart);
		projects.p.forEach(function(proj) {
			$('.project-entry').append(HTMLprojectTitle.replace("%data%", proj['title']));
			$('.project-entry').append(HTMLprojectDates.replace("%data%", proj['dates']));
			$('.project-entry').append(HTMLprojectDescription.replace("%data%", proj['description']));
			for (let j=0; j<proj['images'].length; j++) {
				$('.project-entry').append(HTMLprojectImage.replace("%data%", proj['images'][j]));
			};
		});
	}
};


let educationView = {

	init: function() {
		this.display();
	},

	display: function() {
		$('#education').append(HTMLschoolStart);
		for (let edProp of Object.keys(education)) {
			switch (edProp) {
				case "schools":
					for (let i=0; i<education.schools.length; i++) {
						for (let schlProp of Object.keys(education.schools[i])) {
							switch (schlProp) {
								case "name":
									$('.education-entry').append("<br>" + HTMLschoolName.replace("%data%", education.schools[i]['name']) +
																 HTMLschoolDegree.replace("%data%", education.schools[i]['degree'])
																);
									break;
								case "degree":
//									$('.education-entry').append(HTMLschoolDegree.replace("%data%", education.schools[i]['degree']));
									break;
								case  "dates":
	//								$('.education-entry').append(HTMLschoolDates.replace("%data%", education.schools[i]['dates']));
									break;
								case "location":
	//								$('.education-entry').append(HTMLschoolLocation.replace("%data%", education.schools[i]['location']));
									break;
								case "majors":
									let majors = "";
									for (let j=0; j<Math.min(education.schools[i].majors.length, 3); j++) {
										majors += (j===0 ? HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]) :
														   HTMLschoolMajor2.replace("%data%", education.schools[i].majors[j]));
									};
									$('.education-entry').append(
																 HTMLschoolDates.replace("%data%", education.schools[i]['dates']) +
																 HTMLschoolLocation.replace("%data%", education.schools[i]['location']) +
																 majors
																);
									break;
								case "display":
									break;
								default:
									alert('*** invalid school property ' + schlProp + ' in switch ***');
							};
						};
					};
					break;
				case "onlineCourses":
					$('.education-entry').append(HTMLonlineClasses);
					for (let i=0; i<education.onlineCourses.length; i++) {
						for (let prop of Object.keys(education.onlineCourses[i])) {
							switch (prop) {
								case "title":
									$('.education-entry').append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) +
																 HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school)
																);
									break;
								case "school":
//									$('.education-entry').append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
									break;
								case "dates":
									$('.education-entry').append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
									break;
								case "url":
									$('.education-entry').append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
									break;
								case "display":
									break;
								default:
									alert('*** invalid onlineCourses property in switch case ***');
							};
						};
					};
				case "display":
					break;
				default:
					alert('*** invalid education property in switch case ***');
			};
		};
	}
};


let mapView = {

	init: function() {
		this.display();
	},

	display: function() {
		$('#mapDiv').append(googleMap);
	}
};



/* ************************ */
/* ******* OCTOPUS ******** */
/* ************************ */


let octopus = {

	init: function() {

		bioView.init();
		workView.init();
		projectsView.init();
		educationView.init();
		mapView.init();
	}
};

octopus.init();