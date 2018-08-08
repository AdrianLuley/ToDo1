import React from "react";
import ToDoItem from './ToDoItem';
import todoList from './todos.json';

class ToDoList extends React.Component {
   state = {
		todos: todoList
   }
		render() {
			return(
				<div> 
               		<section className="todoapp">
						<header className="header">
							<h1>todos</h1>
						<input className="new-todo" placeholder="What needs to be done?" autoFocus/>
						</header>
					{this.state.todos.map( todo => <ToDoItem key = {todo.id} data = {todo}/> )}
					<footer className="footer">
			
					<span className="todo-count"><strong>0</strong> item(s) left</span>
		
					<button className="clear-completed">Clear completed</button>
					</footer>
					</section>
				</div>
				
			);
		}
}

export default ToDoList;






