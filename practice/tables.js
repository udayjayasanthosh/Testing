import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Table, Row, Col, TableWrapper,Cols } from "react-native-table-component";
export default function Tabletask() {
  return (
    <ScrollView contentContainerStyle={styles.parent}>
      <View style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <TableWrapper style={{ flexDirection: 'row' }}>
            <Col
              data={['Name', 'Uday', 'Jaya', 'Santhosh']}
              style={styles.columnStyle}
              textStyle={styles.text}
            />
            <TableWrapper style={{width:100,}}>
                <Row data={['college']} style={styles.columnStyle}
                     textStyle={styles.text}/>
                <TableWrapper style={{width:100,flexDirection:'row'}}>
                    <Col data={['aus','true','false','true']}/>
                    <Col data={['acet','false','true','false']}/>
                </TableWrapper>
            </TableWrapper>
            <Col
              data={['Gender', 'Male', 'Female', 'Male']}
              style={styles.columnStyle}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  tableContainer: {
    width: '90%',
  },
  columnStyle: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
});
