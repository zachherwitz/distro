# NOTES

Collections:

Projects Collection (CentralHubs, each show would have its own that you could customize)
- Unique Project Key/ID (this would correspond to a property in the User Document)


User Collection (Each person who creates an account and signs in has features to their project hubs)

In each User Document:
- role ( = isAdmin grants project wide features, and is the only way you can write data)
- Name
- Phone Number
- Email Address
- Department
- Distro Lists
- ProjectID (Links to Projects Collection)



Tech Stack

	MERN
		MongoDB
		Express
		React
		NodeJS

New Technologies

	Essential:
		CSVtoJSON
		PDFKit
		React Router
		(context api)

	NonEssential But I Still Wanna Learn:
		EmailJS
		React Bootstrap
		React Spinner


MVP Features:

	Project Based Team/User Hub
		-Home base for the project - each core staff member can log in to their project and check daily 			call sheet (set by admin) — Think Doctor/Patient Portal

	Easy to manage distribution
		-Create/Merge/Duplicate/Delete/Update
		-Set permissions/confidentiality
		-Create Email Templates/Attach Files (EmailJS - $4/mo — not essential)
		-Easy CSV contacts import (csvtojson)
			-

	Digital Call Sheet Creation
		-super user friendly, no more messing around with templates, excel spreadsheets, and clipart drag and drop/pull 			names from a distribution list
		-You can send to your ‘team’, or you can send in a pdf via email (PDFKit)
		-If user is in database and has an account set up, they will be pinged with their call time

Stretch Features:

	Mobile Forward Design! Everyone has their phone on a set, they can easily check the site

	Location Integration with Google Maps
		You can tag a location via Google Maps and send it along with a call sheet, tech scout itinerary, set plans, or any 		other document within the site environment (maybe print a screenshot of the map area for an email)


Weather component based on call sheet/shoot day






DIGITAL CALLSHEET

It doesn’t need to be paper copy anymore
Especially with COVID





### 7/11

Three Databases:

PROJECTS
CREW
CALLSHEET


The PROJECTS database will have the schema:

```
{
	projectName: String,
	projectID: Number (unique),
	projectLead: {
		name: String,
		projectID: Number,
		department: String,
		distros: array[String],
		email: String,
		phone: String,
		userState: "Admin"
	}
}
```

Upon creating a new project, you create a new document in the PROJECTS database with a name and unique ID. You ALSO create a new CREW MEMBER that has an Admin userState (this is the only person allowed to write data in the app)

The CREW database will have the schema:

```
{
	name: String,
	projectID: Number,
	department: String,
	distros: array[String],
	email: String,
	phone: String,
	userState: "User",
	callsheet: {
		calltime: String,
		location: String
	}
}
```

Upon creating a new CREW member, you create a new document in the CREW database with:
- a name
- a projectID that references the PROJECTS database
- a department
- an array of distro groups
- an email and phone number
- a default userState of 'User'
- an empty callsheet object that will be updated with information

The CALLSHEET database will have the schema:

```
{
	projectID: Number,
	isCurrent: Boolean,
	date: Number,
	generalCall: String,
	generalLocation: String,
	nearestHospital: String,
	crewCallsheet: [
		{
			name: String,
			projectID: Number,
			calltime: String
			location: String
		}
	]
}
```

The admin can create a new CALLSHEET that will add a new document in the CALLSHEET database. Upon creating a new Callsheet:
- a projectID that references the PROJECTS database
- the isCurrent value is automatically set as 'True', and all other callsheets in the database are set to 'False'. (This allows for a record of past callsheets, but only passing through the current sheets' info).
- current date
- general call time for crew members included in the distro, but without specific call times
- general location for crew members included, but not specified
- nearest hospital address

In addition, the CALLSHEET view will be a form, containing inputs for any crew members you specify. By specificing crew members by name (or by distro group), you push their individual information (name, projectID, calltime, location) to the CALLSHEET's crewCallsheet object array, giving you an array of individual callsheet objects.

Upon submit, you can map over this array, using the name and unique ProjectID to find the document, and then passing the location and calltime to each individual CREW document specified.  

Finally, when a user logs in (probably need a fourth database here for logins/passwords - but not going to worry about that yet) they will be able to see both the general crew call sheet info displayed, as well as their own specific info.

In this view, I could then make API calls to weather and google maps apps to get specific info pertaining to that call sheets day/location
