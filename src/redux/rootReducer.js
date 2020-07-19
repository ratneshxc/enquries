import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import query from '../screen/Enquries/reducer';
import RootStack from '../navigation/routes';

const navReducer = createNavigationReducer(RootStack);

const rootReducer = combineReducers({
  nav: navReducer,
  query
});

export default rootReducer;
