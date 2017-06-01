import request from "superagent";

export default store=>next=>action=> {
    if (action.type === 'FINDPLAY') {
        request.get('/showPlay')
            .end((err, res)=> {
                next({type: "SHOWPLAY", playInfo: res.body});
            })
    }
    else if (action.type === 'ADDPLAY') {
        request.post('/addPlay')
            .send(action)
            .end((err, res)=> {
                if(res.body.addResult){
                    next({type: action.type,newPlay:res.body});
                }
                else {
                    next({type:"ERRTIP",addResult:false});
                }
            })
    }
    else {
        next(action);
    }
}