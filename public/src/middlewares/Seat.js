import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'GET_STUDIO_INFO':
            request.get('/studioInfo')
                .end((err, res)=> {
                    next({type:'SHOW_STUDIO_INFO', content: res.body});
                });
            break;
        case 'GENERATE_SEAT':
            request.post('/generateSeat')
                .send({"studioId": action.studioId})
                .end((err, res)=> {
                    next({type: 'GET_STUDIO_SEATS', content: res.body});
                });
            break;
        case 'CHANGE_SEAT_STATUS':
            request.post('/changeSeatStatus')
                .send({"studioId":action.studioId,"i":action.i})
                .end((err, res)=> {
                    next({type:'GET_STUDIO_SEATS',content:res.body})
                });
            break;
    }
    next(action);
}

