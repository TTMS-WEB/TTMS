import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'GET_PLAY_SCHEDULE':
            request.get('/schedule')
                .end((err,res)=>{
                    next({type:'SHOW_PLAY_SCHEDULE',content:res.body});
                });
            break;
    }
    next(action);
}
