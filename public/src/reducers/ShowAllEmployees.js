const ShowAllEmployees = (state = [], action) => {
    switch(action.type) {
        case 'SHOW_ALL_EMPLOYEES':
            return action.content
    }
    return state;
};

export default ShowAllEmployees