import React, { Component } from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

class App extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
        }
        this.handleAddTodo=this.handleAddTodo.bind(this);
        this.handleDeleteTodo=this.handleDeleteTodo.bind(this);
    }

    componentWillMount(){
        this.setState({todos: [
            {
                id : uuid.v4(),
                title: 'Presentation',
                description: 'Project demo at 5pm'
            }
        ]});
    }
    handleAddTodo(todo){
        let todos=this.state.todos;
        todos.push(todo);
        this.setState({todos:todos});
    }

    handleDeleteTodo(id){
        console.log("here:"+id);
        let todos=this.state.todos;
        let index=todos.findIndex(x => x.id===id);
        todos.splice(index,1);
        this.setState({todos:todos});
    }
    render(){
        return(
            <div className="App">
                <AddTodo addTodo={this.handleAddTodo} />
                <br />
                <h3> My Todos </h3>
                <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo}/>
            </div>
        );
    }
}

export default App;