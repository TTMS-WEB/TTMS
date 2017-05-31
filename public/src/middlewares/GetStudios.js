import request from 'superagent';

export default store=>next=>action=>{
    switch(action.type) {
        case 'GET_STUDIOS':
            request.get(`/studios`)
                .end((err,res) =>{
                    next({type:'ALL_STUDIOS',content:res.body})
                });
            break;
        case 'ADD_STUDIO':
            request.post(`/addStudio`)
                .send({"id":action.id,"studioName":action.studioName,
                    "studioInfo":action.studioInfo,"row":action.row,"col":action.col})
                .end((err,res)=>{
                    store.dispatch({type:'GET_STUDIOS'})
                });
            break;
        case 'SEARCH_STUDIO':
            request.get(`/search/studio/${action.id}`)
                .end((err,res)=>{
                    next({type:'GET_ONE_STUDIO',content:res.body})
                });
            break;
        case 'DELETE_STUDIO':
            request.delete(`/delete/studio/${action.id}`)
                .end((err,res)=>{
                    store.dispatch({type:'GET_STUDIOS'})
                });
            break;
    }
    next(action);
}
