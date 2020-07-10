/*
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  // const [nama, setNama] = useState('');
  // const [alamat, setAlamat] = useState('');

  const [state, setState] = useState({nama: '', alamat: ''});

  return (
    <SafeAreaView>
      <View style={[styles.body, {backgroundColor: 'gray'}]}>
        <Text style={styles.nama}>NoHp : {state.noHp}</Text>
        <Text style={styles.nama}>Nama : {state.nama}</Text>
        <Text
          style={[
            styles.nama,
            styles.alamat(state.alamat.toLocaleLowerCase().trim()),
          ]}>
          Alamat : {state.alamat}
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'nama'}
            value={state.nama}
            onChangeText={nama => setState({...state, nama, noHp: '98766'})}
          />
          <TextInput
            style={styles.input}
            placeholder={'alamat'}
            value={state.alamat}
            onChangeText={alamat => setState({...state, alamat})}
          />
          <Button
            title={'Kirim'}
            onPress={() =>
              Alert.alert(
                'Konfirmasi',
                'Apakah data sudah benar\nNama : ' +
                  state.nama +
                  '\n' +
                  'Alamat : ' +
                  state.alamat,
                [
                  {text: 'tidak'},
                  {text: 'ya', onPress: () => alert('Data terkirim')},
                ],
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    color: 'red',
  },
  nama: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    margin: 20,
    padding: 20,
    borderRadius: 13,
  },
  alamat: (value = 'bogor') => ({
    color:
      value === 'bogor'
        ? 'red'
        : value === 'bandung'
        ? 'yellow'
        : value === 'semarang'
        ? 'green'
        : 'black',
  }),
});

export default App;
*/

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStore} from 'redux';
import {Provider as ProviderRedux} from 'react-redux';
import {
  HomeScreen,
  Pengguna,
  Profile,
  User,
  Settings,
  Galery,
} from './src/Pages';
import allReducer from './src/Redux/Reducer';

const store = createStore(allReducer);
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function AlbumStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Galery" component={Galery} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ProviderRedux store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false, title: 'Home Nih'}}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="MyPhoto" component={AlbumStack} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Pengguna" component={Pengguna} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderRedux>
  );
};

export default App;
