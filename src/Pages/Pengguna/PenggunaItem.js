import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function PenggunaItem(props) {
  const item = props.data.item;
  const {first, last} = item.name;
  const {medium} = item.picture;
  return (
    <View style={styles.contentItem}>
      <Image source={{uri: medium}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{first + ' ' + last}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  name: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  email: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: 'blue',
    fontStyle: 'italic',
  },
});
