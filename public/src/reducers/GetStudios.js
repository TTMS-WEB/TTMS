const GetStudios = (state = [],action) =>{
    switch (action.type){
        case 'ALL_STUDIOS':
            console.log(action.content);
            return action.content;
        break;
    }
    return state;
};

export default GetStudios;