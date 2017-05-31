import {connect} from 'react-redux';
import Seat from '../components/Seat';
import actions from '../actions/Seat';

const mapStateToProps = (state)=>{
    return state;
};

const mapDispatchToProps = (dispatch)=>{
    return{
        onRowCol:(studioId)=>{
            dispatch(actions.Seat(studioId));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Seat);