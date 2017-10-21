import { CHANGE_THEME } from '../constants/ActionTypes';

export function changeTheme(name: string) {
  return {
    type: CHANGE_THEME,
    name,
  };
}

