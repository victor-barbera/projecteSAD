import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SyncModal from './SyncModal';
import Colors from '../constants/Colors';

const InvitationItem = props => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.meetingItem}>
        <TouchableOpacity
          onLongPress={() => {
            Alert.alert(
              'Confirm meeting',
              'Choose accept to select your disponibility',
              [
                {
                  text: 'Accept', //aqui sha de obrir el modal per respondre
                  onPress: () => setModalVisible(true),
                },
                {
                  text: 'Cancel',
                },
              ]
            );
          }}
        >
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.concept}</Text>
            </View>
            <View style={styles.info}>
              <Text style={{ color: Colors.primaryColor }} multiline={true}>
                From:{' '}
                <Text style={{ fontFamily: 'open-sans-bold' }}>
                  {props.sender}
                </Text>
              </Text>
              <Text style={{ color: Colors.accentColor }} multiline={true}>
                When:{' '}
                <Text style={{ fontFamily: 'open-sans-bold' }}>
                  {props.time}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <SyncModal
        isVisible={modalVisible}
        setVisibility={setModalVisible}
        action="Accept"
        syncId={props.id}
        availableDays={props.availableDays}
      />
    </>
  );
};

const styles = StyleSheet.create({
  meetingItem: {
    flex: 1,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    overflow: 'hidden',
    marginVertical: 3,
  },
  titleContainer: {
    height: '50%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 17,
    color: Colors.accentColor,
  },
  results: {
    alignItems: 'center',
    backgroundColor: Colors.backColor,
    paddingHorizontal: 10,
    height: 25,
  },
  info: {
    //justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InvitationItem;
