import React from 'react';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import {connect, Provider} from 'react-redux';
import {StatusBar, Platform } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import RootStack from './src/navigation/routes';
import configureStore from './src/redux/store';
import {ModalHelper} from './src/helpers/utils';
import NavigationService from './src/helpers/NavigationService';

const store = configureStore();
const App = reduxifyNavigator(RootStack, 'root');
const mapStateToProps = (state) => ({state: state.nav});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Navigation extends React.Component {
  componentDidMount() {
    // ModalHelper.init(store.dispatch);
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView
          forceInset={{bottom: 'never'}}
          style={{flex: 1, backgroundColor: '#FFFFFFF', }}>
          <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <AppWithNavigationState
            ref={(navigator) =>
              NavigationService.setTopLevelNavigator(navigator)
            }
          />
        </SafeAreaView>
      </Provider>
    );
  }
}
