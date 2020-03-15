import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({children, style}) => {
return <View style={{ ...styles.card, ...style}}>{children}</View>
}

const styles = StyleSheet.create(
  {
    card: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.26,
      shadowRadius: 4,
      elevation: 6,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 6
    },
  }
);

export default Card;