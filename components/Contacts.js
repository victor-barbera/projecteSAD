import React from 'react';
import {FlatList} from 'react-native';

import {USER} from '../data/dummy-data';

const Contacts = props => {
  return(
    <FlatList
        data={props.Contacts}
        keyExtractor={(item, index) => item.id}
        style={{ width: '100%' }}
      />
  );
};

export default Contacts;