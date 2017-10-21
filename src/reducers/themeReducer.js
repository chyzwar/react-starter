import DefaultTheme from '../constants/DefaultTheme';
import { CHANGE_THEME } from '../constants/ActionTypes';

function themeReducer(state = DefaultTheme, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return state;
    default:
      return state;
  }
}

export default themeReducer;
