import React from 'react';
import {TextInput, View} from 'react-native';

interface CSearchInputProps {
  placeholder?: string;
}

const CSearchInput = (props: CSearchInputProps) => {
  const {placeholder} = props;

  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default CSearchInput;
