import React from 'react';
import { connect } from "react-redux";
import {getEmployeeAction} from '../Action/GetEmployeeDetails.Action'
import UpdateComponent from './UpdateComponent';
import { Card, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



class GetDetailsComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            id : ''
        }
    }

    componentDidMount(){
        this.props.dispatch(getEmployeeAction.getAllEmployeeDetailsAction());
    }

    handleClick(e) {
        this.setState({
            isClicked: true,
            id : e.target.getAttribute('data-index')
        })

        let Id = e.target.getAttribute('data-index');
        this.props.dispatch(getEmployeeAction.getEmployeeDetailsById(Id));
    }

    render() {
        return(
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <th>Emp Id</th>
                        <th> Emp Name</th>
                        <th>Experience</th>
                    </thead>
                    <tbody>
                {this.props.empDetails && this.props.empDetails.map((x) => {
                    return(
                        // <Card style={{ display: 'flex', flexDirection: 'row', width:'20%', flex:'1' }} key={x.EmpId}   onClick={this.handleClick} data-index={x.EmpId}>
                        // <Card.Body>
                        // <Card.Title><h5>{x.Name}</h5></Card.Title>     
                        // </Card.Body>
                        // </Card>
                        <tr key={x.EmpId}>
                        <td>{x.EmpId}</td>
                        <td>{x.Name}</td>
                        <td>{x.EmpYears}</td>
                        <td><input type="button" key={x.EmpId} onClick={this.handleClick} data-index={x.EmpId} value="update"/> </td>
                        </tr>
                        //<h1 key={x.EmpId} onClick={this.handleClick} data-index={x.EmpId}>{x.Name}</h1>
                    ) 
                })
             }
             </tbody>
             </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    const empDetails = state.details.data;
    console.log({ empDetails });
    return {
        empDetails
    };
}

export default connect(mapStateToProps)(GetDetailsComponent)
