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
const location = (i, j)=> {
    return {
        type: 'CHANGE_SEAT_STATUS',
        i,
        j
    }
};

module.exports = {
    StudioInfo,
    generateSeat,
    location
};