import {connect} from 'react-redux';
import Nav from '../components/Nav';
import GetAllEmployees from '../actions/GetAllEmployees';

const mapStateToProps = (state)=> {
    return state;
};

const mapDispatchToProps = (dispatch)=> {
    return {
        loadUsername:()=>{
            dispatch(GetAllEmployees.loadUsername());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
