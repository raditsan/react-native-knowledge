/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
function ListItem(props) {
  const item = props.data.item;
  const {first, last} = item.name;
  return (
    <View style={styles.contentItem}>
      <Text>{first + ' ' + last}</Text>
    </View>
  );
}

export default function User() {
  const [state, setState] = useState({
    listData: [],
    isRefreshing: false,
    loading: false,
  });

  useEffect(() => {
    console.log('useEffect');
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?page=5&results=10&seed=abc')
      .then(response => response.json())
      .then(result => {
        if (result.results) {
          setState({...state, listData: result.results, isRefreshing: false});
        }
      })
      .catch(error => {
        alert('Error ', error.message);
      });
  };

  const onRefresh = () => {
    setState({...state, isRefreshing: true});
    fetchData();
  };

  return (
    <FlatList

      onEndReached={() => console.log('aaa')}
      onEndReachedThreshold={0.7}
      // ListEmptyComponent={}
      // ListFooterComponent={}
      data={state.listData}
      onRefresh={() => onRefresh()}
      refreshing={state.isRefreshing}
      showsVerticalScrollIndicator={false}
      renderItem={item => <ListItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  contentItem: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 12,
  },
});
