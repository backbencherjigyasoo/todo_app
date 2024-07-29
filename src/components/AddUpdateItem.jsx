import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddUpdateItem = ({onAddItem, item = {}, setIsModalVisible}) => {
  const [formFields, setFormFields] = useState({
    title: item.title || '',
    description: item.description || '',
  });

  console.log('formFields', formFields);

  const handleAddItem = item => {
    onAddItem(formFields.title, formFields.description);
    if (!Object.keys(item).length > 0) {
      setFormFields({
        title: '',
        description: '',
      });
    }
  };

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
      <View style={styles.buttons}>
        <Button
          title={`${item.id ? 'Update' : 'Add'}`}
          onPress={() => handleAddItem(item)}
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
  },
});

export default AddUpdateItem;
