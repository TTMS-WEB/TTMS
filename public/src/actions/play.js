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
};

const searchPlay = (searchPlayName)=>{
    return {
        type:"SEARCHPLAY",
        searchPlayName,
    }
};

const removePlay = (deletePlayName)=>{
    return{
        type:'REMOVEPLAY',
        deletePlayName
    }
};

const modifyPlay = (newPlay) =>{
    return {
        type:"MODIFYPLAY",
        newPlay
    }
}
module.exports = {
    showPlay, addPlay,searchPlay,removePlay,modifyPlay
};