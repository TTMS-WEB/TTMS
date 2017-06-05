import {connect} from "react-redux";
import Play from "../components/Play";
import play from "../actions/play";

const mapStateToProps = (state)=> {
    return {play: state.ShowPlay,
    Login:state.Login};
};

const dispatchToProps = (dispatch)=> {
    return {
        showPlay: (page)=> {
            dispatch(play.showPlay(page));
        },
        addPlay: (newPlay)=> {
            dispatch(play.addPlay(newPlay))
        },
        searchPlay: (searchPlay)=> {
            dispatch(play.searchPlay(searchPlay))
        },
        removePlay: (deletePlay)=> {
            dispatch(play.removePlay(deletePlay))
        },
        modifyPlay: (newPlay)=> {
            dispatch(play.modifyPlay(newPlay))
        },
        changePage: (page)=> {
            dispatch(play.changePage(page));
        }
    }
};

export default connect(mapStateToProps, dispatchToProps)(Play);