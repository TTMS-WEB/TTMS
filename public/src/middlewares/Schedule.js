import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'GET_PLAY_SCHEDULE':
            request.get('/schedule')
                .end((err,res)=>{
                    next({})
                });
            break;
    }
    next(action);
}
