import React from 'react';

// components
import {Input as UIKInput} from 'react-native-ui-kitten';

// styles
import {Colors} from 'src/theme';
import Styles from './styles';

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
  onSubmitEditing,
  returnKeyType,
  maxLength,
  caretHidden,
  style,
  textStyle,
  error,
  transparent,
  autoFocus,
  multiline,
  color = 'primary',
}) => {
  const {
    input,
    text,
    height,
    transparentInput,
    transparentInputText,
    multilineInput,
  } = Styles;
  return (
    <>
      <UIKInput
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGray}
        size="small"
        style={[
          input,
          !multiline && height,
          transparent && transparentInput,
          Styles[`${color}Theme`],
          style && style,
        ]}
        keyboardType={keyboardType}
        caretHidden={caretHidden}
        textStyle={[
          text,
          !multiline && height,
          transparent && transparentInputText,
          multiline && multilineInput,
          textStyle && textStyle,
        ]}
        autoCapitalize="none"
        autoFocus={autoFocus}
        maxLength={maxLength}
        onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
        returnKeyType={returnKeyType}
        multiline={multiline}
      />
    </>
  );
};

export default Input;
