import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function getRouteName() {
  let state = _navigator.navigation.state;

  while (state && state.routes && (!!state.index || state.index === 0)) {
    state = state.routes[state.index];
  }

  return state ? state.routeName : null;
}

export default {
  navigate,
  getRouteName,
  setTopLevelNavigator,
};
