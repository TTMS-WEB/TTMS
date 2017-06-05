const Login = (state ={} , action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return action.content;
        break;
        case 'FAIL_TO_LOGIN':
            return action.content;
        break;
        case 'USERNAME_GOT':
            return action.data;
            break;

    }
    return state;
};
export default Login;
