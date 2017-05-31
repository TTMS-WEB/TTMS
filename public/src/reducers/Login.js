const Login = (state ={isLogged:false} , action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {isLogged:action.content};
        break;
        case 'FAIL_TO_LOGIN':
            return {isLogged:action.content};
        break;

    }
    return state;
};
export default Login;
