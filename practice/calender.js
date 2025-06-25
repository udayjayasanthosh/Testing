import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';

const Calenderr = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    return (
      <View style={styles.container}>
        <Calendar
          current={new Date().toISOString().split('T')[0]}
          onDayPress={(day) => {
            console.log('Selected day:', day);
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: 'blue' },
          }}
        />
        {selectedDate ? (
          <Text style={styles.text}>You selected: {selectedDate}</Text>
        ) : null}
      </View>
    );
  };
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Calenderr;
