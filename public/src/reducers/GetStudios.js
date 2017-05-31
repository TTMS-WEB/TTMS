const GetStudios = (state = [],action) =>{
    switch (action.type){
        case 'ALL_STUDIOS':
            return action.content;
        break;
        case 'GET_ONE_STUDIO':
            return action.content
    }
    return state;
};

export default GetStudios;