import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Switch} from 'react-native';

const AddUpdateItem = ({ item = {}, setIsModalVisible, handleAddUpdateItem}) => {
  const [formFields, setFormFields] = useState({
    id: item.id || null,
    title: item.title || '',
    description: item.description || '',
    completed: item.completed || false,
  });


  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={formFields.title}
        onChangeText={e => setFormFields({...formFields, title: e})}
        placeholder="Enter title"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        multiline
        style={styles.input}
        value={formFields.description}
        onChangeText={e => {
          setFormFields({
            ...formFields,
            description: e,
          });
        }}
        placeholder="Enter description"
      />

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={styles.label}>Completed:</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={formFields.completed ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={value => setFormFields({...formFields, completed: value})}
        value={formFields.completed}
      />
      </View>
      <View style={styles.buttons}>
        <Button
          title={`${item.id ? 'Update' : 'Add'}`}
          onPress={() => handleAddUpdateItem(formFields)}
        />
        <Button title="Close" onPress={() => setIsModalVisible(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttons: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 10,
    marginVertical: 10,
  },
});

export default AddUpdateItem;
