import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Button } from "react-native-paper";
export default function Screen2()
{
    const Nav=useNavigation();
    const fun=()=>{
        Nav.navigate("screen1");
    }
    return(
        <>
        <Text>HELLO</Text>
        <Button onPress={()=>{fun()}}>
            screen1
        </Button>
        </>
    )
}