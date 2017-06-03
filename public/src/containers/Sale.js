import {connect} from 'react-redux';
import Sale from '../components/Sale';
import actions from '../actions/Sale';
import actions1 from '../actions/Seat';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getStudioInfo:()=>{
            dispatch(actions1.StudioInfo());
        },
        sale:(studioId)=>{
            dispatch(actions.sale(studioId));
        },
        buyTicket:(studioId,location)=>{
            dispatch(actions.buyTicket(studioId,location));
        }

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Sale);