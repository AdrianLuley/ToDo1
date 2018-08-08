import React from "react";


class ToDoItem extends React.Component {
    render() {
		var isChecked;
		if (this.props.data.id === 4){
			isChecked = true 
		}else{
			isChecked = false
		}
        return(
       
            <section className="main">
				<ul className="todo-list">
			
			
					
					
					<li>
						<div className="view">
						{isChecked ? <input className="toggle" type="checkbox" checked />: <input className="toggle" type="checkbox"  />}
							
							<label>{this.props.data.title}</label>
							
							<button className="destroy"></button>
						</div>
					</li>
				</ul>
			</section>
		
        );
    }
}

export default ToDoItem;