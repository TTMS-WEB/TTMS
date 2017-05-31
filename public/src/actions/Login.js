const findUsers = (content)=> {
    return {
        type: 'FIND_USERS',
        content: content
    }
};

const isLegal = (content)=> {
    return {
        type: 'IS_LEGAL',
        content: content
    }
};

module.exports = {
    findUsers,
    isLegal
};