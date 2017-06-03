const Sale = (state = {studioId:'',seatArray:[]}, action)=> {
    switch (action.type) {
        case 'GET_SEAT_BY_STUDIO':
            return action.content;
    }
    return state;
};

export default Sale;

