function displ(){
	document.getElementById('me').removeAttribute("id");
	var element = document.getElementById('me1');
	element.style.removeProperty("visibility");
	
	
	element.style.display="none";
}