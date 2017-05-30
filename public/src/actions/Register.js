const isExit = (username)=> {
    return {
        type: "IS_EXIT",
        content: username
    }
};
const register = (content)=> {
    return {
        type: "REGISTER",
        content: content
    }

};
module.exports = {isExit, register};