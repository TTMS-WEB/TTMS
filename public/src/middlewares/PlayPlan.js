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
            .send(action.planInfo)
            .end((err, res)=> {
                next({type: "CHANGEADDRESULT", addResult: res.body.addResult});
                store.dispatch(plan.showPlan(action.planInfo.page));
            })
    }
    else if (action.type === 'DELETEPLAN') {
        request.post('/deletePlan')
            .send(action.deleteInfo)
            .end(()=> {
                store.dispatch(plan.showPlan(action.deleteInfo.page))
            })
    }
    else if (action.type === 'FINDDAY') {
        request.post('/find')
            .send(action.findInfo)
            .end((err, res)=> {
                next({type: 'CHANGEPLANINFO', findResult: res.body.findResult});
            })
    }
    else if (action.type === 'MODIFYPLAN') {
        request.post('/modifyPlan')
            .send(action.modifyInfo)
            .end((err, res)=> {
                next({type: 'CHANGEMODIFYRESULT', modifyResult: res.body.modifyResult});
                store.dispatch(plan.showPlan(action.modifyInfo.page))
            })
    }
    else if (action.type === 'CHANGEPLANPAGE') {
        store.dispatch({type:'CHANGEPLANPAGESTATE',page:action.page});
        store.dispatch(plan.showPlan(action.page));
    }
    else {
        next(action);
    }
}