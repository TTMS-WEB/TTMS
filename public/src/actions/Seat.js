const Seat = (studioId)=> {
    return {
        type:'GET_ROW_COL',
        studioId
    }
};

module.exports = {
    Seat
};