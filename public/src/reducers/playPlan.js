export default (state = {
    planInfo: [],
    page: 1,
    size: 0,
    maxsize: 0,
    plays: [],
    studios: [],
    addResult:'0',
    modifyResult:'0'
}, action)=> {
    if (action.type === 'SHOWPLAN') {
        return Object.assign({}, state, {
            planInfo: action.plan.planInfo,
            plays: action.plan.plays,
            studios: action.plan.studios,
            maxsize:action.plan.maxsize,
            size:action.plan.size
        });
    }
    else if(action.type === 'CHANGEADDRESULT'){
        return Object.assign({},state,{addResult:action.addResult});
    }
    else if(action.type === 'CHANGEPLANINFO'){
        return Object.assign({},state,{planInfo:action.findResult});
    }
    else if(action.type === 'CHANGEMODIFYRESULT'){
        return Object.assign({},state,{modifyResult:action.modifyResult})
    }
    else if(action.type === 'CHANGEPLANPAGESTATE'){
        return Object.assign({},state,{page:action.page})
    }
    return state;
}