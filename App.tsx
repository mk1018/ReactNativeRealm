/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RealmComponent from './src/components/Realm';
import {RealmProvider} from '@realm/react';
import {ProfileModel} from './src/models/ProfileModel';

export const AppWrapper = () => {
  return (
    <RealmProvider schema={[ProfileModel]}>
      <App />
    </RealmProvider>
  );
};

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <RealmComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
