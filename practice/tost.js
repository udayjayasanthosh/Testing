import React from "react";
import { Text, View } from "react-native";
// import { Button } from "react-native-elements";
// import { Button } from "react-native";
import { Button, ProgressBar, Searchbar } from "react-native-paper";
import Toast from "react-native-toast-message";
export default function Toasting()
{
    function onclicking()
    {
        Toast.show({
            type:'info',
            visibilityTime:1000,
            position:'top',
            topOffset:100,
            text1:'mhbujy',
            text2:"mjhy"
        })
    }
    return(
        <>
            <View>
                <Toast/>
                <Text style={{width:150,height:100,backgroundColor:'red'}} onPress={onclicking} >Mnh</Text>
                <Button
                    mode="elevant"
                    icon="home"
                    background={"red"}
                    textColor="red"
                >hello</Button>
                <Searchbar
                    icon={"home"}
                    mode={"view"}
                />
                <ProgressBar
                    visible={true}
                    progress={0.7}
                    indeterminate={true}
                    color="red"
                />
            </View>
        </>
    )
}