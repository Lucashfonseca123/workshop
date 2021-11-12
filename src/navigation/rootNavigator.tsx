import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/feedScreen';
import {RootNavigatorParamsList} from './interfaces';
import DetailsScreen from '../screens/detailsScreen';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedScreen" component={FeedScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
