import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: height * .10,
    width,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderBottomColor: 'transparent'
  },
  margin5: { margin: 5 },
  wrapDetails: {
    flex: 5,
    flexDirection: 'column',
    margin: 5,
    width: width * 0.7 
},
fontSize13: {
    fontSize: 13
},
dialBox: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    justifyContent: 'space-around'
  },
  text9Bold: { 
      fontSize: 9, 
      fontWeight: 'bold' }
});

export default styles;
