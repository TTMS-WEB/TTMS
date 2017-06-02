import {connect} from 'react-redux';
import Sale from '../components/Sale';
import actions from '../actions/Sale';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Sale);