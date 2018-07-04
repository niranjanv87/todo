import React, { Component } from 'react';

class TodoItem extends Component{
    deleteTodo(id){
        this.props.onDelete(id);
        console.log(id);
    }
    render(){

        return(
            <li className="Todoitem">
                <strong> {this.props.todo.title} </strong>- {this.props.todo.description} <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id) } > X </a>
            </li>
        );
    }
}

export default TodoItem;