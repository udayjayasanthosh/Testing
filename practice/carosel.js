import React, { useState } from "react";
import { View,Text,StyleSheet,FlatList,Dimensions} from "react-native";
import { Button } from "react-native-paper";
export default function Carosel(){
    const data=[1,2,3,4]
    const {width , height} = Dimensions.get('screen')
    const [Index,setindex]=useState(0);
    const fun=(event)=>{
        setindex(Math.round(Math.abs(event.nativeEvent.contentOffset.x)/width))
    }
    const clicking=(index)=>{
        console.log(index)
    }
    return(
        <>
       
        <View>
            <FlatList
            data={data}
            renderItem={({item}) => <View style={styles.viewing}><Text style={styles.texting}>{item}</Text></View> }
            onScroll={(event)=>{fun(event)}}
            sc
            horizontal
            pagingEnabled
            />
        </View>
        <View style={styles.dots}>
            {
                data.map((_,index)=>{
                    return(
                        <>
                        <Button  onPress={()=>{clicking(index)}}>
                            <View style={[styles.dot,
                                Index === index ? styles.activeDot : null,
                            ]}>
                            </View>
                        </Button>
                        </>
                    )
                })
            }
        </View>
        </>
    )
}
const styles=StyleSheet.create({
        viewing:{
            width:400,
            height:200,
            backgroundColor:'blue',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderColor:'red',
            // borderWidth:2,
        },
        texting:{
            fontSize:50,
            textAlign:'center',
            color:"red",
        },
        dots:{
            width:400,
            height:50,
            backgroundColor:'red',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly'
        },
        dot:{
            width:5,
            height:5,
            borderRadius:'50%',
            backgroundColor:'black',
        },
        activeDot:{
            backgroundColor:'white',
        }
})