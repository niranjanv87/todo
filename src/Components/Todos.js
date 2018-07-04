import React, { Component } from 'react';
import TodoItem from './TodoItem';
class Todos extends Component{
    deleteTodo(id){
        this.props.onDelete(id);
        console.log(id);
    }
    render(){
        let todoItems;
        if (this.props.todos){
            todoItems=this.props.todos.map(todo => {
                return(
                    <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.title} todo={todo} />
                );
            });
        }
        return(
            <div className="Todos">
                {todoItems}
            </div>
        );
    }
}

export default Todos;