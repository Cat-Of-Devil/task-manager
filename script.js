+(function(){

	var btnAdd = document.getElementById('btn-add-task');
	var inputText = document.getElementById('task');
	var taskList = document.getElementById('task-list');

	btnAdd.addEventListener('click', function(event){

		var iconClose = document.createElement('button');
		iconClose.type = 'button';
		iconClose.classList.add('close');
		iconClose.innerHTML = '<span aria-hidden="true">&times;</span>';

		var li = document.createElement('li');
		li.classList.add('list-group-item');
		li.innerHTML = inputText.value;
		li.appendChild(iconClose);

		taskList.appendChild(li);
		inputText.value = '';

		iconClose.addEventListener('click', function(event){
			li.remove()
		});

	}, false);

}());