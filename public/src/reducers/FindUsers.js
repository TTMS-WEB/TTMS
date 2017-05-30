const FindUsers = (state = " ", action) => {
    switch (action.type) {
        case "NOT_EXIT":
            return action.content;
    }
    return state;
};
export default FindUsers;