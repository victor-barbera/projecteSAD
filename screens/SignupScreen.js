import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import { useAppContext } from '../Lib/Context';
import firebaseConfig from '../firebase/config';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignupScreen = props => {
  const { setUserId } = useAppContext();
  const [errorMsg, setErrorMsg] = useState('');
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    const authRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`,
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
    const authResData = await authRes.json();
    console.log(authResData);
    if (authResData.error) {
      if (authResData.error.message === 'EMAIL_EXISTS')
        setErrorMsg("The email you're using is already registered!🤯");
      if (authResData.error.message === 'TOO_MANY_ATTEMPTS_TRY_LATER')
        setErrorMsg('Too many attempts, try later...👻');
    } else if (authResData.localId) {
      const rtdbRes = await fetch(
        `${firebaseConfig.databaseURL}/users/${authResData.localId}.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            surname: data.surname,
          }),
        }
      );
      if (rtdbRes.ok) {
        setUserId(authResData.localId);
        props.navigation.navigate('App');
      }
    }
  };
  return (
    <View style={styles.formContainer}>
      {errorMsg !== '' && (
        <Text style={{ color: 'red', marginBottom: 30 }}>{errorMsg}</Text>
      )}
      <Text style={styles.formTitle}>Create an account</Text>
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
            minLength: {
              value: 8,
              message: 'Password must be 8 characters length',
            },
          }}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormInput
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="Write yoy password"
              autoCapitalize="none"
              secureTextEntry
            />
          )}
        />
        {errors.password && (
          <Text style={{ color: 'red' }}>{errors.password.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          name="name"
          rules={{
            required: { value: true, message: 'Name is required' },
          }}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormInput
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Write your first name'
            />
          )}
        />
        {errors.name && (
          <Text style={{ color: 'red' }}>{errors.name.message}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surname</Text>
        <Controller
          control={control}
          name="surname"
          rules={{
            required: { value: true, message: 'Surname is required' },
          }}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormInput
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Write your second name'
            />
          )}
        />
        {errors.surname && (
          <Text style={{ color: 'red' }}>{errors.surname.message}</Text>
        )}
      </View>
      <FormButton label="Sign up" onPress={handleSubmit(onSubmit)} />
      <Text>Do you already have an account?</Text>
      <Button
        title="Sign in"
        onPress={() => props.navigation.navigate('SignIn')}
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
  },
  formTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 30,
  },
});

export default SignupScreen;
