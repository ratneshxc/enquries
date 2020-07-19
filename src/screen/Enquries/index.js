/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Text,
  View,
  FlatList,
  Dimensions,
  Linking, Platform
} from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';
import {TouchableRipple} from 'react-native-paper';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {
    getQueryData
} from './action';
const { width } = Dimensions.get('window');
function index(props) {
  useEffect(() => {
      const getData = async () => {
        await props.getQueryData()
      } 
      getData();
   }, [])


   const dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    }
    else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

   renderItem = ({ item, index }) => {
     return (
      <TouchableRipple onPress={()=> props.navigation.navigate('Details', {
        enqId: item.enqId
      })} activeOpacity={10}>
      <View style={styles.container}>
        <View style={styles.margin5}>
            <Avatar
              size="small"
              rounded
              title={item.name[0]}
              activeOpacity={0.7}
              overlayContainerStyle={{backgroundColor: index % 2 === 0 ? 'orange': 'lightblue'}}
            />
        </View>
        <View style={styles.wrapDetails}>
        <Text style={{  width: width * 0.7, fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={styles.fontSize13}>{item.categoryName}</Text>
        <Text style={styles.fontSize13}>{item.location}</Text>
        <Text style={styles.fontSize13}>{'At the Institute'}</Text>
        </View>
        <View style={styles.dialBox}>
        <Text style={styles.text9Bold}>16 Hour Ago</Text>
        <TouchableRipple onPress={()=>dialCall(item.phoneNumber)}>
        <Icon
          name='mobile'
          size={20}
          style={{ color: index % 2 === 0 ? 'orange' : 'lightblue', alignSelf: 'center'}} />
        </TouchableRipple>
        </View>
       </View>
       </TouchableRipple>
     )
   }
  return (
    <View style={{ }}>
     <FlatList 
        data={props.queryData.dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    queryData: state.query.getQuery.data
  };
}

export default connect(mapStateToProps, {
    getQueryData,
})(index);
