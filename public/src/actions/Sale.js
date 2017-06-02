const sale = (studioId)=>{
  return{
      type:'GET_SEAT',
      studioId
  }
};

module.exports={
    sale
};