import {connect} from 'react-redux';
import Ticket from '../components/Ticket';
import actions from '../actions/Ticket';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getTicketInfo:()=>{
            dispatch(actions.getTicketInfo())
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);