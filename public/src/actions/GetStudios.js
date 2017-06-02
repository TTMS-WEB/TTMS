const getStudios = () => {
    return {
        type: 'GET_STUDIOS'
    }
};

const addStudio = (id, studioName, studioInfo, row, col)=> {
    return {
        type: 'ADD_STUDIO',
        id, studioName, studioInfo, row, col

    }
};

const searchStudio = (id) =>{
    return {
        type:'SEARCH_STUDIO',
        id
    }
};


const deleteStudio = (id) =>{
    return {
        type:'DELETE_STUDIO',
        id
    }
};

const modifyStudio = (id,studioName, studioInfo, row, col) =>{
    return {
        type:'MODIFY_STUDIO',
        id,studioName, studioInfo, row, col
    }
};



module.exports = {
    getStudios,
    addStudio,
    searchStudio,
    deleteStudio,
    modifyStudio
};
