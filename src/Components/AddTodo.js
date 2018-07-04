import React, { Component } from 'react';
import uuid from 'uuid';
class AddTodo extends Component{
    constructor(){
        super();
        this.state = {
            newTodo:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        if (this.refs.title.value === ''){
            alert('Title is required')
        }else{
            this.setState({newTodo:{
                id : uuid.v4(),
                title : this.refs.title.value,
                description : this.refs.title.description
            }}, function(){
                this.props.addTodo(this.state.newTodo)
            });
        }
    }
    render(){

        return(
            <div >
                <h3> Add Todo </h3>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label> Title</label> <br/>
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label> Description</label> <br/>
                        <input type="text" ref="description" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default AddTodo;