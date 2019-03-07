import { connect } from "react-redux";

// Custom
import Home from "../components/Home";
import { receiveTilesAction } from "../actions/Action";

const mapDispatchToProps = dispatch => {
  return {
    receiveTiles: dashBoardTiles => dispatch(receiveTilesAction(dashBoardTiles)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);