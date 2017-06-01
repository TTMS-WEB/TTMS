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
                if (res.body.addResult) {
                    next({type: action.type, newPlay: res.body});
                }
                else {
                    next({type: "ERRTIP", addResult: false});
                }
            })
    }
    else if (action.type === 'SEARCHPLAY') {
        request.post('/searchPlay')
            .send({searchPlayName: action.searchPlayName})
            .end((err, res)=> {
                next({type: 'CHANGEPLAY', resultPlay: res.body});
            })
    }
    else if(action.type === 'REMOVEPLAY'){
        request.post('/removePlay')
            .send({playName:action.deletePlayName})
            .end((err,res)=>{
                next({type: 'CHANGEPLAY', resultPlay: res.body});
            })
    }
    else if(action.type === 'MODIFYPLAY'){
        request.post('/modifyPlay')
            .send({newPlay:action.newPlay})
            .end((err,res)=>{
                next({type: 'CHANGEPLAY', resultPlay: res.body});
            })
    }
    else {
        next(action);
    }
}