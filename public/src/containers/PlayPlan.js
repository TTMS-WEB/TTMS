import {connect} from 'react-redux';
import PlayPlan from '../components/PlayPlan';
import plan from '../actions/playPlan';

const mapStateToProps = (state)=>{
    return {
        playPlan:state.playPlan,
        Nav:state.Nav
    }
};

const mapDispatchToProps =(dispatch)=>{
    return {
        showPlan:(page)=>{
            dispatch(plan.showPlan(page));
        },

        onAddPlan:(planInfo)=>{
            dispatch(plan.addPlan(planInfo));
        },
        onDeletePlan:(deleteInfo)=>{
            dispatch(plan.deletePlan(deleteInfo));
        },
        onFindPlan:(findInfo)=>{
            dispatch(plan.findDay(findInfo))
        },
        onModify:(modifyInfo)=>{
            dispatch(plan.modifyPlan(modifyInfo));
        },
        changePage:(page)=>{
            dispatch(plan.changePage(page));
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(PlayPlan);
