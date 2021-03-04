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
            {
                console.log(this.props.students)};{
                (Array.from(this.props.students)).map((student, index) => {
                    console.log(this.props.students);
                return <tr>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>{student.study_group_id}</td>
                </tr>
            })}
            </tbody>
        </Table>
    }
}