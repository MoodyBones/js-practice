const enterButt = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const listButton = document.querySelectorAll('.delete--button');


const inputLength = () => input.value.length;

const createListElement = () => {
	let li, inputText, btn;
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

const addListAfterClick = () => {
	if (inputLength() > 0) {
		return createListElement();
	}
}

const addListAfterKeypress = event => {
	if (inputLength() > 0 && event.keyCode === 13) {
		return createListElement();
	}
}

const doneItem = e => {
	if (e.target.tagName === "SPAN") {
		return e.target.classList.toggle("done");
	}
}

const deleteListItem = event => {
	const listElement = event.target.parentNode;
	return event.target.parentNode.parentNode.removeChild(listElement);
}


enterButt.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneItem);

Array.from(listButton).forEach(link => {
    link.addEventListener('click', deleteListItem);
});

