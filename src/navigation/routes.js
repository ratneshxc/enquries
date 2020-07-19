import {Animated, Easing} from 'react-native';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Enquries from '../screen/Enquries';
import Details from '../screen/Details';

const EnquriesRoute = createStackNavigator({
  Enquries: {
    screen: Enquries,
    navigationOptions: {header: null},
  },
  Details: {
    screen: Details,
    navigationOptions: {header: null},
  },
});

const RootStack = createSwitchNavigator(
  {
    EnquriesRoute: {
      screen: EnquriesRoute,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    cardStyle: {
      /**
       *   In order for modal to be transparent this is required
       *   React-navigation logic.
       */
      opacity: 1,
      backgroundColor: '#000000',
    },
    /**
     *  Disable screen transition for modal screens
     *
     */
    transitionConfig: () => (
      {
        transitionSpec: {
          duration: 0,
          timing: Animated.timing,
          easing: Easing.step0,
        },
      },
      (screenInterpolator = (sceneProps) => {
        const {layout, position, scene} = sceneProps;
        const {index} = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return {
          opacity,
          transform: [
            {
              translateY,
            },
          ],
        };
      })
    ),
  },
);

export default RootStack;
