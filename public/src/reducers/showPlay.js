export default (state=[],action)=>{
    if(action.type === "SHOWPLAY"){
        return action.playInfo;
    }
    return state;
}