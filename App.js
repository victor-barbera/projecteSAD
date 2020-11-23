import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { firebase } from './firebase/config';
import { AppContext } from './Lib/Context';

export default function App() {
  const [userId, setUserId] = useState('');
  return (
    <AppContext.Provider
      value={{
        userId,
        setUserId
      }}
    >
      <AppNavigator />
    </AppContext.Provider>
  );
}

