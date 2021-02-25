import "bootstrap/dist/css/bootstrap.css"
import {Navbar, Nav, Dropdown, Tabs, Table, Tab} from "react-bootstrap"
import './App.css';
import React, {Component} from "react";
import {JournalTable} from './JournalTable';


class App extends Component {
  render() {
    const students = [
      {name: 'Иванов Иван Иванович', markPrIS: 5, markSII: 4},
      {name: 'Петров Пётр Петрович', markPrIS: 3, markSII: 2}
    ];
    return (
        <div className="App">
          <JournalTable students={students}/>
        </div>
    );
  }
}


export default App;
