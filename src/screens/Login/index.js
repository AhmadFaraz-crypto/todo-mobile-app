import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Container, Content} from 'native-base';
import {View} from 'react-native';

// components
import {Header, Input, Button, ErrorBox, Text} from 'src/components';
import {Layout, Gutters, Global} from 'src/theme';

// hooks
import useForm from 'src/hooks/useForm';

// utils
import validator from 'src/utils/validation';

// actions
import {login} from './redux/actions';

// styles
import styles from './styles';

const Login = props => {
  const {
    navigation: {navigate},
  } = props;

  const [checked, setChecked] = useState(false);

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
    navigate('Task');
  };

  const {state, handleOnChange, disable} = useForm(
    stateSchema,
    validationStateSchema,
  );

  const {row, fill, center} = Layout;
  const {primaryBg} = Global;
  const {mediumTMargin, regularVMargin} = Gutters;
  const {container, subtext} = styles;
  return (
    <>
      <Container style={[container, primaryBg]}>
        <Content style={fill}>
          <Header title="Log In" />
          <Input
            color="primary"
            placeholder="Email"
            onChangeText={value => assignValues('email', 'email', value)}
          />
          <ErrorBox errorText={state.email.error} />
          <Input
            color="primary"
            secureTextEntry
            placeholder="Password"
            onChangeText={value => assignValues('password', 'password', value)}
          />
          <ErrorBox errorText={state.password.error} />
        </Content>
        <View style={row}>
          <Button
            text="Log In"
            color="primary"
            onPress={() => submitForm()}
            style={[fill, center, mediumTMargin]}
          />
        </View>
        <Text
          text="Forgot your password?"
          center
          color="quaternary"
          font="ExtraBold"
          style={[regularVMargin, subtext]}
        />
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  requesting: state.login.requesting,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
