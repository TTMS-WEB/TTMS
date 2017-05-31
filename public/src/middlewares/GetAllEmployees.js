import request from 'superagent';

export default store=>next=>action=>{
    switch(action.type){
        case 'GET_ALL_EMPLOYEES':
            request.get(`/ttms/allEmployees`)
                .end((err,res) =>{
                    next({type:'SHOW_ALL_EMPLOYEES',content:res.body})
                });
            break;
    }
    next(action);
}
