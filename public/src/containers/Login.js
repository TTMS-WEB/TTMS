import {connect} from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Login);