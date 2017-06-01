import {connect} from 'react-redux';
import AddEmployee from '../components/AddEmployee';
import actions from '../actions/GetAllEmployees';

const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllEmployees:()=>{
            dispatch(actions.getAllEmployees())
        },
        deleteEmployee:(name)=>{
            dispatch(actions.deleteEmployee(name));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddEmployee);
