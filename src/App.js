import "bootstrap/dist/css/bootstrap.css"
import {Navbar, Nav, Dropdown, Tabs, Table, Tab} from "react-bootstrap"
import './App.css';
import React, {Component} from "react";
import {JournalTable} from './JournalTable';
import Request from "./Services/Request";



class App extends Component {
    constructor() {
        super();
        this.state = {
            activeGroup: 0,
            students: null
        };
    }
    componentDidMount() {
        Request.getStudents().then((students) => {
            console.log(students);
            this.setState({students: students});
        });
    }
    render() {
        return (
            <div className="App">
                {this.state.students ? <JournalTable
                    students={this.state.students[this.state.activeGroup]}/> : null}
                <button onClick={() => {
                    this.setState({activeGroup: 0});
                }}>Группа 1</button>
                <button onClick={() => {
                    this.setState({activeGroup: 1});
                }}>Группа 2</button>
                <button onClick={() => {
                    this.setState({activeGroup: 2});
                }}>Группа 3</button>
            </div>
        );
    }
}


export default App;
