const showPlan = (page)=> {
    return {
        type: "FINDPLAN",
        page
    }
};

module.exports = {showPlan};