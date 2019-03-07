import { connect } from "react-redux";

// Custom
import DashBoardList from "../components/DashBoardList";
import { getTiles } from "../reducers/RecordsReducer";
const mapStateToProps = state => {
  return {
    dashBoardTiles: getTiles(state),
  };
  
};

export default connect(
  mapStateToProps,
  null
)(DashBoardList);