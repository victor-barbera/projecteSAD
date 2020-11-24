import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../constants/Colors';
import Form from './form/Form';

const windowHeight = Dimensions.get('window').height;

const SyncModal = props => {
  return (
    <Modal
      backdropOpacity={0.15}
      isVisible={props.isVisible}
      onBackdropPress={() => props.setVisibility(false)}
      style={styles.contentView}
      avoidKeyboard={true}
    >
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Send a sync🔄 request</Text>
        <Form setModalVisibility={props.setVisibility} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    // padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
    width: '100%'

  },
  contentTitle: {
    fontSize: 30,
    marginBottom: 30,
    margin:20,
    fontWeight:'400'
  },
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: Colors.primaryDarkColor,
    borderRadius: 100,
  },
});

export default SyncModal;
