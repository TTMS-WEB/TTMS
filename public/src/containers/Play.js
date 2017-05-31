import {connect} from "react-redux";
import Play from "../components/Play";
import showPlay from '../actions/showPlay';

 const mapStateToProps = (state)=> {
    return {playInfo: state.showPlay};
};

const dispatchToProps = (dispatch)=>{
    return {
        showPlay:()=>{
            dispatch(showPlay());
        }
    }
}

export default connect(mapStateToProps,dispatchToProps)(Play);