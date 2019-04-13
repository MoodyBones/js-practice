var enterButt = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listButton = document.querySelectorAll('.delete--button');


function inputLength() {
	return input.value.length;
}

function createListElement(el) {
	var li, inputText, btn;
	li = document.createElement("li");
	inputText = document.createTextNode(input.value);
	btn = document.createElement("button");

	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(inputText);
	li.appendChild(btn);
	ul.appendChild(li);
	
	input.value = "";
	btn.onclick = deleteListItem;

}




function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneItem(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

function deleteListItem(event) {
	var listElement = event.target.parentNode;
	event.target.parentNode.parentNode.removeChild(listElement);
}


enterButt.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneItem);

Array.from(listButton).forEach(link => {
    link.addEventListener('click', deleteListItem);
});

