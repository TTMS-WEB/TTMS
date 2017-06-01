import {connect} from 'react-redux';
import Employee from '../components/Employee';
import actions from '../actions/GetAllEmployees';

const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        searchEmployee:(employeeName)=>{
            dispatch(actions.getOneEmployee(employeeName));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Employee);
