import { connect } from "react-redux";

// Custom
import Profile from "../components/Profile";
import { receiveProfilesAction } from "../actions/Action";

const mapDispatchToProps = dispatch => {
  return {
    receiveProfiles: profiles => dispatch(receiveProfilesAction(profiles)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);