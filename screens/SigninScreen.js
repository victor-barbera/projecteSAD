import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import { useAppContext } from '../Lib/Context';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
          name="email"
          rules={{
            required: { value: true, message: 'Email is required' },
            pattern: { value: EMAIL_REGEX, message: 'Not a valid email' },
          }}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormInput
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='e.g. "email@example.com"'
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && (
          <Text style={{ color: 'red' }}>{errors.email.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: 'Password required' },
          }}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormInput
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="Write your password"
              autoCapitalize="none"
              secureTextEntry
            />
          )}
        />
        {errors.password && (
          <Text style={{ color: 'red' }}>{errors.password.message}</Text>
        )}
      </View>
      <FormButton label="Sign in" onPress={handleSubmit(onSubmit)} />
      <Text>You are not regsitered yet?</Text>
      <Button
        title="Create an account"
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
