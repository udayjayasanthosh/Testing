import React, { useEffect } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Screen5 from "./screen5";
import Screen6 from "./screen6";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/FontAwesome"
import { colors } from "react-native-elements";
function Screen4({navigation})
{
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[navigation])
    const nav=useNavigation();
    // const top=createMaterialTopTabNavigator();
    const top=createBottomTabNavigator();
    return(
        <>
        <top.Navigator screenOptions={({route})=>({headerShown:false,tabBarActiveTintColor:'green',tabBarInactiveBackgroundColor:"red",tabBarIcon:({color})=>{ return<Text style={{color:colors}}> <Icons name="home" size="20"
        /></Text>}})} >
            <top.Screen name="screen5" component={Screen5} />
            <top.Screen name="screen6" component={Screen6} />
        </top.Navigator>
        </>
    )
}

export default Screen4;