import React from 'react';
import { connect } from "react-redux";
import {getEmployeeAction } from '../Action/GetEmployeeDetails.Action'
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class UpdateDetailsComponent extends React.Component{
    constructor(props){
        super(props);
        //this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.EmpId = React.createRef();
        this.Name = React.createRef();
        this.EmpYears = React.createRef();
    }

    handleChange(e) {
        
    }

    handleClose(e) {
        this.props.dispatch(getEmployeeAction.ToggleModal());
    }

    updateValues(e) {
        this.props.dispatch(getEmployeeAction.ToggleModal());
        let obj = {
        EmpId : document.getElementById("id").value,
        Name: document.getElementById("name").value,//this.Name.current.value,
        EmpYears : document.getElementById("years").value//this.EmpYears.current.value
        }
        this.props.dispatch(getEmployeeAction.updateEmployee(obj, this.EmpId.current.value))
    }



    render() {
        let clicked = this.props.empDetails && this.props.empDetails.isClicked;
        let empDetails = this.props.empDetails && this.props.empDetails.empData;
        console.log(empDetails,'emppde');
        return(
            
            <Modal show={clicked} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Values</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>EmpId: &nbsp;&nbsp;</label> 
                <input id ="id" type="text" defaultValue={empDetails &&empDetails.EmpId} ref={this.EmpId} onChange={this.handleChange}></input><br/>
                <label>EmpName: &nbsp;&nbsp;</label> 
                <input id= "name" type="text" defaultValue={empDetails && empDetails.Name }ref = {this.EmpName} onChange={this.handleChange}></input><br/>
                <label>EmpYears: &nbsp;&nbsp;</label>
                 <input id = "years" type="text"  defaultValue = {empDetails && empDetails.EmpYears} ref = {this.EmpYears} onChange={this.handleChange}></input><br/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.updateValues}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    const empDetails = state.details;
    console.log({ empDetails });
    return {
        empDetails
    };
}

export default connect(mapStateToProps)(UpdateDetailsComponent)
