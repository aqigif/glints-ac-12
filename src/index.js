import React from 'react';
import {View} from 'react-native';

// import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Home from './Screen/Home/HomeScreen';
import Profile from './Screen/Home/ProfileScreen';

const App = () => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Home />
      <Profile />
    </View>
  );
};

export default App;
