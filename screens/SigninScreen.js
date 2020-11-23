import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import FormButton from '../components/FormButton';
import { useForm, Controller } from 'react-hook-form';
import { useAppContext } from '../Lib/Context';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

const SigninScreen = props => {
  const { setUserId } = useAppContext();
  const { control, handleSubmit, errors } = useForm();
  const [errorMsg, setErrorMsg] = useState('');
  const onSubmit = async data => {
    console.log(data);
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBp2NZuqLCYwJCUISJSmDNfoVfHzd3UaOo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
      }
    );
    const resData = await response.json();
    if (resData.error) {
      if (resData.error.message === 'INVALID_PASSWORD')
        setErrorMsg('The password is incorrect!🙄');
      if (resData.error.message === 'EMAIL_NOT_FOUND')
        setErrorMsg(
          'There no accounts with the provided email, try creating one!😉'
        );
    } else if (resData.localId) {
      setUserId(resData.localId);
      props.navigation.navigate('App');
    }
    console.log(resData);
  };
  return (
    <View style={styles.formContainer}>
      {errorMsg !== '' && (
        <Text style={{ color: 'red', marginBottom: 30 }}>{errorMsg}</Text>
      )}
      <Text style={styles.formTitle}>Sign in</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='"email@example.com"'
              autoCapitalize="none"
            />
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder=""
              autoCapitalize="none"
              secureTextEntry
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
      </View>
      <FormButton label="Sign in" onPress={handleSubmit(onSubmit)} />
      <Text>You are not regsitered yet?</Text>
      <Button
        title="Sign up"
        onPress={() => props.navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    borderRadius: 6,
    width: windowWidth * 0.8,
    fontSize: 20,
    paddingHorizontal: 13,
    paddingTop: 8,
    paddingBottom: 6,
    // backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    margin: 10,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  formTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 30,
  },
});

export default SigninScreen;
