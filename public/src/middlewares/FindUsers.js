import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'FIND_USERS':
            request.get(`/users/${action.content}`)
                .end((err, res)=> {
                    if (res.body.isExit) { //用户名存在，返回数据{"isExit":true}
                        next({type: 'NOT_EXIT', content: res.body});
                    }
                    else {//用户不存在，返回数据{"isExit":false}
                        next({type: 'NOT_EXIT', content: res.body})
                    }
                });
            break;
        case 'IS_LEGAL':
            request.post(`/isLegal`)
                .send(action.content)
                .type('json')
                .end((err, res) => {
                    if (res.text) {
                        next({type: 'FAIL_TO_LOGIN', content: res.body})
                    }
                    else {
                        next({type: 'LOGIN_SUCCESS', content: res.body})
                    }
                });
            break;
        case 'USERNAME_LOADED':
            request.get('/legal-username')
                .end((err,res)=>{
                    if(!err&&res.text){
                        next({type: 'USERNAME_GOT', data: res.text})
                    }
                });
            break;
    }
    next(action);
}

