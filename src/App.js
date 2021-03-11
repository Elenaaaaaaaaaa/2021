import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import {JournalTable} from "./JournalTable"
import {SubjectExTable} from "./subject_exTable"
import Request from "./Services/Request"
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeGroup: 0,
            students: null,
            journal: null,
        };
    }
    componentDidMount() {
        Request.getStudents().then((students) => {
            console.log(students)
            this.setState({students: students});

        });
        Request.getJournal().then((journal) => {console.log(journal)
        this.setState({journal: journal})})
    }
    render() {
        return (
            <div className="App">
                {this.state.students ? <JournalTable
                    students={this.state.students}/> : null}

                {this.state.journal ? <SubjectExTable
                    students={this.state.journal}/> : null}

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