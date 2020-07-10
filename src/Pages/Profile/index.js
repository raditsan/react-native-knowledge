import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Profile(props) {
  const [nama, setNama] = useState('default');
  const [alamat, setAlamat] = useState('default');

  useEffect(() => {
    console.log('useEffectNama');
  }, []);

  let timer = 0;
  useEffect(() => {
    timerCount();
    console.log('timerCount');
    return () => {
      clearTimeout(timer);
    }
  }, []);

  function timerCount() {
    timer = setTimeout(() => {
      console.log('timer');
      timerCount();
    }, 1000);
  }

  function f() {
    setNama(
      Math.random()
        .toString(36)
        .substr(8),
    );
    // setAlamat(Math.random().toString(36).substr(8));
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.route.params.nama}</Text>
      <Text>{props.route.params.alamat}</Text>
      <Text style={{fontSize: 20, color: 'red'}}>{nama}</Text>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'red', borderRadius: 5}}
        onPress={() => f()}>
        <Text style={{color: 'white'}}>Test</Text>
      </TouchableOpacity>
    </View>
  );
}
