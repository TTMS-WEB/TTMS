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
}
module.exports = {showPlan,addPlan};