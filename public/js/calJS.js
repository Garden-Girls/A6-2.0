const date = new Date(); //today's date

function renderCal() {
	const months = ["January", "February", "March", "April", "May", "June", 
				"July", "August", "September", "October", "November", "December"];

	//maybe change to jQuery
	document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();
	document.querySelector(".date p").innerHTML = new Date().toDateString();

	document.querySelector('.days').innerHTML = "";

	//adds days of prev month
	const monthDays = document.createDocumentFragment();
	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
	date.setDate(1);
	const firstDayIndex = date.getDay();
	//changed newDiv from div to a, update names later
	for (var i = firstDayIndex; i > 0; i--) {
		var newDiv = document.createElement('a');
		newDiv.innerHTML = prevLastDay - i + 1;
		newDiv.className = 'prev-date';
		if (date.getFullYear() < new Date().getFullYear()) {
			newDiv.className = 'loggable';
		}
		else if (date.getFullYear() == new Date().getFullYear() &&
			date.getMonth() <= new Date().getMonth()) {
			newDiv.className = 'loggable';
		}
		monthDays.appendChild(newDiv);
	}

	//adds days of this month
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	for (var i = 1; i <= lastDay; i++) {
		var newDiv = document.createElement('a');
		if (date.getFullYear() < new Date().getFullYear()) {
			newDiv.className = 'loggable';
		}
		if (date.getFullYear() == new Date().getFullYear() && 
			date.getMonth() < new Date().getMonth()) {
			newDiv.className = 'loggable';
		}
		if (date.getFullYear() == new Date().getFullYear() && 
			date.getMonth() == new Date().getMonth() && 
			i <= new Date().getDate()) {
			newDiv.className = 'loggable';
		}
		if (i == new Date().getDate() && date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear()) {
			newDiv.className += ' today';
		}
		newDiv.innerHTML = i;
		monthDays.appendChild(newDiv);
	}

	//adds days of next month
	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
	const nextDays = 7 - lastDayIndex - 1;

	for (var i = 1; i <= nextDays; i++) {
		var newDiv = document.createElement('a');
		newDiv.innerHTML = i;
		newDiv.className = 'next-date';
		if (date.getFullYear() < new Date().getFullYear()) {
			newDiv.className = 'loggable';
		}
		if (date.getFullYear() == new Date().getFullYear() && date.getMonth() < new Date().getMonth()) {
			newDiv.className = 'loggable';
		}
		monthDays.appendChild(newDiv);
	}

	document.querySelector('.days').appendChild(monthDays);

	//document.getElementsByClassName('loggable')

	var calendarDays = document.querySelector('#calendarDays');
	var hasLink = calendarDays.getElementsByClassName("loggable");
	var i;
	for (i = 0; i < hasLink.length; i++) {
		hasLink[i].setAttribute("href", "dayEntry"); //placeholder, change to journal entry
	}
	//!!! since journal entry may not exist and href may not be valid, maybe change loggable class to only those 
	//with an added entry

	//!!! atm, loggable class is applied incorrectly
}

renderCal();

document.querySelector('#prevMon').addEventListener('click', function() {
	date.setMonth(date.getMonth() - 1);
	renderCal();
});

document.querySelector('#nextMon').addEventListener('click', function() {
	date.setMonth(date.getMonth() + 1);
	renderCal();
});

//Basic calendar stuff ^
//journaling 
var selectedPlant = document.querySelector('#plantDrop').value;
console.log(selectedPlant); //move into render calendar

document.querySelector('#plantDrop').onchange = function() {
	console.log("plantChanged");
	renderCal();
	//rerender Cal depending on plant selected (how to get info?)
};


