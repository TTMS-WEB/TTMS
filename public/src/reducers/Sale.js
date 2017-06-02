const Sale = (state = {}, action)=> {
    switch (action.type) {
        case 'GET_SEAT_BY_STUDIO':
            console.log(action.content);
            return action.content;
    }
    return state;
};

export default Sale;

