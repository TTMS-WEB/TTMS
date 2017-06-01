const Seat = (state = [], action)=> {
    switch (action.type) {
        case 'SHOW_STUDIO_INFO':
            return action.content;
    }
    return state;
};

export default Seat;
