const onLogin = ()=> {
    return {
        type: 'SHOW_LOGIN',
    }
};

const onRegister =() => {
    return {
        type:'SHOW_REGISTER',
    }
};

module.exports = {
    onLogin,
    onRegister
};
