import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FormButton from '../components/FormButton';
import { useForm, Controller } from 'react-hook-form';
import { useAppContext } from '../Lib/Context';
import Colors from '../constants/Colors';
import firebase from '../firebase/config';

const windowWidth = Dimensions.get('window').width;

const SignupScreen = props => {
  const { setUserId } = useAppContext();
  const [errorMsg, setErrorMsg] = useState('');
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    const authRes = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBp2NZuqLCYwJCUISJSmDNfoVfHzd3UaOo',
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
        `https://syncrocalendars.firebaseio.com/users/${authResData.localId}.json`,
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder=""
            />
          )}
          name="name"
          rules={{ required: true }}
          defaultValue=""
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surname</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder=""
            />
          )}
          name="surname"
          rules={{ required: true }}
          defaultValue=""
        />
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
  },
  formTitle: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 30,
  },
});

export default SignupScreen;
