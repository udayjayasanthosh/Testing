import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View,TextInput,Image,Text,StyleSheet, ImageBackground,TouchableOpacity} from "react-native";
export function SignIn()
{
    const Nav=useNavigation();
    return(
        <>
        <ImageBackground
        source={require("../images/Assets/Login_Screen/image.png")}
        style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}
        blurRadius={5}
        >
        <View style={style.parent}>
            <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center",width:300,height:400,gap:20}}>
                <Text style={style.heading} >SIGN UP</Text>
                <TextInput style={style.input} placeholder="Username"/>
                <TextInput style={style.input} placeholder="email"/>
                <TextInput style={style.input} placeholder="password"/>
                <TextInput style={style.input} placeholder="confirm Password"/>
                <TouchableOpacity mode="contained" style={{backgroundColor:"orange",width:300,height:60,display:"flex",alignItems:"center",justifyContent:"center"}} onPress={()=>{Nav.navigate("home")}}>
                    <Text style={{textAlign:"center",textAlignVertical:"center",fontSize:20}}>Sign Up</Text></TouchableOpacity>
                {/* <TouchableOpacity><Text style={{textDecorationLine:"underline",color:"white",fontSize:18}}>Forget password?</Text></TouchableOpacity> */}
                </View>
                {/* <View><Text style={{color:"white",fontSize:20}}>Or Signin With</Text></View>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",gap:10}}>
                     <View style={{borderRadius:"50%",padding:5,backgroundColor:"#0080FF"}}>
                     <Image
                        source={require("../images/Assets/Home_Screen/facebook.png")}
                        style={{width:40,height:40}}
                     />
                     </View>
                     <View style={{borderRadius:"50%",padding:10,backgroundColor:"red"}}>
                     <Image
                        source={require("../images/Assets/Home_Screen/email.png")}
                        style={{width:30,height:30}}
                     />
                     </View>
                     <View style={{borderRadius:"50%",padding:5,backgroundColor:"#0080FF"}}>
                     <Image
                        source={require("../images/Assets/Home_Screen/twitter.png")}
                        style={{width:40,height:40}}
                     />
                     </View>
                </View> */}
            </View>
            <ImageBackground style={{width:"100%",height:300,display:"flex",alignItems:"center",justifyContent:"center"}}
            source={require("../images/Assets/Login_Screen/image.png")}
            >
                <TouchableOpacity style={{backgroundColor:"orange",padding:10,borderRadius:20}} onPress={()=>{Nav.navigate("singup")}}>
                    <Text style={{fontSize:20,color:"white"}}>
                    Already Have a Account ? Sign in 
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        </ImageBackground>
        </>
    )
}

const style=StyleSheet.create({
    parent:{
        width:"90%",
        height:730,
        borderRadius:20,
        backgroundColor:"#232325",
        display:"flex",
        alignItems:"center",
        gap:20,
        justifyContent:"center",
    },
    heading:{
        fontSize:40,
        color:"white",
    },
    input:{
        width:300,height:50,backgroundColor:"white",borderRadius:10
    }
})