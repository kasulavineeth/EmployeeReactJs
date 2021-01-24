import axios from 'axios';

async function  getEmployeeDetails() {
    return await axios.get('https://localhost:44309/api/values');
}

async function  getEmployeeIdDetails(id) {
    return await axios.get('https://localhost:44309/api/values/'+id);
}

async function  updateEmployeeDetails(obj, id) {
    return await axios.put('https://localhost:44309/api/values/'+id, obj);
}
export  { getEmployeeDetails, getEmployeeIdDetails, updateEmployeeDetails };