import {connect} from "react-redux";
import Play from "../components/Play";

const mapStateToProps = (state)=> {
    return {playInfo: state.showPlay};
};

export default connect(mapStateToProps)(Play);