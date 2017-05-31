import request from 'superagent';

export default store=>next=>action=>{
    if(action.type === 'FINDPLAY'){
        request.get('/showPlay')
            .end((err,res)=>{
                next({type:"SHOWPLAY",playInfo:res.body});
            })
    }
    else {
        next(action);
    }
}