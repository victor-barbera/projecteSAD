import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FormButton from './FormButton';
import FormStepIndicator from './FormStepIndicator';
import { useForm, Controller } from 'react-hook-form';
import Colors from '../constants/Colors';

const windowWidth = Dimensions.get('window').width;

const Form = props => {
  const [step, setStep] = useState(1);
  const { control, handleSubmit, errors } = useForm();
  const carousel = useRef(null);
  const onSubmit = data => {
    console.log(data);
    setStep(2);
    carousel.current.scrollTo({x: windowWidth})
  }

  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={carousel}
      >
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose a contact</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Name or username"
                />
              )}
              name="contact"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Concept</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="What are you going to do"
                />
              )}
              name="concept"
              defaultValue=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Time requiered</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="hh:mm"
                />
              )}
              name="minTime"
              defaultValue=""
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose a contact</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Name or username"
                />
              )}
              name="contact"
              rules={{ required: true }}
              defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Concept</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="What are you going to do"
                />
              )}
              name="concept"
              defaultValue=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Time requiered</Text>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="hh:mm"
                />
              )}
              name="minTime"
              defaultValue=""
            />
          </View>
        </View>
      </ScrollView>
      <FormStepIndicator step={step} />
      <FormButton label="Continue" onPress={handleSubmit(onSubmit)} />
    </>
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
    marginBottom: 20,
    flex:1
  },
});

export default Form;
