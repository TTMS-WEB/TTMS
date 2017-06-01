const showPlay = ()=> {
    return {type: "FINDPLAY"}
};

const addPlay = (newPlay)=> {
    return {type: 'ADDPLAY',
        playName: newPlay.playName,
        playTime: newPlay.playTime,
        playActor: newPlay.playActor,
        playPrice: newPlay.playPrice,
        playType: newPlay.playType
    }
}

module.exports = {
    showPlay, addPlay
};