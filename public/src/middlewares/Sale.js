import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'GET_SEAT':
            request.get(`/onSale/${action.ScheduleId}`)
                .end((err, res)=> {
                    next({type: 'GET_SEAT_BY_SCHEDULE', content: res.body});
                });
            break;
        case 'BUY_TICKET':
            request.post('/buyTicket')
                .send({"ScheduleId":action.ScheduleId,"location":action.location})
                .end((err, res)=> {
                    next({type: 'GET_SEAT_BY_SCHEDULE', content: res.body})
                });
            break;

    }
    next(action)
}
