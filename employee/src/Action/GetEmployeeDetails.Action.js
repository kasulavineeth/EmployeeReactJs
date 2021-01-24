import {getEmployeeDetails, getEmployeeIdDetails, updateEmployeeDetails} from '../Service/getEmployeeDetails';
import {constants} from '../constants';

function getAllEmployeeDetailsAction() {
    let data;
    return dispatch => {
        dispatch(request())
        getEmployeeDetails().then(res => {
            if(res.status === 200){
                data = res.data;
                dispatch(success())
            }
        }).catch(err => {
            dispatch(error)});
    }

    function request() {
        return { type: constants.API_FAILURE }
    }

    function success() {
        return { type: constants.API_SUCCESS, data}
    }

    function error() {
        return { type: constants.API_ERROR }
    }
}

function getEmployeeDetailsById(id) {
    let data;
    console.log(id);
    return dispatch => {
        dispatch(request())
        getEmployeeIdDetails(id).then(res => {
            if(res.status === 200){
                data = res.data;
                dispatch(success())
            }
        }).catch(err => {
            dispatch(error)});
    }

    function request() {
        return { type: constants.API_ID_FAILURE }
    }

    function success() {
        return { type: constants.API_ID_SUCCESS, data}
    }

    function error() {
        return { type: constants.API_ID_ERROR }
    }    
}


function ToggleModal() {
    return toggle();

    function toggle(){
        return {type : "IsClickToogle" }
    }
}

function ClickExecuted() {
    return click();

    function click() {
        return {type: "ClickExecuted"}
    }

}

function updateEmployee(obj, id) {
    let data;
    return dispatch => {
        dispatch(request())
        updateEmployeeDetails(obj, id).then(res => {
            if(res.status === 200){
                data = res.data;
                dispatch(success())
            }
        }).catch(err => {
            dispatch(error)});
    }

    function request() {
        return { type: constants.API_PUT_REQUEST }
    }

    function success() {
        return { type: constants.API_PUT_SUCCESS, data}
    }

    function error() {
        return { type: constants.API_PUT_ERROR }
    }    
}


export const getEmployeeAction = {getAllEmployeeDetailsAction, updateEmployee, getEmployeeDetailsById, ToggleModal, ClickExecuted }