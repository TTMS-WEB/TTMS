const Seat = (state=[],action)=>{
    switch (action.type){
        case 'GET_STUDIO_SEATS':
            return action.content;
    }
    console.log(state);
    return state;
};

export default Seat;
