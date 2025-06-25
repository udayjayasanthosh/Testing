import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
function Screen3()
{
    const nav=useNavigation();
    return(
        <>
        <Text>Screen3</Text>
        <Button onPress={()=>{nav.navigate("screen4")}}>Navitage to Top Bar</Button>
        </>
    )
}

export default Screen3;