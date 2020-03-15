import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = ({children}) => (
  <View style={styles.container}>
    <Text style={styles.number}>{children}</Text>
  </View>
)


const styles = StyleSheet.create(
  {
    container: {
      borderWidth: 2,
      borderRadius: 10,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: Colors.secondary,
      padding: 10
    },
    number: {
      color: Colors.secondary,
      fontSize: 22,
      fontWeight: 'bold'
    }

  }
);

export default NumberContainer;