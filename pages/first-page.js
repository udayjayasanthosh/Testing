import React, { useRef,useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity } from 'react-native';
export default function First() {
    const [pin,setpin]=useState(['','','','']);
    function Handlinginput(value)
    {
        var a=[...pin]
        for(let i=0;i<4;i++)
        {
            if(a[i]=='')
            {
                a[i]=value
                break
            }
        }
        setpin([...a])
    }
    function Handlingbackspace()
    {
        var a=[...pin]
        for(let i=3;i>=0;i--)
        {
            if(a[i]!='')
            {
                a[i]=''
                break
            }
        }
        setpin([...a])
    }
    function login()
    {
        alert('login');
    }
    return (
        <View style={first_style.login_page}>
            <View style={first_style.pin}>
                <Text style={first_style.pin_header}>Enter Your Pin</Text>
                <View style={first_style.password_block}>
                    <Text style={first_style.password_text}>{pin[0]}</Text>
                    <Text style={first_style.password_text}>{pin[1]}</Text>
                    <Text style={first_style.password_text}>{pin[2]}</Text>
                    <Text style={first_style.password_text}>{pin[3]}</Text>
                </View>
            </View>
            <View style={first_style.keypad} >
                    <TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('1')}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('2')}}>2</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('3')}}>3</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('4')}}>4</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('5')}}>5</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('6')}}>6</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('7')}}>7</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('8')}}>8</Text>
                    </TouchableOpacity><TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('9')}}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={first_style.keypad_button_backspace} onPress={()=>{Handlingbackspace()}}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={first_style.keypad_button} onPress={(event)=>{Handlinginput('0')}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={first_style.keypad_button_login} onPress={()=>{login()}}>in</Text>
                    </TouchableOpacity> 
            </View>
        </View>
    );
}

const first_style = StyleSheet.create({
    login_page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#091223',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        top:25
    },
    pin:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        width:'90%',
    },
    pin_header: {
        fontSize: 30,
        color:'white',
    },
    password_block: {
        width: '90%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keypad:{
        width:'90%',
        height:'auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        gap:50,
    },
    keypad_button:{
        width:75,
        height:75,
        backgroundColor:'white',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25,
        borderRadius:50,
    },
    keypad_button_backspace:{
        width:75,
        height:75,
        backgroundColor:'black',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25,
        borderRadius:50,
        color:'white'
    },
    keypad_button_login:{
        width:75,
        height:75,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25,
        borderRadius:50,
        backgroundColor:'skyblue'
    },
    password_text: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical:'center'
    },
});
