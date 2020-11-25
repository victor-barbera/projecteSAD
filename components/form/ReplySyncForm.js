import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import FormInput from './FormInput';
import FormButton from './FormButton';
import FormStepIndicator from './FormStepIndicator';
import { useAppContext } from '../../Lib/Context';
import firebaseConfig from '../../firebase/config';

const ReplySyncForm = props => {
  const { control, handleSubmit, errors } = useForm();
  const { user, contacts } = useAppContext();

  const resolveSync = availableDays => {
    const receiverDays = availableDays.split(',');
    const senderDays = props.availableDays.split(',');
    const intersection = receiverDays.filter(element =>
      senderDays.includes(element)
    );
    return intersection;
  };

  const onSubmit = async data => {
    let meetingDates = resolveSync(data.availableDays);
    meetingDates = meetingDates.toString()
    if(!meetingDates) {
        Alert.alert("😢","No matching dates found", [{text: 'Okey', onPress: ()=>props.setModalVisibility(false)}]);
        meetingDates="";
    }
    else Alert.alert("😁","The matching dates are: " + meetingDates, [{text: 'Nice', onPress: ()=>props.setModalVisibility(false)}]);
    const res = await fetch(`${firebaseConfig.databaseURL}/requests/${props.syncId}.json`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: "solved",
        result: meetingDates
      }),
    });
  };

  //   const sendSyncRequest = async data => {
  //     const contact = contacts.find(contact => contact.email === data.contact || `${contact.name} ${contact.surname}` === data.contact);
  //     const res = await fetch(
  //       `${firebaseConfig.databaseURL}/requests.json`,
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           sender: `${user.name} ${user.surname}`,
  //           receiver: `${contact.name} ${contact.surname}`,
  //           concept: data.concept,
  //           availableDays: data.availableDays,
  //           status: 'pending',
  //           time: data.time
  //         }),
  //       }
  //     );
  //     if (res.ok) {
  //       const response = await res.json();
  //       const destRes = await fetch(

  //         `${firebaseConfig.databaseURL}/users/${contact.id}/requests.json`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             syncId: response.name,
  //           }),
  //         }
  //       );
  //       const sourceRes = await fetch(
  //         `${firebaseConfig.databaseURL}/users/${user.id}/requests.json`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             syncId: response.name,
  //           }),
  //         }
  //       );
  //     }
  //   };

  return (
    <>
      <View style={styles.formContainer}>
        {/* {step === 1 && (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Choose a contact</Text>
              <Controller
                control={control}
                name="contact"
                rules={{
                  required: { value: true, message: 'A user is required' },
                }}
                defaultValue=""
                render={({ onChange, value }) => (
                  <FormInput
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Name or email"
                    autoCapitalize="none"
                  />
                )}
              />
              {errors.contact && (
                <Text style={{ color: 'red' }}>{errors.contact.message}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Concept</Text>
              <Controller
                control={control}
                rules={{
                  required: { value: true, message: 'A concept is required' },
                }}
                name="concept"
                defaultValue=""
                render={({ onChange, value }) => (
                  <FormInput
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="What are you going to do"
                  />
                )}
              />
              {errors.concept && (
                <Text style={{ color: 'red' }}>{errors.concept.message}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Timing details</Text>
              <Controller
                control={control}
                name="time"
                defaultValue=""
                render={({ onChange, value }) => (
                  <FormInput
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder='e.g. "from 9:00pm" "morning"'
                  />
                )}
              />
            </View>
          </>
        )} */}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Set your availability (dd/mm)</Text>
          <Controller
            control={control}
            name="availableDays"
            rules={{
              required: {
                value: true,
                message: 'This field is mandatory!',
              },
            }}
            defaultValue=""
            render={({ onChange, value }) => (
              <FormInput
                onChangeText={value => onChange(value)}
                value={value}
                placeholder='e.g. "20/11,21/11,26/11"'
                autoCapitalize="none"
              />
            )}
          />
          {errors.availableDays && (
            <Text style={{ color: 'red' }}>{errors.availableDays.message}</Text>
          )}
        </View>

        {/* {step === 3 && (
          <>
            <Text style={styles.label}>
              The form had been submited succesfully😁
            </Text>
            <Image
              resizeMode="contain"
              style={{ width: '100%', height: 50 }}
              source={require('../../assets/3173500.jpg')}
            />
          </>
        )} */}
      </View>
      <FormButton label="Resolve" onPress={handleSubmit(onSubmit)} />
    </>
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
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
});

export default ReplySyncForm;
