import React, {useState} from 'react';
import {Container, Content} from 'native-base';
import {View, TouchableOpacity, Image, TextInput} from 'react-native';

// components
import {Header, Button, Text} from 'src/components';
import {Layout, Gutters, Global, Images} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// styles
import styles from './styles';

const NewTask = props => {
  const {
    navigation: {navigate, goBack},
  } = props;

  const stateSchema = {
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
  };
  const validationStateSchema = {
    email: {
      required: true,
      validator: validator.email,
    },
    password: {
      required: true,
      validator: validator.password,
    },
  };

  const assignValues = (fieldName, backendName, value) => {
    handleOnChange(fieldName, value);
  };

  const submitForm = () => {
    const data = {
      password: state.password.value,
      username: state.email.value,
    };
    navigate('Location');
  };

  const {state, handleOnChange, disable} = useForm(
    stateSchema,
    validationStateSchema,
  );

  const {row, fill, center} = Layout;
  const {primaryBg} = Global;
  const {regularVMargin, tiny5xHPadding} = Gutters;
  const {container, backText, wrapper, descWrapper, input, multiline, summary} =
    styles;
  return (
    <Container style={[container, primaryBg]}>
      <Content style={fill}>
        <Header
          title="New Task"
          left={
            <TouchableOpacity onPress={() => goBack()}>
              <Text
                text="Back"
                color="quaternary"
                font="SemiBold"
                style={backText}
              />
            </TouchableOpacity>
          }
        />
        <View style={[row, fill, tiny5xHPadding, wrapper]}>
          <Image source={Images.summary} style={summary} />
          <TextInput style={[fill, input]} placeholder="Summary" />
        </View>
        <View style={[row, fill, tiny5xHPadding, wrapper, descWrapper]}>
          <Image source={Images.description} style={summary} />
          <TextInput
            style={[fill, input, multiline]}
            placeholder="Description"
            multiline
          />
        </View>
        <View style={[row, fill, tiny5xHPadding, wrapper]}>
          <Image source={Images.datetime} style={summary} />
          <TextInput style={[fill, input]} placeholder="Due Date" />
        </View>
      </Content>
      <View style={row}>
        <Button
          text="Save"
          color="primary"
          onPress={() => submitForm()}
          style={[fill, center, regularVMargin]}
        />
      </View>
    </Container>
  );
};

export default NewTask;
