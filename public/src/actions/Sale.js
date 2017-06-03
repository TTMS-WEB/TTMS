const sale = (ScheduleId)=>{
  return{
      type:'GET_SEAT',
      ScheduleId
  }
};
const buyTicket=(ScheduleId,location)=>{
    return{
        type:'BUY_TICKET',
        ScheduleId,
        location
    }
};

module.exports={
    sale,
    buyTicket
};