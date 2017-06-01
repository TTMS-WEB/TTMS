export default (state = {playInfo: [], addResult: '0'}, action)=> {
    if (action.type === "SHOWPLAY") {
        return {playInfo: action.playInfo, addResult: state.addResult};
    }
    else if (action.type === 'ADDPLAY') {

        return {playInfo: [...state.playInfo, action.newPlay.addPlayInfo], addResult: action.newPlay.addResult}
    }
    else if (action.type === 'ERRTIP') {
        return {playInfo:state.playInfo,addResult:action.addResult}
    }
    else if(action.type === 'CHANGEPLAY'){
        return{playInfo:action.resultPlay}
    }
    return state;
}