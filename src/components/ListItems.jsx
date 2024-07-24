import React from 'react';
import {Text, View} from 'react-native';

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
      <Text>Hello, this is my first todo app</Text>
    </View>
  );
};

export default ListItems;
