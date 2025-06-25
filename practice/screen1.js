import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { useEffect } from "react";
export default function Screen1({navigation})
{
    
    const Nav=useNavigation();
    const fun=()=>{
        Nav.navigate("screen2");
    }
    return(
        <>
        <Text>HELLO</Text>
        <Button onPress={()=>{fun()}}>
            screen2
        </Button>
        </>
    )
}