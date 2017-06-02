import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'GET_SEAT':
            request.get(`/sale/${action.studioId}`)
                .end((err,res)=>{
                    next({type:'GET_SEAT_BY_STUDIO',content:res.body});
                });
            break;
    }
    next(action)
}
