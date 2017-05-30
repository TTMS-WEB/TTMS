import request from 'superagent';
import moment from 'moment';

export default store=>next=>action=> {
    switch (action.type) {
        case 'REGISTER':
            request.post('/tasks/register')
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
            request.post('/tasks/exitUser')
                .send({"username": action.content})
                .end((err, res)=> {
                    next({type: 'USER_EXIT', content: res.text});
                })
    }
    next(action);
}