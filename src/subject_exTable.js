import React, { Component } from 'react';
import { Table} from "react-bootstrap";


// eslint-disable-next-line no-unused-vars
export class SubjectExTable extends Component {
    render() {
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th>id</th>
                    <th>in_time</th>
                    <th>mark_id</th>
                    <th>student_id</th>
                    <th>mark</th>
                    <th>present</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                {this.props.students.map((journal, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        {/*<td>{journal.student_id}</td>*/}
                        <td>{journal.SURNAME}</td>
                        <td>{journal.NAME}

                        </td>
                        <td>{journal.SECOND_NAME}</td>
                        <td
                            style={{backgroundColor: journal.VALUE > String(2) ? 'green':'red'}}>
                            {journal.VALUE}
                        </td>

                        <td>{journal.COUNT}</td>
                        <td>{journal.SHORT_NAME}</td>
                    </tr>
                })}
                </tbody>
            </Table>
        )
    }
}