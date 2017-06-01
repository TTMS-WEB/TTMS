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
        }
    }
};

export default connect(mapStateToProps, dispatchToProps)(Play);