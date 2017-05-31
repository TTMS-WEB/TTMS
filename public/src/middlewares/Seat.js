import request from 'superagent';

export default store=>next=>action=>{
    switch (action.type){
        case 'GET_ROW_COL':
            request.get(`/ttms/rowcol/${action.studioId}`)
                .end((err,res)=>{
                    next();
                });
            break;
    }
    next(action);
}