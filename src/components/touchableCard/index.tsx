import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ITouchableCardProps {
  title: string;
  onPress: () => void;
}

const TouchableCard = ({title, onPress}: ITouchableCardProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(TouchableCard);
