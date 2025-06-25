import React from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
function Nav_Profile()
{
    const Nav=useNavigation();
    return(
        <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Profile Page</Text>
        <Button mode="outline" style={{width:150,height:150}} onPress={()=>{Nav.navigate("profile")}}>NAvigate to profile</Button>
        </View>
    )
}
export default Nav_Profile;