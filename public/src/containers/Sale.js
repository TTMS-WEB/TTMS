import {connect} from 'react-redux';
import Sale from '../components/Sale';
import actions from '../actions/Sale';
import actions1 from '../actions/Seat';
import {withRouter} from 'react-router';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getStudioInfo:()=>{
            dispatch(actions1.StudioInfo());
        },
        sale:(ScheduleId)=>{
            dispatch(actions.sale(ScheduleId));
        },
        buyTicket:(ScheduleId,location)=>{
            dispatch(actions.buyTicket(ScheduleId,location));
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Sale));