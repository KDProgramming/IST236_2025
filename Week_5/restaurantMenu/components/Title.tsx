import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 48,
    textAlign: "center",
    fontFamily: "Barlock",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

export default Title;