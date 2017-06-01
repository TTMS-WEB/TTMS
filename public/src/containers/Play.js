import {connect} from "react-redux";
import Play from "../components/Play";
import play from "../actions/play";

const mapStateToProps = (state)=> {
    return {play: state.ShowPlay};
};

const dispatchToProps = (dispatch)=> {
    return {
        showPlay: ()=> {
            dispatch(play.showPlay());
        },
        addPlay: (newPlay)=> {
            dispatch(play.addPlay(newPlay))
        },
        searchPlay:(searchPlayName)=>{
            dispatch(play.searchPlay(searchPlayName))
        },
        removePlay:(deletePlayName)=>{
            dispatch(play.removePlay(deletePlayName))
        },
        modifyPlay:(newPlay)=>{
            dispatch(play.modifyPlay(newPlay))
        }
    }
};

export default connect(mapStateToProps, dispatchToProps)(Play);