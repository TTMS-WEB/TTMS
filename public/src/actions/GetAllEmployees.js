const getAllEmployees = () =>{
    return {
        type:'GET_ALL_EMPLOYEES'
    }
};

const loadUsername = ()=> {
    return {
        type: 'USERNAME_LOADED'
    }
};

module.exports = {
    getAllEmployees,
    loadUsername
};
