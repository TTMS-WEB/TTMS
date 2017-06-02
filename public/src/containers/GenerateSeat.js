import {connect} from 'react-redux';
import GenerateSeat from '../components/GenerateSeat';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GenerateSeat);