export default (state = {playInfo: [], addResult: '0',page:1,maxsize:0}, action)=> {
    if (action.type === "SHOWPLAY") {
        return Object.assign({},state,{playInfo:action.playInfo,maxsize:action.maxsize});
    }
    else if (action.type === 'ERRTIP') {
        return Object.assign({},state,{addResult:action.addResult});
    }
    else if(action.type === 'CHANGEPLAY'){
        return Object.assign({},state,{playInfo:action.resultPlay})
    }
    else if(action.type === 'CHANGESTATE'){
        return Object.assign({},state,{page:action.page})
    }

    return state;
}