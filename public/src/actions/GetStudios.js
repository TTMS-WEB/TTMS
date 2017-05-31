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
module.exports = {
    getStudios,
    addStudio,
    searchStudio,
    deleteStudio
};
