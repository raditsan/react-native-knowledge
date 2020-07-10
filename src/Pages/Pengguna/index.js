/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, SafeAreaView, Text} from 'react-native';
import PenggunaItem from './PenggunaItem';

export default function Pengguna() {
  const [state, setState] = useState({
    listData: [],
    loading: true,
    isRefreshing: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?page=1&results=30&seed=abc')
      .then(response => response.json())
      .then(result => {
        setState({
          isRefreshing: false,
          loading: false,
          listData: result.results,
        });
      })
      .catch(error => {
        console.log('error ', error);
        setState({...state, isRefreshing: false, loading: false});
      });
  };

  const refreshData = () => {
    setState({...state, isRefreshing: true});
    fetchData();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {state.loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          // onEndReached={() => alert('onEndReached')}
          ListFooterComponent={<Text>Loading</Text>}
          onRefresh={() => refreshData()}
          refreshing={state.isRefreshing}
          onEndReachedThreshold={0.7}
          data={state.listData}
          showsVerticalScrollIndicator={false}
          renderItem={item => <PenggunaItem data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
}
