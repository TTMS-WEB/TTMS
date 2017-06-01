const StudioInfo = ()=> {
    return {
        type: 'GET_STUDIO_INFO'
    }
};

const generateSeat = (studioId,seatArray)=> {
    return {
        type: 'GENERATE_SEAT',
        studioId,seatArray
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