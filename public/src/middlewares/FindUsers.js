import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'FIND_USERS':
            request.get(`/tasks/users/${action.content}`)
                .end((err, res)=> {
                    if (res.text) {
                        next({type: 'NOT_EXIT', content: res.text});
                    }
                    else {
                        next({type: 'NOT_EXIT', content: false})
                    }
                });
            break;
        case 'IS_LEGAL':
            request.post(`/tasks/isLegal/`)
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

