const sale = (studioId)=>{
  return{
      type:'GET_SEAT',
      studioId
  }
};
const buyTicket=(studioId,location)=>{
    return{
        type:'BUY_TICKET',
        studioId,
        location
    }
};

module.exports={
    sale,
    buyTicket
};