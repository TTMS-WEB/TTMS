const StudioInfo = ()=> {
    return {
        type: 'GET_STUDIO_INFO'
    }
};

const generateSeat = (studioId)=> {
    return {
        type: 'GENERATE_SEAT',
        studioId
    }
};
const location = (studioId,i)=> {
    return {
        type: 'CHANGE_SEAT_STATUS',
        studioId,
        i
    }
};

module.exports = {
    StudioInfo,
    generateSeat,
    location
};