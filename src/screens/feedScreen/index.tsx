import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import TouchableCard from '../../components/touchableCard';
import {RootNavigatorParamsList} from '../../navigation/interfaces';
import {styles} from './styles';

type FeedScreenProps = NativeStackNavigationProp<
  RootNavigatorParamsList,
  'FeedScreen'
>;

const FeedScreen = () => {
  const [value, setValue] = useState<boolean>();
  const {navigate} = useNavigation<FeedScreenProps>();

  const submit = useCallback(() => {
    setValue(!value);
    navigate('DetailsScreen');
  }, [value, navigate]);

  return (
    <View style={styles.scaffold}>
      <TouchableCard
        title={value ? 'Está ligado' : 'Está desligado'}
        onPress={submit}
      />
    </View>
  );
};

export default memo(FeedScreen);
