const Register = (state = {}, action)=> {
    switch (action.type) {
        case "USER_EXIT":
            return action.content;
        break;
    }
    return state;
};
export default Register;
