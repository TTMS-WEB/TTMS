import {connect} from 'react-redux';
import RootNav from '../components/RootNav';
import {withRouter} from 'react-router';
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RootNav));
