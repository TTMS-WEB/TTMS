import request from "superagent";

export default store=>next=>action=> {
    if (action.type === 'FINDPLAN') {
        request.post('/showPlan')
            .send({page: action.page})
            .end((err, res)=> {
                next({type: "SHOWPLAN", plan: res.body})
            })
    }
    else {
        next(action);
    }
}