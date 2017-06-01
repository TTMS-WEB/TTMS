import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case'':
            request.get('/ticket')
                .end((err,res)=>{
                    next({})
                });
            break;
    }
    next(action);
}