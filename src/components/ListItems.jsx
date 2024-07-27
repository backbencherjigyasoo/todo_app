import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddUpdateItem from './AddUpdateItem'; // Import the AddItemForm component

const initialList = [
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
    completed: true,
  },
];

const ListItems = () => {
  const [listItems, setListItems] = useState(initialList);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddItem = (item = {}) => {
    const newItem = {
      id: item.id || listItems.length + 1,
      title: item.title || '',
      description: item.description || '',
      completed: item.completed || false,
    };
    setListItems([...listItems, newItem]);
    setIsModalVisible(false); // Hide the modal after adding the item
  };

  const Item = ({
    item,
    onPress,
    backgroundColor,
    textColor,
    completed,
    completedColor,
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
      <Text style={[styles.description, {color: textColor}]}>
        {item.description}
      </Text>
      <Text style={[styles.completed, {color: completedColor}]}>
        {completed ? 'Completed' : 'Incompleted'}
      </Text>
      <View style={styles.buttons}>
        <Button
          title="Edit"
          onPress={() => {
            /* Add Edit functionality */
            handleAddItem(item);
          }}
        />
        <Button
          title="Delete"
          onPress={() => {
            /* Add Delete functionality */
            handleAddItem(item);
          }}
        />
      </View>
    </TouchableOpacity>
  );

  const renderItems = ({item}) => {
    const backgroundColor = selectedId === item.id ? 'black' : 'lightgray';
    const color = selectedId === item.id ? 'white' : 'black';
    const completedColor = item.completed ? 'green' : 'red';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        completed={item.completed}
        completedColor={completedColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listItems}
        renderItem={renderItems}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.addButtonContainer}>
        <Button title="Add" onPress={() => setIsModalVisible(true)} />
      </View>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AddUpdateItem
              onAddItem={handleAddItem}
              setIsModalVisible={setIsModalVisible}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 16,
  },
  completed: {
    fontSize: 12,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 'auto',
    marginRight: 10,
  },
  addButtonContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    margin: 16,
    marginBottom: 20,
    cursor: 'pointer',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay background
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
});

export default ListItems;
