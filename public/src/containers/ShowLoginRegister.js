import {connect} from 'react-redux';
import ShiftLoginRegister from '../components/ShiftLoginRegister';
import actions from '../actions/ShiftLoginRegister';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onLogin: ()=> {
            dispatch(actions.onLogin());
        },

        onRegister:() =>{
            dispatch(actions.onRegister());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShiftLoginRegister);
