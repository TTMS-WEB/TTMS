import {connect} from 'react-redux';
import Studios from '../components/Studios';
import actions from '../actions/GetStudios';

const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getStudios:() =>{
            dispatch(actions.getStudios());
        },
        deleteStudio:(id)=>{
            dispatch(actions.deleteStudio(id))
        },
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Studios);
