let addedTask = "no";
selectData();
function todoListData() {
	let myInput = document.getElementById('myInput').value;
	if (myInput == '') {
		alert('Please enter your task');
	} else {
		console.log(addedTask);
		if (addedTask == 'no') {
			let input = getTodoData();
			if (input == null) {
				let data = [myInput];
				setTodoData(data);
			} else {
				input.push(myInput);
				setTodoData(input);
			}
		} else {
			let input = getTodoData();
			input[addedTask] = myInput;
			setTodoData(input);
		}
		document.getElementById('myInput').value = '';
		selectData();
	}
}

function selectData() {
	let input = getTodoData();
	if (input != null) {
		let taskDetails = '';
		for (let i in input) {
			taskDetails += `<div class="d-flex task">
								<div class="tasklist" id="taskdata">${input[i]}</div>
								<div>
									<a class="delete" href="javascript:void(0)" onclick="editData(${i})">Edit</a>
									<a class="delete" href="javascript:void(0)" onclick="deleteData(${i})">Delete</a>
								</div>
							</div>`;
		}
		document.getElementById('taskData').innerHTML = taskDetails;
	}

}
document.getElementById("taskdata").addEventListener("click", completeTask);
function completeTask() {
	let element = document.getElementById("taskdata");
	element.classList.add("complete");
}

function editData(index) {
	addedTask = index;
	let input = getTodoData();
	document.getElementById('myInput').value = input[index];
}

function deleteData(index) {
	let input = getTodoData();
	input.splice(index, 1);
	setTodoData(input);
	selectData();
}

function getTodoData() {
	let input = JSON.parse(localStorage.getItem('ToDo-Data'));
	return input;
}

function setTodoData(input) {
	localStorage.setItem('ToDo-Data', JSON.stringify(input));
}
