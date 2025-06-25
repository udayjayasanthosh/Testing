import React, { useState } from "react";
import { StyleSheet,Text,View } from "react-native";
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Entypo';
import MyIcon from 'react-native-vector-icons/AntDesign';
import MyIcons from 'react-native-vector-icons/FontAwesome5';
export default function Nav_task()
{
    const [first,setfirst]=useState(true)
    const [second,setsecond]=useState(false)
    const [third,setthird]=useState(false)
    const modifing=(i)=>{
        if(i==1)
        {
            setsecond(false)
            setthird(false)
            setfirst(true)
        }
        else if(i==2)
        {
            setsecond(true)
            setthird(false)
            setfirst(false)
        }
        else{
            setsecond(false)
            setthird(true)
            setfirst(false)
        }
    }
    return(
        <>
            <View style={styles.Parent}>
                <View style={styles.Nav}>
                    <Text style={styles.Nav_text}>HELLO...</Text>
                </View>
                <View style={styles.Matter}>
                    <View style={[styles.first,{display: (first) ? "flex" : "none"}]}>
                        <Text style={{textAlign:'center',color:"white",fontSize:50,fontWeight:20}}>first page</Text>
                    </View>
                    <View style={[styles.first,{display: (second) ? "flex" : "none"}]}>
                        <Text style={{textAlign:'center',color:"white",fontSize:50,fontWeight:20}}>second page</Text>

                    </View>
                    <View style={[styles.first,{display: (third) ? "flex" : "none"}]}>
                        <Text style={{textAlign:'center',color:"white",fontSize:50,fontWeight:20}}>third page</Text>
                    </View>
                </View>
                <View style={styles.Fotter}>
                    <Button mode="outlined" rippleColor="white" onPress={()=>{modifing(1)}}>
                        <Icon name="home" size={20} color={first ? "white":"grey"}/>
                    </Button>
                    <Button mode="outlined" rippleColor="white" onPress={()=>{modifing(2)}}>
                        <MyIcons name="people-carry" size={20} color={second ? "white":"grey"}/>
                    </Button>
                    <Button mode="outlined" rippleColor="white" onPress={()=>{modifing(3)}}>
                        <MyIcon name="profile" size={20} color={third ? "white":"grey"}/>
                    </Button>
                </View>
            </View>
        </>
    )
}

const styles=StyleSheet.create({
    Parent:{
        width:"100%",
        height:"100%",
    },
    Nav:{
        flex:1,
        backgroundColor:'#0056AD',
        display:'flex',
        flexDirection:'row',
        justifyContent:'start',
        alignItems:'center',
    },
    Nav_text:{
        marginLeft:10,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:30,
        fontWeight:20,
        color:"white",
    },
    Matter:{
        flex:8,
        backgroundColor:'#013364'
    },
    Fotter:{
        flex:1,
        backgroundColor:"#001f3f",
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
    },
    first:{
        width:"100%",
        height:"100%",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

})