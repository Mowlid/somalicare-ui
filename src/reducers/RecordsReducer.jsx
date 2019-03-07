import { RECIEVE_TILES } from "../actions/Action";
import { RECIEVE_PROFILES } from "../actions/Action";

const initalState = {
    dashBoardTiles: [],
    profiles:[]
};

const dashTiles = (state = initalState, action) => {
  var newState;
  switch (action.type) {
    case RECIEVE_TILES:
      newState = Object.assign({}, state, {
        dashBoardTiles: action.dashBoardTiles
      });
      break;
      case RECIEVE_PROFILES:
      newState = Object.assign({}, state, {
        profiles: action.profiles
      });
      break;
    default:
      newState = state;
  }
  return newState;
};

export default dashTiles;

// Selectors

export function getTiles(state) {
   return state.dashBoardTiles;
}

export function getProfiles(state){
  return state.profiles;
}