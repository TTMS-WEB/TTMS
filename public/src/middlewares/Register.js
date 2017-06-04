import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'REGISTER':
            request.post('/register')
                .send({
                    "username": action.content.username,
                    "password": action.content.password,
                    "email": action.content.email,
                    "phone": action.content.phone,
                    "address": action.content.address,
                })
                .end((err, res)=> {
                    if (res.body.status == true) {
                        alert("注册成功");
                    }
                });
            break;
        case 'IS_EXIT':
            request.post('/exitUser')
                .send({"username": action.content})
                .end((err, res)=> {
                    next({type: 'USER_EXIT', content: res.body});
                });
            break;
    }
    next(action);
}