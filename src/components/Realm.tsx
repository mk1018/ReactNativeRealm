import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import tw from 'twrnc';

export default function RealmComponent() {

  return (
    <ScrollView style={tw`flex-1 h-full p-5`}>
      <View>
        <Text>Test</Text>
      </View>
    </ScrollView>
  );
}
