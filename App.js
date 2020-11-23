import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { firebase } from './firebase/config';
import { AppContext } from './Lib/Context';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userId, setUserId] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

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

