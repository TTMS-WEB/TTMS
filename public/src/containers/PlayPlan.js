import {connect} from 'react-redux';
import PlayPlan from '../components/PlayPlan';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        /*getPlayInfo:()=>{
            dispatch()
        }*/
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayPlan);
