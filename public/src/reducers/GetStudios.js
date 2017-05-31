const GetStudios = (state = [],action) =>{
    switch (action.type){
        case 'ALL_STUDIOS':
            return action.content;
        break;
    }
    return state;
};

export default GetStudios;