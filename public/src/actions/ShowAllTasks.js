const showTaskAdd = (index)=> {
    return {type: 'SHOW_TASK',index}
};
const stopRedirect = ()=> {
    return {
        type: 'STOP_REDIRECT'
    }
};
const loadUsername = ()=> {
    return {
        type: 'USERNAME_LOADED'
    }
};
const showTaskSub = (index)=> {
    return {type: 'SHOW_TASK_SUB',index}
};
module.exports = {
    showTaskAdd,
    stopRedirect,
    loadUsername,
    showTaskSub
};