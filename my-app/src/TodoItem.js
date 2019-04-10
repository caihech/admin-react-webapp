import React from 'react';


class TodoItem extends React.Component {


	handleDelete(){
		this.props.deleteFunction(this.props.index)
	}


	render(){
		return(
			<div  onClick={this.handleDelete.bind(this)} >{this.props.content}</div>
		)
	}
}
export default TodoItem;
