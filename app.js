// Dom variables
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");
const table = document.getElementById('Table');
const eventContent = document.getElementById('eventContent');
const tableRows = table.children[0].children;
let events = { 1 : {content: "Concert", year: 2019, month: 1, day: 24},
			  2 : {content: "Theatre", year: 2019, month: 1, day: 18}
			};
let getDatesArray = () => { return [
	[[], [], [], [], [], [], []],
	[[], [], [], [], [], [], []],
	[[], [], [], [], [], [], []], 
	[[], [], [], [], [], [], []], 
	[[], [], [], [], [], [], []], 
	[[], [], [], [], [], [], []]
	];
};
let generatorDatesArray = (monthNum, monthIndex, yearNum) => {
	let daysCount = new Date(yearNum, monthNum, 0).getDate(); 

	let datesArray = getDatesArray();

	let yIndex = 0;

	for (let i = 1; i <= daysCount; i++) {
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
let pushDatesArray = (datesArray) => {
	for (let i = 0; i < 6; i++) {
		let row = tableRows[i];
		for (let j = 0; j <= 6; j++) {
			let cell = row.children[j];
			cell.innerHTML = datesArray[i][j];
		}
	}
};

document.addEventListener('change', (event) => {
	if ( event.target == inputMonth || event.target == inputYear) {
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

for (let i = 0; i < 6; i++) {
	let row = tableRows[i];
	for (let j = 0; j <= 6; j++) {
		let cell = row.children[j];

		cell.addEventListener('click', (e) => {
			let day = parseInt(cell.innerHTML, 10);
			clickedDate = new Date(yearNum, monthIndex, day);
			
			for (var i = 1; i <= Object.keys(events).length; i++) {
				eventDate = new Date(events[i].year, (events[i].month - 1), events[i].day);
				
				equals = (date1, date2) => {
					if (date1.getFullYear() == date2.getFullYear()) {
						if (date1.getMonth() == date2.getMonth()) {
							if (date1.getDate() == date2.getDate()) {
								return true;
							}
						}
					}else {
						return false;
					}
				};

				if (equals(clickedDate, eventDate) == true) {
					eventContent.innerHTML = "<p>Event that day : " + events[i].content + "</p>";
				}
			}
		})
	}
}