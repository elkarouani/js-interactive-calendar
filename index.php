<?php
	$bool = false;
	$num = 3 + 4;
	$str = "A string here";
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Interactive Calendar</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script type="text/javascript">
			// boolean outputs "" if false, "1" if true
			var bool = "<?php echo $bool ?>"; 

			// numeric value, both with and without quotes
			var num = <?php echo $num ?>; // 7
			var str_num = "<?php echo $num ?>"; // "7" (a string)

			var str = "<?php echo $str ?>"; // "A string here"

			console.log(bool);
		</script>
	</head>
	<body>
		<table id="Table">
			<tr>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
			</tr>
			<tr>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
			</tr>
			<tr>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
			</tr>
			<tr>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
			</tr>
			<tr>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
			</tr>
			<tr>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
				<td class="cell"></td>
			</tr>
		</table>
		<div>
			<input id="monthInput" type="number" value="" min="1" max="12" placeholder="Month">
			<input id="yearInput" type="number" value="" placeholder="Year">
		</div>
		<div id="eventContent"></div>

		<script type="text/javascript" src="app.js"></script>
	</body>
</html>