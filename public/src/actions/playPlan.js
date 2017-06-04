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
};

const findDay = (findInfo)=>{
    return {
        type:'FINDDAY',
        findInfo
    }
};

const modifyPlan = (modifyInfo)=>{
    return{
        type:'MODIFYPLAN',
        modifyInfo
    }
};

const changePage = (page)=>{
    return {
        type:"CHANGEPLANPAGE",
        page
    }
};
module.exports = {showPlan,addPlan,deletePlan,findDay,modifyPlan,changePage};