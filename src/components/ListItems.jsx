import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';

// list of todo task
// add button ==> input box and submit button
// update list item
// delete list item

const list = [
  {
    id: 1,
    title: 'First Item',
    description: 'First Item Description',
    completed: false,
  },
  {
    id: 2,
    title: 'Second Item',
    description: 'Second Item Description',
    completed: false,
  },
];

const ListItems = () => {
  return (
    <View>
      {/* button should be designed in a proper way */}
      <Button title="Add" color={'#841584'} />

      {/* listings should be in a card */}
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default ListItems;
