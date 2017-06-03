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
            return action.content;
    }
    return state;
};

export default Sale;

