/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Text,
  View,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from './styles';
import {connect} from 'react-redux';
function index(props) {
  const [state, setState] = useState({
    details: []
  });

  const goBackNavigation = () => props.navigation.goBack()

    useEffect(() => {
        const { enqId } = props.navigation.state.params;
        BackHandler.addEventListener('hardwareBackPress', goBackNavigation);
        const getData = async () => {
            let detail = await props.queryData.dataList.filter(item => item.enqId === enqId)
            setState((prevState) => ({
                ...prevState,
                details: detail
              }))
        }
        getData();
     }, [])
  return (
    <View style={styles.container}>
        <Avatar
              size="large"
              rounded
              title={state.details[0] && state.details[0].name[0]}
              overlayContainerStyle={{backgroundColor: 'lightblue'}}
            />
        <Text style={styles.boldText}>{state.details[0] && state.details[0].name}</Text>
        <Text style={styles.text}>{state.details[0] && state.details[0].categoryName}</Text>
        <Text style={styles.text}>{state.details[0] && state.details[0].location}</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    queryData: state.query.getQuery.data
  };
}

export default connect(mapStateToProps, {
    
})(index);
