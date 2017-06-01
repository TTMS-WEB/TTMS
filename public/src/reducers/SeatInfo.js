const SeatInfo = (state = {studioId:'',seatArray:[]}, action)=> {
    switch (action.type) {
        case 'GET_STUDIO_SEATS':
            return action.content;
    }
    return state;
};

export default SeatInfo;
