import {connect} from 'react-redux';
import Ticket from '../components/Ticket';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);