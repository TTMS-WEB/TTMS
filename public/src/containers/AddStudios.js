import {connect} from 'react-redux';
import AddStudios from '../components/AddStudios';
import actions from '../actions/GetStudios';

const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getStudios:() =>{
            dispatch(actions.getStudios());
        },
        addStudio:(id,studioName,studioInfo,row,col)=>{
            dispatch(actions.addStudio(id,studioName,studioInfo,row,col));
        },
        searchStudio:(id)=>{
          dispatch(actions.searchStudio(id));
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(AddStudios);

