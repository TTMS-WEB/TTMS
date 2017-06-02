export default (state = {
    planInfo: [],
    page: 1,
    size: 0,
    maxsize: 0
}, action)=> {
    if (action.type === 'SHOWPLAN') {
        return Object.assign({},state,{planInfo:action.planInfo});
    }
    return state;
}