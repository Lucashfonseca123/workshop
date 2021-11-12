import {useNavigation} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import TouchableCard from '../../components/touchableCard';
import {RootNavigatorParamsList} from '../../navigation/interfaces';
import {styles} from './styles';

type FeedScreenProps = NativeStackScreenProps<
  RootNavigatorParamsList,
  'FeedScreen'
>;

const FeedScreen = () => {
  const [value, setValue] = useState<boolean>();
  const navigation = useNavigation<FeedScreenProps>();

  const submit = useCallback(() => {
    setValue(!value);
    navigation.navigate('DetailsScreen');
  }, [value, navigation]);

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
