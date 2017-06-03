import {connect} from 'react-redux';
import Schedule from '../components/PlayPlan';
import actions from '../actions/Schedule';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getPlayScheduleInfo:()=>{
            dispatch(actions.schedule())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
