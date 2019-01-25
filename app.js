// DOM and App variables
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");
const table = document.getElementById('Table');
const eventContent = document.getElementById('eventContent');
const tableRows = table.children[0].children;
const range1 = Array.from({length: 6}, (v, i) => i);
const range2 = Array.from({length: 7}, (v, i) => i);
const equals = (date1, date2) => {
	return (date1.getFullYear() == date2.getFullYear() &&
	 		date1.getMonth() == date2.getMonth() &&
	 		date1.getDate() == date2.getDate()) 
			? true : false;
};
const events = { 1 : {content: "Concert", year: 2019, month: 1, day: 24},
			  2 : {content: "Theatre", year: 2019, month: 1, day: 18}
			};
const getDatesArray = () => { return [
	[[], [], [], [], [], [], []],
	[[], [], [], [], [], [], []],
	[[], [], [], [], [], [], []], 
	[[], [], [], [], [], [], []], 
	[[], [], [], [], [], [], []], 
	[[], [], [], [], [], [], []]
	];
};
const generatorDatesArray = (monthNum, monthIndex, yearNum) => {
	let daysCount = new Date(yearNum, monthNum, 0).getDate(); 
	let datesArray = getDatesArray();
	let yIndex = 0;
	let range = Array.from({length: daysCount}, (v, i) => (i+1));

	for (let i of range) {
		let switchDate = new Date(yearNum, monthIndex, i).getDay();
	
		const funSwitch = (switchDate) => ({
		  0: new Function('yIndex', 'datesArray', 'i', "datesArray[0] = new Date(yearNum, monthIndex, i).getDate(); return yIndex;"),
		  1: new Function('yIndex', 'datesArray', 'i', "datesArray[1] = new Date(yearNum, monthIndex, i).getDate(); return yIndex;"),
		  2: new Function('yIndex', 'datesArray', 'i', "datesArray[2] = new Date(yearNum, monthIndex, i).getDate(); return yIndex;"),
		  3: new Function('yIndex', 'datesArray', 'i', "datesArray[3] = new Date(yearNum, monthIndex, i).getDate(); return yIndex;"),
		  4: new Function('yIndex', 'datesArray', 'i', "datesArray[4] = new Date(yearNum, monthIndex, i).getDate(); return yIndex;"),
		  5: new Function('yIndex', 'datesArray', 'i', "datesArray[5] = new Date(yearNum, monthIndex, i).getDate(); return yIndex;"),
		  6: new Function('yIndex', 'datesArray', 'i', "datesArray[6] = new Date(yearNum, monthIndex, i).getDate(); yIndex++; return yIndex;")
		})[switchDate];

		yIndex = funSwitch(switchDate)(yIndex, datesArray[yIndex], i);
	}

	return datesArray;
};
const pushDatesArray = (datesArray) => {
	for (let i in range1) {
		let row = tableRows[i];
		for (let j in range2) {
			let cell = row.children[j];
			cell.innerHTML = datesArray[i][j];
		}
	}
};

// Events Bloc
document.addEventListener('change', (event) => {
	if ( event.target == inputMonth || event.target == inputYear) {
        // Get dates array structure
        let datesArray = getDatesArray();

		// month number from user input
		monthNum = parseInt(inputMonth.value, 10);
		
		// month index
		monthIndex = monthNum - 1;

		// year number from user input
		yearNum = parseInt(inputYear.value, 10);
		
		// generate dates to dates array 
		datesArray = generatorDatesArray(monthNum, monthIndex, yearNum);
		
		// Push dates array data to html table
		pushDatesArray(datesArray);
    }
})

// Bloc for events displayer
for (let i in range1) {
	let row = tableRows[i];

	for (let j in range2) {
		let cell = row.children[j];

		cell.addEventListener('click', (e) => {
			let day = parseInt(cell.innerHTML, 10);

			let clickedDate = new Date(yearNum, monthIndex, day);
			
			for (let i = 1; i <= Object.keys(events).length; i++) {
				let eventDate = new Date(events[i].year, (events[i].month - 1), events[i].day);				

				if (equals(clickedDate, eventDate) == true) {eventContent.innerHTML = "<p>Event that day : " + events[i].content + "</p>";}
			}
		})
	}
}
