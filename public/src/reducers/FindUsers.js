const FindUsers = (state = " ", action) => {
    switch (action.type) {
        case "NOT_EXIT":
            return action.content;
        break;
    }
    return state;
};
export default FindUsers;