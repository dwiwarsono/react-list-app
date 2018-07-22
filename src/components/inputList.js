import React, { Component } from 'react';
import './inputList.css'

class InputList extends Component {
    constructor(props){
        super(props)

        // BUAT STATE 
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    // BUAT FUNCTION UNTUK MENANGANI HANDLECHANGE
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    // BUAT FUNCTION UNTUK MENANGANI ADDTODO
    addTodo(todo) {
        // Ensure the todo text isn't empty
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({value: ""});
        }
        
    }


    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={() =>
                this.addTodo(this.state.value)} >Submit</button>
            </div>
        );
    }
}

export default InputList;