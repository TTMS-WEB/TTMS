import request from 'superagent';

export default store=>next=>action=>{
    switch(action.type) {
        case 'GET_STUDIOS':
            request.get(`/studios`)
                .end((err,res) =>{
                    next({type:'ALL_STUDIOS',content:res.body})
                });
            break;
    }
    next(action);
}
