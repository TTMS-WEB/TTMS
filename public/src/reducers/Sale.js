const Sale = (state = {
    ScheduleName: '',
    ScheduleStudio: '',
    ScheduleDate: '',
    ScheduleTime: '',
    ScheduleActor: '',
    SchedulePrice: '',
    TicketArray: []
}, action)=> {
    switch (action.type) {
        case 'GET_SEAT_BY_SCHEDULE':
            console.log(action.content);
            return action.content;
    }
    console.log(state);
    return state;
};

export default Sale;

