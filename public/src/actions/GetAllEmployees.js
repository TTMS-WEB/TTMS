const getAllEmployees = () =>{
    return {
        type:'GET_ALL_EMPLOYEES'
    }
};

const getOneEmployee=(employeeName)=>{
    return {
        type:'GET_ONE_EMPLOYEE',
        employeeName
    }
};

const loadUsername = ()=> {
    return {
        type: 'USERNAME_LOADED'
    }
};

const deleteEmployee = (name)=>{
    return {
        type:'DELETE_EMPLOYEE',
        name
    }
};

module.exports = {
    getAllEmployees,
    loadUsername,
    getOneEmployee,
    deleteEmployee
};
