import {NavigationActions} from 'react-navigation';

export const ModalHelper = {
  init(dispatch) {
    this.dispatch = dispatch;
  },

  _navigate(routeName, params) {
    this.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  },

  closeAlert() {
    NavigationActions.back();
  },
  success(message, title = 'Antwak') {
    this._navigate('Modal', {
      title,
      message,
      mode: 'success',
      actions: [
        {
          text: 'OK',
          onPress: () => this.closeAlert(),
        },
      ],
    });
  },

  error(message, title = 'Antwak') {
    this._navigate('Modal', {
      title,
      message,
      mode: 'error',
      actions: [
        {
          text: 'OK',
          onPress: () => this.closeAlert(),
        },
      ],
    });
  },

  warning(message, title = 'Antwak') {
    this._navigate('Modal', {
      title,
      message,
      mode: 'warning',
      actions: [
        {
          text: 'OK',
          onPress: () => this.closeAlert(),
        },
      ],
    });
  },
};
