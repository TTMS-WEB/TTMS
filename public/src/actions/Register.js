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

const getId = ()=>{
    return {
        type:"GET_ID",
    }
};
module.exports = {isExit, register,getId};