export default (state = {
    planInfo: [],
    page: 1,
    size: 0,
    maxsize: 0,
    plays: [],
    studios: []
}, action)=> {
    if (action.type === 'SHOWPLAN') {
        return Object.assign({}, state, {
            planInfo: action.plan.planInfo,
            plays: action.plan.plays,
            studios: action.plan.studios
        });
    }
    return state;
}