import React, { useEffect, useState } from "react";
import * as Not from "expo-notifications";
import { Button } from "react-native-paper";
import { View } from "react-native";
export default function Noti()
{
    const [token,setToken]=useState(null);
    useEffect(()=>{
        const listner = Not.addNotificationReceivedListener((items)=>{
            console.log(items)
        })
        const response =Not.addNotificationResponseReceivedListener((items)=>{
            console.log(items)
        })

        return()=>{
            listner.remove()
            response.remove()
        }
    })
    Not.setNotificationHandler({
        handleNotification: async()=>({
            shouldShowAlert:true,
            shouldPlaySound:true
        })
    })
    const Token= async ()=>{
        const a=await  Not.getPermissionsAsync();
        if(a=="denied")
        {
            const b=await Not.requestPermissionsAsync();
        }
        const c = await Not.getExpoPushTokenAsync();
        console.log(c)
        setToken(c.data);
    }
    return(
        <View>
            <Button onPress={()=>{Token}}>click me</Button>
        </View>
    )
}