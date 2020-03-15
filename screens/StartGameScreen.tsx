import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard, 
  Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({onStartGame}) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<Number>();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Please enter a number between 1 and 99', [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]);
      return;
    }
    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput = confirmed && 
    <Card style={styles.chosenNumberContainer}>
      <Text>You selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title="START GAME" onPress={() => {onStartGame(selectedNumber)} }/>
    </Card>

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input 
            style={styles.input}
            blurOnSubmit autoCapitalize='none'
            autoCorrect={false} keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.secondary}/>
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: 100,
      padding: 8,

    },
    inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginVertical: 16,
      fontFamily: 'open-sans-bold'
    },
    input: {
      width: 50,
      textAlign: 'center'
    },
    chosenNumberContainer: {
      marginTop: 20,
      alignItems: 'center'
    },
    text: {
      fontFamily: 'open-sans'
    }
  }
);

export default StartGameScreen;