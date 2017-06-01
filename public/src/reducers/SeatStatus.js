const SeatStatus = (state = '', action)=> {
    switch (action.type) {
        case 'SEAT_STATUS':
            return action.content;
    }
    return state;
};

export default SeatStatus;

