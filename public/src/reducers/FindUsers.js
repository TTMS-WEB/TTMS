const FindUsers = (state = {}, action) => {
    switch (action.type) {
        case "NOT_EXIT":
            console.log(action.content);
            return action.content;
        break;
    }
    return state;
};
export default FindUsers;