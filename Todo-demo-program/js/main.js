let addedTask = "nothing";
let inputTask = getTodoData();

selectData();
function todoListData() {
	let myInput = document.getElementById('myInput').value;
	window.location.reload();
	if (myInput == '') {
		alert('Please enter your task');
	} else {
		if (addedTask == 'nothing') {
			if (inputTask == null) {
				let data = [myInput];
				setTodoData(data);
			} else {
				inputTask.push(myInput);
				setTodoData(inputTask);
			}
		} else {
			inputTask[addedTask] = myInput;
			setTodoData(inputTask);
		}
		document.getElementById('myInput').value = '';
		selectData();
	}
}

function selectData() {
	if (inputTask != null) {
		let taskDetails = '';
		for (let i in inputTask) {
			taskDetails += `<div class="d-flex task">
								<div class="tasklist d-flex align-items-center" id="taskdata" onclick="completeData()">${inputTask[i]}</div>
								<div>
								<a class="delete" href="javascript:void(0)" onclick="editData(${i})"><i class="fa-solid fa-pen-to-square"></i></a>
								<a class="delete" href="javascript:void(0)" onclick="deleteData(${i})"><i class="fa-solid fa-trash-can"></i></a>
								</div>
							</div>`;
		}
		document.getElementById('taskData').innerHTML = taskDetails;
	}

}

function completeData() {
	document.getElementById("taskdata").classList.toggle("complete");
}

function editData(index) {
	addedTask = index;
	document.getElementById('myInput').value = inputTask[index];
}

function deleteData(index) {
	inputTask.splice(index, 1);
	setTodoData(inputTask);
	selectData();
}

function getTodoData() {
	let inputTask = JSON.parse(localStorage.getItem('ToDo-Data'));
	return inputTask;
}

function setTodoData(inputTask) {
	localStorage.setItem('ToDo-Data', JSON.stringify(inputTask));
}
