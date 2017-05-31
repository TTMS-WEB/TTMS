const ShowLogin = (state = {}, action)=> {
    switch (action.type) {
        case "SHOW_LOGIN":
            state = {show: "login"};
            return state.show;
        break;
        case "SHOW_REGISTER":
            state = {show: "register"};
            return state.show;
        break;
    }
    return state;
};
export default ShowLogin;
