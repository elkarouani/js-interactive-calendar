// Dom variables
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");
const table = document.getElementById('Table');
const tableRows = table.children[0].children;
let monthNum = 1 ;
let monthIndex = 0;
let yearNum = 2019;

inputMonth.addEventListener('change', (event)=>{
	// setting up dates Array
	let datesArray = [
					[[], [], [], [], [], [], []],
					[[], [], [], [], [], [], []],
					[[], [], [], [], [], [], []], 
					[[], [], [], [], [], [], []], 
					[[], [], [], [], [], [], []], 
					[[], [], [], [], [], [], []]
					];
					
	// month number from user input
	monthNum = parseInt(inputMonth.value, 10);
	
	// month index
	monthIndex = monthNum - 1;
		
	// How much day in the input month and year 
	let daysCount = new Date(yearNum, monthNum, 0).getDate(); 

	// Fill the dates array
	let yIndex = 0;
	for (let i = 1; i <= daysCount; i++) {
		switch (new Date(yearNum, monthIndex, i).getDay()) {
			case 0:
				datesArray[yIndex][0] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 1:
				datesArray[yIndex][1] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 2:
				datesArray[yIndex][2] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 3:
				datesArray[yIndex][3] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 4:
				datesArray[yIndex][4] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 5:
				datesArray[yIndex][5] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 6:
				datesArray[yIndex][6] = new Date(yearNum, monthIndex, i).getDate();
				yIndex++;
				break;
		}
	}
	
	// Fill Html table with the datesArray data
	for (let i = 0; i < 6; i++) {
		let row = tableRows[i];
		for (let j = 0; j <= 6; j++) {
			let cell = row.children[j];
			cell.innerHTML = datesArray[i][j];
		}
	}
})

inputYear.addEventListener('change', (event) => {
	// setting up dates Array
	let datesArray = [
					[[], [], [], [], [], [], []],
					[[], [], [], [], [], [], []],
					[[], [], [], [], [], [], []], 
					[[], [], [], [], [], [], []], 
					[[], [], [], [], [], [], []], 
					[[], [], [], [], [], [], []]
					];

	// year number from user input
	yearNum = parseInt(inputYear.value, 10);
	
	// How much day in the input month and year 
	let daysCount = new Date(yearNum, monthNum, 0).getDate(); 

	// Fill the dates array
	let yIndex = 0;
	for (let i = 1; i <= daysCount; i++) {
		switch (new Date(yearNum, monthIndex, i).getDay()) {
			case 0:
				datesArray[yIndex][0] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 1:
				datesArray[yIndex][1] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 2:
				datesArray[yIndex][2] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 3:
				datesArray[yIndex][3] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 4:
				datesArray[yIndex][4] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 5:
				datesArray[yIndex][5] = new Date(yearNum, monthIndex, i).getDate();
				break;
			case 6:
				datesArray[yIndex][6] = new Date(yearNum, monthIndex, i).getDate();
				yIndex++;
				break;
		}
	}
	
	// Fill Html table with the datesArray data
	for (let i = 0; i < 6; i++) {
		let row = tableRows[i];
		for (let j = 0; j <= 6; j++) {
			let cell = row.children[j];
			cell.innerHTML = datesArray[i][j];
		}
	}
})




