const GetRegisterId = (state = 0, action)=> {
    switch (action.type) {
        case "THE_ID":
            return action.content;
            break;
    }
    return state;
};
export default GetRegisterId;

