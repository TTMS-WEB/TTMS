import {connect} from 'react-redux';
import Sale from '../components/Sale';
import actions from '../actions/Sale';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{
        getStudioInfo:()=>{
            dispatch(actions.StudioInfo());
        },
        sale:(studioId)=>{
            dispatch(actions.sale(studioId));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Sale);