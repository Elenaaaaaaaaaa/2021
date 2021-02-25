import {Table} from "react-bootstrap";
import React from "react";


export class JournalTable extends React.Component {
    render() {
        return <Table bordered>
            <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>ПрИС</th>
                <th>СИИ</th>
            </tr>
            </thead>
            <tbody>
            {this.props.students.map((student, index) => {
                return <tr>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.markPrIS}</td>
                    <td>{student.markSII}</td>
                </tr>
            })}
            </tbody>
        </Table>
    }
}