import request from 'superagent';

export default store=>next=>action=>{
    switch(action.type){
        case 'GET_ALL_EMPLOYEES':
            request.get(`/allEmployees`)
                .end((err,res) =>{
                    next({type:'SHOW_ALL_EMPLOYEES',content:res.body})
                });
            break;
        case 'GET_ONE_EMPLOYEE':
            request.get(`/searchEmployee/${action.employeeName}`)
                .end((err,res)=>{
                    console.log(res.body);
                    next({type:'SHOW_ONE_EMPLOYEE',content:res.body})
                });
            break;
        case 'DELETE_EMPLOYEE':
            request.delete(`deleteEmployee/${action.name}`)
                .end((err,res)=>{
                    store.dispatch({type:'GET_ALL_EMPLOYEES'})
                });
            break;
    }
    next(action);
}
