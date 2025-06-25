import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home_page } from "./home";
import { Image,View } from "react-native";
import Love from "react-native-vector-icons/AntDesign"
import List from "react-native-vector-icons/Feather"
export function Homily()
{
    const Drawer=createDrawerNavigator();
    return(
        <Drawer.Navigator
            screenOptions={{headerLeft:()=>
                <View>
                <Image 
                style={{width:100,height:100}}
                source={require("../images/Assets/Home_Screen/logo1.png")}
                />
                </View>
                ,title:"",
                headerStyle: {
                    height: 100,
                    backgroundColor: 'grey',
                },
                drawerPosition:"right",
                headerRight:()=>(
                <View style={{display:"flex",flexDirection:"row",gap:50,alignItems:"center",justifyContent:"center",marginRight:10}}>
                    <Love name="heart" size={30} color="lightgrey"/>
                    <Love name="logout" size={30} color="lightgrey"/>
                    <List name="list" size={30} color="lightgrey"/>
                    </View>
                )
            }}
        >
            <Drawer.Screen name="main" component={Home_page}/>
        </Drawer.Navigator>
    )
}