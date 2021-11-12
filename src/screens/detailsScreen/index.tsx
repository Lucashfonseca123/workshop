import React, {memo, useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';

const DetailsScreen = () => {
  const [name, setName] = useState<string>();
  const [image, setImage] = useState<string>();
  const [textInputDesc, setTextInputDesc] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://imsea.herokuapp.com/api/1?q=${textInputDesc}`,
    );

    const parsedJson = await response.json();
    setName(parsedJson.image_name);
    setImage(parsedJson.results[0]);
    setLoading(false);
  }, [textInputDesc]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'blue', marginBottom: 16}}>
        Esse é a screen de detalhes
      </Text>
      {loading && <ActivityIndicator size="large" />}
      <Image
        width={300}
        height={250}
        style={{borderRadius: 16}}
        source={{uri: image}}
      />
      <TextInput
        style={{
          borderWidth: 1,
          width: '80%',
          borderRadius: 8,
          fontSize: 18,
          marginTop: 8,
        }}
        placeholder="Digite aqui..."
        onChangeText={text => {
          setTextInputDesc(text);
        }}
      />
      <Text>{name}</Text>
      <Button title="Buscar" onPress={getData} />
    </View>
  );
};

export default memo(DetailsScreen);
