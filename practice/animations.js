import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const FadeInExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: { padding: 20, backgroundColor: 'skyblue', borderRadius: 5 },
  text: { fontSize: 20, color: 'white' },
});

export default FadeInExample;
