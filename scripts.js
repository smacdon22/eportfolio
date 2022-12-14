/* Place your JavaScript in this file */
setInterval(myTimer, 1000);
var lang = false;
function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
function translateIt() {
	const french = "\n\t\t\t\t\tMes parents en m'enroll&eacute; en l'immersion t&ocirc;t alors je suis all&eacute; au &Eacute;cole Shannon Park o&ugrave; nous avons commenc&eacute; &agrave; apprendre le fran&ccedil;ais la premi&egrave;re jour. Par la sixi&egrave;me mois, on parlons en fran&ccedil;ais seulment dans la classe. J'ai continu&eacute; avec l'immersion fran&ccedil;ais jusqu'&agrave; la fin du lyc&eacute;e et j'ai pass&eacute; l'examination DELF B2. \n\t\t\t\t\t<button class='translate' onclick='translateIt();'>Translate</button>\n\t\t\t\t";
	const english = "\n\t\t\t\t\tMy parents enrolled me in early French immersion so I went to Shannon Park Elementary School where we started learning french on the first day of  primary. By six months in we were speaking only in french in the classroom. I continued with french immersion all the way through highschool, and passed the DELF B2 examination. \n\t\t\t\t\t<button class='translate' onclick='translateIt();'>Translate</button>\n\t\t\t\t";
	if (lang){
		document.getElementById('french-intro').innerHTML = english;
		lang = false;
	}
	else{
		document.getElementById('french-intro').innerHTML = french;
		lang = true;
	}
}
function closeAll(){
	var pages = document.getElementsByClassName('header');
	for (let i = 0; i < pages.length; i++){
		pages[i].style.display = "none";
		pages[i].style.zIndex = "1";
	}
}
function hide(x, y) {
	const pages = document.getElementsByClassName(x);
	var bts = x + "-bt";
	const buttons = document.getElementsByClassName(bts);
	for (let i = 0; i < pages.length; i++){
		if (pages[i].id == y){
			pages[i].style.display = "block";
			buttons[i].classList.add("active");
		}
		else{
			pages[i].style.display = "none";
			if (buttons[i].classList.contains("active")){
				buttons[i].classList.remove("active");
			}
		}
	}
}
function subOpen(x) {
	var display = document.getElementById(x).style.display;
	if (display != "block") {
		document.getElementById(x).style.display = "block";
	}
	else{
		document.getElementById(x).style.display = "none";
	}
}

function iconclick(x){
	var y = x + "-head";
	var page = document.getElementById(y);
	page.style.display = "block";
	dragElement(document.getElementById(y));
}
		

function dragElement(elmnt) {
	highestZ();
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;
	
	function highestZ(e){
		const heads = document.getElementsByClassName("header");
		var zs = [0, 0, 0, 0, 0];
		var maxZ = 0;
		for (let i = 0; i < 5; i++){
			zs[i] = heads[i].style.zIndex;
			if (parseInt(heads[i].style.zIndex) >= maxZ){
				maxZ = parseInt(heads[i].style.zIndex);
			}
		}
		mm = parseInt(maxZ);
		mm += 2;
		elmnt.style.zIndex = mm.toString();
	}
  

  function dragMouseDown(e) {
	highestZ();
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
	highestZ();
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

