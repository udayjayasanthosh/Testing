import React from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import * as local from "expo-local-authentication";
export default function Local_authentication()
{
    const Unlocking = async  () =>{
        const hard= await local.hasHardwareAsync()
        if(hard)
        {
            const enroll =await local.isEnrolledAsync()
            if(enroll)
            {
                const status=await local.authenticateAsync()
                if(status)
                {
                    console.log(status);
                }
            } 
            else{
             Alert.alert("no async data");
            }
        }
        else{
            Alert.alert("no async data");
        }
    }
    return(
        <>
        <View>
            <Button mode="contained" onPress={()=>{Unlocking()}} >
                Unlock
            </Button>
        </View>
        </>
    )
}