import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Landing from './pages/Landing';
import AppStack from './routes/AppStack';


function App(){
  return(
    <>
      <AppStack />
      <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'} />
    </>
  );
}

export default App;