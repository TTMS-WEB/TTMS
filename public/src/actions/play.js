const showPlay = (page)=> {
    return {type: "FINDPLAY", page};
};

const addPlay = (newPlay)=> {
    return {
        type: 'ADDPLAY',
        newPlay
    }
};

const searchPlay = (searchPlay)=> {
    return {
        type: "SEARCHPLAY",
        searchPlay,
    }
};

const removePlay = (deletePlay)=> {
    return {
        type: 'REMOVEPLAY',
        deletePlay
    }
};

const modifyPlay = (newPlay) => {
    return {
        type: "MODIFYPLAY",
        newPlay
    }
};

const changePage = (page)=>{
    return {
        type:"CHANGEPAGE",
        page
    }
};
module.exports = {
    showPlay, addPlay, searchPlay, removePlay, modifyPlay,changePage
};