import { connect } from "react-redux";

// Custom
import DonorProfileList from "../components/DonorProfileList";
import { getProfiles } from "../reducers/RecordsReducer";
const mapStateToProps = state => {
  return {
    profiles: getProfiles(state),
  };
  
};

export default connect(
  mapStateToProps,
  null
)(DonorProfileList);