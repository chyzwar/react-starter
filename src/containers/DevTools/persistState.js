import persistState from 'redux-devtools/lib/persistState';


export default persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/));
