import React from "react";
// import { CheckBox } from "react-native-elements";
// import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { View,Text,StyleSheet,TextInput,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Key from 'react-native-vector-icons/Entypo';

export default function Login()
{
const myIcon = <Icon name="envelope-o" size={25} color="#ffffff" />;
const mykey=<Key name='key' size={25} color="#ffffff" />

    return(
        <View style={loginstyle.main}>
            <View style={loginstyle.signin}>
                <Text style={loginstyle.signin_text}>SIGN IN</Text>
                <View style={loginstyle.block}>
                    <Text style={loginstyle.block_text}>Email</Text>
                    <View style={loginstyle.block_input_block}>
                        <Text style={loginstyle.icon}>{myIcon}</Text>
                        <TextInput style={loginstyle.input_field} placeholder=""/>
                    </View>
                </View>
                <View style={loginstyle.block}>
                    <Text style={loginstyle.block_text}>password</Text>
                    <View style={loginstyle.block_input_block}>
                        <Text style={loginstyle.icon}>{mykey}</Text>
                        <TextInput style={loginstyle.input_field} placeholder=""/>
                    </View>
                </View>
                <Text style={loginstyle.forget_password}>forget password ?</Text>
                <View style={loginstyle.rememeber_me_block}>
                    {/* <CheckBox title='remember me' style={{width:'100%',height:20}}/> */}
                    <Text style={loginstyle.rememver_me_text}>REMEMBER ME</Text>
                </View>
                <Text style={loginstyle.login_butoon}>
                    LOGIN
                </Text>
                <Text style={loginstyle.simple}>or</Text>
                <Text style={loginstyle.simple}>sign in with</Text>
                <View style={loginstyle.images_block}>
                    <Image style={loginstyle.image} source={require('../images/google.jpeg')}/>
                    <Image style={loginstyle.image} source={require('../images/facebook.png')}/>
                </View>
            </View>
            <Text style={loginstyle.SignUP}>Don't have an accout <Text>SIGN UP</Text></Text>
        </View>
    )
}
const loginstyle=StyleSheet.create({
    main:{
        paddingTop:150,
        width:'100%',
        height:'100%',
        backgroundColor:'#549BED',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        gap:20,
    },
    signin:{
        width:'75%',
        height:"auto",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
    },
    signin_text:{
        fontSize:25,
        color:'white',
        textAlign:'center',
    },
    block:{
        width:'100%',
        gap:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    block_text:{
        fontSize:20,
        color:'white',
        alignSelf:'flex-start'
    },
    block_input_block:{
        width:'100%',
        height:50,
        backgroundColor:'#6CA7F3',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
        // shadowColor:'black',
        // shadowOffset: { width: 50, height: 20 },
        // shadowOpacity:2,
        // shadowRadius: 4,
        // borderRadius: 8,
    },
    icon:{
        width:'10%',
        fontSize:10,
    },
    input_field:{
        width:'83%',
        height:'100%',
        fontSize:20,
        padding:0,
        margin:0,
    },
    forget_password:{
        width:'100%',
        textAlign:'right',
        color:'white',
    },
    rememeber_me_block:
    {
        width:'100%',
        display:'flex',
    },
    rememver_me_text:{
        width:'100%',
        color:'white'
    },
    login_butoon:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        borderRadius:20,
        color:'#549BED',
        fontSize:30,
        textAlign:'center',
        textAlignVertical:'center',
    },
    simple:{
        textAlign:'center',
        width:'100%',
        color:'white',
        fontWeight:200
    },
    images_block:{
        width:'50%',
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        gap:25,
        justifyContent:'center'
    },
    image:{
    width:40,
    height:40,
    borderRadius:50,
    },
    SignUP:{
        textAlign:'center',
        color:'white',
    }
})