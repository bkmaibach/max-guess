import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const GameOverScreen = ({roundsNumber, userNumber, onNewGame}) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="Play again?" onPress={onNewGame} />
    </View>
  );
}

const styles = StyleSheet.create(
  {
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
);

export default GameOverScreen;