// Collecte all dates for these month

// Array of dates for current month
var datesArray = [
				[[], [], [], [], [], [], []],
				[[], [], [], [], [], [], []],
				[[], [], [], [], [], [], []], 
				[[], [], [], [], [], [], []], 
				[[], [], [], [], [], [], []], 
				[[], [], [], [], [], [], []]
				];

// Today's date
var today = new Date();

// Today's day number
var dayNum = today.getDate();

// Current manth index
// var monthIndex = today.getMonth();
var monthIndex = 1;

// Current manth number
var monthNum = monthIndex + 1;

// Days count for the current month
var daysCount = new Date(2019, monthNum, 0).getDate(); 

// For each day number, i want to know the day string {monday, thusday, ...}
var yIndex = 0;

// Fill the dates array
for (var i = 1; i <= daysCount; i++) {
	switch (new Date(2019, monthIndex, i).getDay()) {
		case 0:
			datesArray[yIndex][0] = new Date(2019, 0, i).getDate();
			break;
		case 1:
			datesArray[yIndex][1] = new Date(2019, 0, i).getDate();
			break;
		case 2:
			datesArray[yIndex][2] = new Date(2019, 0, i).getDate();
			break;
		case 3:
			datesArray[yIndex][3] = new Date(2019, 0, i).getDate();
			break;
		case 4:
			datesArray[yIndex][4] = new Date(2019, 0, i).getDate();
			break;
		case 5:
			datesArray[yIndex][5] = new Date(2019, 0, i).getDate();
			break;
		case 6:
			datesArray[yIndex][6] = new Date(2019, 0, i).getDate();
			yIndex++;
			break;
	}
}

// Declaration DOM variables
var table = document.getElementById('Table');
var tableRows = table.children[0].children; 


// Fill Html table with the datesArray data
for (var i = 0; i < 6; i++) {
	var row = tableRows[i];
	for (var j = 0; j <= 6; j++) {
		var cell = row.children[j];
		cell.innerHTML = datesArray[i][j];
	}
}