import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'FIND_USERS':
            request.get(`/users/${action.content}`)
                .end((err, res)=> {
                    if (res.body.isExit) { //用户名存在，返回数据{"isExit":true,"data":data}
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
                        next({type: 'FAIL_TO_LOGIN', content: res.text})
                    }
                    else {
                        next({type: 'LOGIN_SUCCESS', content: true})
                    }
                });
            break;
    }
    next(action);
}

