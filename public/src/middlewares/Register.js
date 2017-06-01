import request from 'superagent';

export default store=>next=>action=> {
    switch (action.type) {
        case 'REGISTER':
            request.post('/register')
                .send({
                    "username": action.content.username,
                    "password": action.content.password,
                    "sex": action.content.sex,
                    "phone": action.content.phone,
                    "address": action.content.address,
                })
                .end((err, res)=> {
                    if (res.statusCode == 201) {
                        alert("注册成功");
                    }
                });
            break;
        case 'IS_EXIT':
            request.post('/exitUser')
                .send({"username": action.content})
                .end((err, res)=> {
                    next({type: 'USER_EXIT', content: res.text});
                });
            break;
        case 'GET_ID':
            request.get('/getId')
                .end((err,res)=>{
                    next({type:"THE_ID",content:res.text})
                })
    }
    next(action);
}