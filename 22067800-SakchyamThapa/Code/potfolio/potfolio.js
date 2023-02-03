var body = document.getElementById('frontPage'); //getting the main body container 

//getting all the individual portfolio container
var roshniDisplay =  document.getElementById('roshni');
var yogalDisplay = document.getElementById('yogal');
var sakchyamDisplay = document.getElementById('sakchyam');
var dbeeeDisplay = document.getElementById('dibbeshwor');


//hides the main body and displays the selected portfolio by chaning display values
function roshni() {
  
  body.style.display = 'none';
  roshniDisplay.style.display = 'block';
}

function yogal() {
  
  body.style.display = 'none';
  yogalDisplay.style.display = 'block';
}

function sakchyam() {

  body.style.display = 'none';
  sakchyamDisplay.style.display = 'block';
}

function dibbeshwor() {
  
  body.style.display = 'none';
  dbeeeDisplay.style.display = 'block';
}