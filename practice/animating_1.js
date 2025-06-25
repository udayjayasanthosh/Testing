import React, { useRef } from "react";
import { use } from "react";
import { Animated,View } from "react-native";
import { Button } from "react-native-paper";
export default function Animating()
{
    const leftMove= useRef(new Animated.Value(0)).current;
    const borderRad=useRef(new Animated.Value(0)).current;
    const colorChange=useRef(new Animated.Value(0)).current;
    const myfunction=()=>{
        Animated.timing(leftMove,{
            toValue:150,
            duration:1000,
            useNativeDriver:false,
        }).start(()=>{
            Animated.timing(leftMove,{
                toValue:0,
                duration:1000,
                useNativeDriver:false,
            }).start()
        }
        );
        Animated.timing(borderRad,{
            toValue:100,
            duration:1000,
            useNativeDriver:false
        }).start(
            ()=>{
                Animated.timing(borderRad,{
                    toValue:0,
                    duration:2000,
                    useNativeDriver:false
                }).start()
            }
        )
        Animated.timing(colorChange,{
            toValue:100,
            duration:1000,
            useNativeDriver:false
        }).start(()=>{
            Animated.timing(colorChange,{
                toValue:0,
                duration:1000,
                useNativeDriver:false
            }).start()
        })
    }
    const ColorInterpolation=colorChange.interpolate({
        inputRange:[0,100],
        outputRange:["red","black"]
})
    return(
        <>
        <Animated.View style={{width:150,height:150,left:leftMove,backgroundColor:ColorInterpolation,borderRadius:borderRad}}>
            
        </Animated.View>
        <Button mode="elevated" onPress={()=>{myfunction()}}>click me</Button>
        </>
    )
}