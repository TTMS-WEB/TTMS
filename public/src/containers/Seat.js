import {connect} from 'react-redux';
import Seat from '../components/Seat';
import actions from '../actions/Seat';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getStudioInfo:()=>{
          dispatch(actions.StudioInfo());
        },
        generateSeat:(studioId,seatArray)=>{
            dispatch(actions.generateSeat(studioId,seatArray));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Seat);