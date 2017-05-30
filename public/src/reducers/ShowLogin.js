const ShowLogin = (state = {}, action)=> {
    switch (action.type) {
        case "SHOW_LOGIN":
            state = {show: "login"};
            return state.show;
        case "SHOW_REGISTER":
            state = {show: "register"};
            return state.show;
    }
    return state;
};
export default ShowLogin;
