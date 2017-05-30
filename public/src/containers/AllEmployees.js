import {connect} from 'react-redux';
import Employee from '../components/Employee';
import actions from '../actions/GetAllEmployees';

const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllEmployees:()=>{
            dispatch(actions.getAllEmployees())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Employee);
