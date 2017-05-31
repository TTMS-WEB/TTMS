const ShowAllEmployees = (state= [], action) => {
    switch(action.type) {
        case 'SHOW_ALL_EMPLOYEES':
            return action.content;
        break;
    }
    return state;
};

export default ShowAllEmployees