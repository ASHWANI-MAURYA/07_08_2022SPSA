import { selectedItem } from "../actions/useroptions";

const initialState = {
  selectedItem: "AcrossRegionJourney"
};
const userOptionReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case selectedItem:
      return { ...state, selectedItem: actions.selectedItem };
    default:
      return state;
  }
};
export default userOptionReducer;
