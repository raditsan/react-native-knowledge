import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Pengguna from '../Pengguna';
import {bindActionCreators} from 'redux';
import {connect, useDispatch, useSelector} from 'react-redux';

import {increment, decrement} from '../../Redux/Action/increment';
import setUserAction from '../../Redux/Action/setUserAction';
import {USERDATA} from '../../Redux/ActionType';

export default function HomeScreen({
  navigation,
  stateIncrement,
  // penambahan,
  // pengurangan,
  // userData,
  // setUser,
}) {
  const userData = useSelector(state => state.userDataReducer);
  const actionRedux = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <View style={{backgroundColor: '#DBDBDB'}}>
        <Text>State Redux Increment {stateIncrement}</Text>
        <Text>State Redux USER {JSON.stringify(userData, null, 3)}</Text>

        <TouchableOpacity
          style={{
            marginVertical: 10,
            padding: 10,
            backgroundColor: 'red',
            borderRadius: 5,
          }}
          onPress={() =>
            actionRedux({
              type: USERDATA,
              userData: {id: Math.floor(Math.random() * 1000), name: 'adit'},
            })
          }>
          <Text style={{color: 'white', textAlign: 'center'}}>Do Set User</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginVertical: 10,
            padding: 10,
            backgroundColor: 'red',
            borderRadius: 5,
          }}
          onPress={() => penambahan()}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Do Increment
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginVertical: 10,
            padding: 10,
            backgroundColor: 'red',
            borderRadius: 5,
          }}
          onPress={() => pengurangan()}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Do Decrement
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() =>
          navigation.navigate('Profile', {nama: 'adit', alamat: 'bogor'})
        }>
        <Text style={{color: 'white'}}>Navigasi ke Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => navigation.navigate('MyPhoto')}>
        <Text style={{color: 'white'}}>Navigasi ke MyPhoto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => navigation.navigate('User')}>
        <Text style={{color: 'white'}}>Navigasi ke User</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue', borderRadius: 5}}
        onPress={() => navigation.navigate('Pengguna')}>
        <Text style={{color: 'white'}}>Navigasi ke Pengguna</Text>
      </TouchableOpacity>
    </View>
  );
}

//
// function stateToProps(state) {
//   return {
//     stateIncrement: state.incrementReducer,
//     userData: state.userDataReducer,
//   };
// }
//
// function actionToProps(dispatch) {
//   return bindActionCreators(
//     {penambahan: increment, pengurangan: decrement, setUser: setUserAction},
//     dispatch,
//   );
// }
//
// export default connect(
//   stateToProps,
//   actionToProps,
// )(HomeScreen);
