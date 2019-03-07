export const RECIEVE_TILES = 'RECIEVE_TILES';
export const RECIEVE_PROFILES = 'RECIEVE_PROFILES';

export function receiveTilesAction(dashBoardTiles) {
    return {
      type: RECIEVE_TILES,
      dashBoardTiles
    };
  }

  export function receiveProfilesAction(profiles) {
    return {
      type: RECIEVE_PROFILES,
      profiles
    };
  }