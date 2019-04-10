import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list : [],
      inputValue:''
    }


    //优化速度
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

handleBtnClick(){
  this.setState({
    list:[...this.state.list,this.state.inputValue],
    inputValue:''
  })
}

handleInputChange(e){ 
  this.setState({
    inputValue:e.target.value
  })
}


handleDelete(index){
    const list =[...this.state.list];
    list.splice(index,1);
    this.setState({list})
}

getTodoIntems(){
  return(
       this.state.list.map((item,index) => {
              // 父组件子组件传递属性 如 content  index
              // 子组件父组件传递方法来取值如  deleteFunction
              return(
                <TodoItem deleteFunction={this.handleDelete} key={index} content={item} index={index} />
              )
        })
    )
}

render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
            {this.getTodoIntems()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
