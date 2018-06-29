var height,width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
	event.preventDefault();
	makeGrid();
})

function makeGrid() {
	$('tr').remove();
  // Select size input
	height=$('#inputHeight').val();
	width=$('#inputWidth').val();
	//use nested for loops to add table rows and columns
	for(i=1; i<=height; ++i){
		$('#pixelCanvas').append('<tr></tr>');
		for(j=1; j<=width; ++j){
			$('tr:last').append('<td></td>');
		}
	}
	//set color to cell when cell is clicked by user
	$('td').click(function addColor(){
    // Select color input
		color=$('#colorPicker').val();
		$(this).css("background-color", color);
	})
}
