const ShowAllEmployees = (state= [], action) => {
    switch(action.type) {
        case 'SHOW_ALL_EMPLOYEES':
            return action.content;
        break;
        case 'SHOW_ONE_EMPLOYEE':
            return action.content
    }
    return state;
};

export default ShowAllEmployees;