import {connect} from 'react-redux';
import PlayPlan from '../components/PlayPlan';

const mapStateToProps = (state)=>{
    return {
        playPlan:state.playPlan
    }
};

export default connect(mapStateToProps)(PlayPlan);