import React from "react";
import { StyleSheet,View } from "react-native";
import { Table,Row, Rows } from "react-native-table-component";
export default function Tables()
{
    return(
        <View style={style.parent}>
            <Table>
                <Row data={["s no","name","gender"]} style={style.header} textStyle={{color:'red',borderWidth:1,textAlign:"center"}}/>
                <Rows data={[[1,2,5],[2,5,6]]} textStyle={style.rowStyletext} />
            </Table>
        </View>
    )
}
const style=StyleSheet.create({
    parent:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'skyblue'
    },
    header:{
        width:250,
        borderWidth:3
    },
    rowStyletext:{
        borderWidth:1,
        textAlign:'center',
    }
})
