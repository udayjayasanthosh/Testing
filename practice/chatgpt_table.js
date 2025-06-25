import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const Chatgpt_table = () => {
  const tableHead = ['Name', 'Age', 'City'];
  const tableData = [
    ['Alice', '25', 'New York'],
    ['Bob', '30', 'San Francisco'],
    ['Charlie', '35', 'Los Angeles'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
        {/* Table Header */}
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.textHead}
        />

        {/* Table Rows */}
        <Row
          data={tableData[0]}
          style={[styles.row, styles.rowStyle1]}
          textStyle={styles.textBody}
        />
        <Row
          data={tableData[1]}
          style={[styles.row, styles.rowStyle2]}
          textStyle={styles.textBody}
        />
        <Row
          data={tableData[2]}
          style={[styles.row, styles.rowStyle3]}
          textStyle={styles.textBody}
        />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  row: {
    height: 40,
  },
  rowStyle1: {
    backgroundColor: '#f9f9f9',
  },
  rowStyle2: {
    backgroundColor: '#e9f7ff',
  },
  rowStyle3: {
    backgroundColor: '#f2f2f2',
  },
  textHead: {
    margin: 6,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  textBody: {
    margin: 6,
    color: '#666',
    textAlign: 'center',
  },
});

export default Chatgpt_table;
