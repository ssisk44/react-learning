import { useState } from "react";



function MyComponent(){
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("")

	function handleInputChange(event) {
		setNewTask(event.target.value)
	}

	function handleAddTask(){
		if (newTask.trim() !== ""){
			setTasks(t => [...t, newTask]);
			setNewTask("");
		}
		
	}

	function handleDeleteTask(index){
		setTasks(t => t.filter((_, i) => i !== index));
	}

	function moveTaskUp(index){
		if (index > 0){
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
			setTasks(updatedTasks);
		}
	}

	function moveTaskDown(index){
		if (index < tasks.length-1){
			const updatedTasks = [...tasks];
			[updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
			setTasks(updatedTasks);
		}
	}


	return (
		<div className="to-do-list">
			<h1>To Do List</h1>
			<div className="task-input-container">
				<input type="text" value={newTask} onChange={handleInputChange} placeholder='Enter a task...' />
				<button className="add-button" onClick={handleAddTask}>Add Task</button>
			</div>
			<ol >
				{tasks.map((task, index) => 
					<li key={index}>
						<span className="text">{task}</span>
						<button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
						<button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
						<button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
					</li>	
				)}
			</ol>
		</div>
	)
}

export default MyComponent