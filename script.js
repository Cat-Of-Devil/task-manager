+(function(){

	var btnAdd = document.getElementById('btn-add-task');
	var inputText = document.getElementById('task');
	var taskList = document.getElementById('task-list');

	var listId = '__task-list__';
	var data = JSON.parse(localStorage.getItem(listId)) || [];

	for (var i in data) {
		addListItem (data[i]);
	}


	console.log('data', data);


	
	btnAdd.addEventListener('click', function(event){

		var task = {
			id: data.length,
			title: inputText.value
		};

		data.push(task);

		localStorage.setItem(listId, JSON.stringify(data));

		//console.log('Ololo', JSON.stringify(data));

		addListItem (task);

		inputText.value = '';

	}, false);



	function addListItem (task) 
	{
		var iconClose = document.createElement('button');
		iconClose.type = 'button';
		iconClose.classList.add('close');
		iconClose.innerHTML = '<span aria-hidden="true">&times;</span>';

		var li = document.createElement('li');
		li.classList.add('list-group-item');
		li.innerHTML = task.title;
		li.appendChild(iconClose);

		taskList.appendChild(li);
		
		iconClose.addEventListener('click', function(event){
			li.remove();

			for (var i in data) {
				if (data[i].id == task.id) {
					data.splice(i, 1);
				}
			}

			localStorage.setItem(listId, JSON.stringify(data));
		});
	}

}());