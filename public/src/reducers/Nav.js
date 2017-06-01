export default (state='',action)=>{
    switch(action.type){
        case 'USERNAME_GOT':
            return action.data;
    }
    return state;
}