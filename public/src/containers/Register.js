import {connect} from 'react-redux';
import Register from '../components/Register';
import actions from '../actions/Register';

const mapStateToProps = (state)=> {
    return state;
};
const mapDispatchToProps = (dispatch)=> {
    return {
        onExit: (username)=> {
            dispatch(actions.isExit(username));
        },
        onRegister: (content)=> {
            dispatch(actions.register(content));
        },
        getId:()=>{
            dispatch(actions.getId());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);