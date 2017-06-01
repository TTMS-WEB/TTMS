import {connect} from 'react-redux';
import Login from '../components/Login';
import actions from '../actions/Login';
import {withRouter} from 'react-router';

const mapStateToProps = (state)=> {
    return state
};

const mapDispatchToProps = (dispatch)=> {
    return {
        findUsers: (content)=> {
            dispatch(actions.findUsers(content));
        },

        isLegal: (content) => {
            dispatch(actions.isLegal(content));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
