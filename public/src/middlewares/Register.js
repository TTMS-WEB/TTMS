import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'REGISTER':
            request.post('/ttms/register')
                .send({
                    "username": action.content.username,
                    "password": action.content.password,
                    "regtime": moment().format('YYYY-MM-DD HH:mm:ss')
                })
                .end((err, res)=> {
                    if (res.statusCode == 201) {
                        alert("注册成功");
                    }
                });
            break;
        case 'IS_EXIT':
            request.post('/ttms/exitUser')
                .send({"username": action.content})
                .end((err, res)=> {
                    next({type: 'USER_EXIT', content: res.text});
                });
            break;
    }
    next(action);
}