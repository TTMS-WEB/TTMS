const showPlan = (page)=> {
    return {
        type: "FINDPLAN",
        page
    }
};

const addPlan = (planInfo)=>{
    return{
        type:"ADDPLAN",
        planInfo
    }
};

const deletePlan = (deleteInfo)=>{
    return{
        type:'DELETEPLAN',
        deleteInfo
    }
}
module.exports = {showPlan,addPlan,deletePlan};