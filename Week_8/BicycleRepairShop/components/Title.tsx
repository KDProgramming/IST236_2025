import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 48,
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    paddingHorizontal: 10,
    fontFamily: "Type Machine",
  },
});

export default Title;