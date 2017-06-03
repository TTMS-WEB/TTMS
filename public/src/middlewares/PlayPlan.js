import request from "superagent";
import plan from "../actions/playPlan";

export default store=>next=>action=> {
    if (action.type === 'FINDPLAN') {
        request.post('/showPlan')
            .send({page: action.page})
            .end((err, res)=> {
                next({type: "SHOWPLAN", plan: res.body})
            })
    }
    else if (action.type === 'ADDPLAN') {
        request.post('/addPlan')
            .send({planInfo: action.planInfo})
            .end((err, res)=> {
                next({type:"CHANGEADDRESULT",addResult:res.body.addResult});
                store.dispatch(plan.showPlan(action.planInfo.page));
            })
    }
    else {
        next(action);
    }
}