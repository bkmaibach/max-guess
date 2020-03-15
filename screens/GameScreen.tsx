import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min?: number, max?: number, exclude?: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rand = (Math.random() * (max - min) + min);
  return rand !== exclude ? Math.floor(rand) : generateRandomBetween(min, max, exclude);
};

const GameScreen = ({userChoice, onGameOver}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // useEffect runs AFTER each render cycle
  useEffect(() => {
    if (currentGuess == userChoice) {
      // console.log("The gamme is over, render the screen.");
      onGameOver(rounds)
    }
    // Second argument is an array of dependies to this funciton
    // Whenever these values change, this funciton will re-run after render
  }, [userChoice, currentGuess]);

  const nextGuessHandler = (direction: string) => {
    if ((direction == 'greater' && currentGuess > userChoice) || (direction == 'lower' && currentGuess < userChoice)) {
      Alert.alert("No cheating!", "You can lie to yourself, but you can't lie to me", [{text: "Sorry!", style: 'cancel'}]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else if (direction === 'greater'){
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  }

  return (
    <View style={styles.screen}>
      <Text>React Native's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>My number is: </Text>
      <Card style={styles.higherLowerContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}></Button>
        <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'greater')}></Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    higherLowerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: 300,
      maxWidth: '80%'
    }
  }
);

export default GameScreen;