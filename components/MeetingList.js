import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

import MeetingItem from './MeetingItem';

const MeetingList = props => {
    const renderMeetingItem = itemData => {
        return (
        <MeetingItem
            title={itemData.item.title}
            day={itemData.item.day}
            hour={itemData.item.hour}
            participants={itemData.item.participants}
            /*onSelectMeal={() => {
            props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                mealId: itemData.item.id
                }
            });
        }}*/
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMeetingItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.primaryColor
  }
});

export default MeetingList;
