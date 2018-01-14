import BlueTheme from 'constants/BlueTheme';
import TealTheme from 'constants/TealTheme';

import { CHANGE_THEME } from 'constants/ActionTypes';

function themeReducer(state = BlueTheme, action) {
  switch (action.type) {
    case CHANGE_THEME:
      if (action.name === 'teal') return TealTheme;
      if (action.name === 'blue') return BlueTheme;
      return state;
    default:
      return state;
  }
}

export default themeReducer;
