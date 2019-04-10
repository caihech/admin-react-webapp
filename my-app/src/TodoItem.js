import React from 'react';


class TodoItem extends React.Component {

	constructor(props){
    	super(props);
    	this.handleDelete = this.handleDelete.bind(this);
  	}

  	//子组件如果想父组件传值方法
	handleDelete(){
		const { deleteFunction,index} = this.props;
		deleteFunction(index);
	}


	render(){
		const {content} = this.props;
		return (
			<div  onClick={this.handleDelete} >{content}</div>
		)
	}
}
export default TodoItem;
