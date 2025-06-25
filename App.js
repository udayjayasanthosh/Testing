// import { StatusBar } from 'expo-status-bar';
// import { useState, useEffect } from 'react';
// import First from './pages/first-page.js';
// import Tables from './practice/table.js';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Button, TouchableOpacity, Switch, ActivityIndicator, ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-web';

// export default function App() {
//   const data=[
//     1,2,3,5,4
//   ]
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>hello</Text>
//       <StatusBar style="auto" />
//       <TextInput
//         placeholder="Enter your input"
//         keyboardType="numeric"
//         secureTextEntry={true}
//         style={styles.input}
//       />
//       <Image
//         source={{
//           uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/450px-Norton_Motorcycle.jpg",
//         }}
//         style={styles.image}

//       />
//       {/* <FlatList

//         data={data}
//         renderItem={({item})=>
//           <View style={styles.ren}>
//               <Text style={styles.rendering}>{item}</Text>
//           </View>
//         }
//         horizontal
//         // numColumns={3}
//       /> */}
//       <TouchableOpacity >
//       <Button title='press me' />
//       <Text>click me</Text>
//       </TouchableOpacity>
//       <Switch value={true}/>
//       {/* <ActivityIndicator size='large' color='green' /> */}
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'red',
//     fontSize:50,
//     marginBottom: 10,
//     fontWeight:900,
//     textShadowColor:'green',
//     textDecorationLine:'underline',
//     // border
//   },
//   input: {
//     height: 40,
//     width: 200,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   image: {
//     width: 200,
//     height: 150,
//     resizeMode: 'cover',
//     borderRadius:10,
//   },
//   rendering:{
//     width:40,
//     height:60,
//     color:'blue',
//     fontSize:50,
//     backgroundColor:'red',
//     borderRadius:10

//   },
//   ren:{
//     width:50,
//     height:100,
//     flex:1,
//     justifyContent:'center',
//     alignItems:'start',
//     backgroundColor:'black'
//   }
// });

// export default function App()
// {
//   const [time,settime]=useState("00:00:00");
//   const [hh,sethh]=useState(0)
//   const [input,setinput]=useState("000000");
//   const [mm,setmm]=useState(0)
//   const [ss,setss]=useState(0)
//   var hrs;
//   var mins;
//   var secs;
//   function Timer()
//   {
//     const date=new Date()
//     var a=date.toLocaleTimeString().split(':')
//     var b=a[0]
//     var c=a[1]
//     var d=a[2]
//     if(d[1])
//     settime(b+":"+c+':'+d[0]+d[1])
//     else
//     settime(b+":"+c+':'+d[0])
//   }
//   setInterval(Timer,1000)
//   function Handling(e)
//   {
//       setinput(e.nativeEvent.text)
//   }
//   function hours()
//   {
//       if(hh>0)
//       {
//         sethh(hh-1)
//       }
//       else{
//         clearInterval(hrs)
//       }
//   }
//   function minutes()
//   {
//     if(hh>0 && mm>0)
//     {
//       setmm(mm-1)
//     }
//     else if(mm==0 && hh>0)
//     {
//       setmm(59)
//     }
//     else{
//       clearInterval(mins)
//     }
//   }
//   function seconds()
//   {
//       if(ss>0)
//       {
//           setss(ss-1)
//       }
//       else if((hh>0 || mm>0)&&ss==0)
//       {
//           setss(59)
//       }
//       else{
//         clearInterval(secs)
//       }
//   }
//   function startTimer()
//   {
//       const a=parseInt(input[0]+input[1])
//       const b=parseInt(input[2]+input[3])
//       const c=parseInt(input[4]+input[5])
//       sethh(a)
//       setmm(b)
//       setss(c)
//       hrs=setInterval(hours,3600000)
//       mins=setInterval(minutes,60000)
//       secs=setInterval(seconds,1000)
//   }
//   return(
//     <View style={styles.body}>
//         <View style={styles.timer}>
//             <Text style={styles.time}>{time}</Text>
//         </View>
//         <View style={styles.timer}>
//           <Text style={styles.time}>{hh}:{mm}:{ss}</Text>
//         </View>
//         <TextInput style={styles.textfield} placeholder='enter time in hh-mm-ss' keyboardType='numeric' onChange={(e)=>{Handling(e)}}/>
//         <Button onPress={()=>{startTimer()}} title='start timer'/>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   body:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#1A2536',
//     gap:10
//   },
//   timer:{
//     display:'flex',
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'center',
//     gap:10,
//     width:250,
//     height:150,
//     backgroundColor:'black',
//     borderRadius:10,

//   },
//   time:{
//       textAlign:'center',
//       fontSize:60,
//       color:'white',
//       backgroundColor:'black'
//   },
//   textfield:{
//     width:200,
//     height:50,
//     backgroundColor:'#0E35B7',
//     borderRadius:10,
//     fontSize:18,
//     textAlign:'center'
//   },
// })
// import FadeInExample from './practice/animations.js';
// import Toasting from './practice/tost.js';
// import Tabletask from './practice/tables.js';
// import Chatgpt_table from './practice/chatgpt_table.js';
// import Login from './practice/login.js';
// import Carosel from './practice/carosel.js';
// import Nav_task from './practice/Task_nav.js';
// import Safe from './practice/safe_area_view.js';
// import Calenderr from './practice/calender.js';
// import Alar from './practice/alaram.js';
// import Skeleton from './practice/skeleton.js';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Screen1 from './practice/screen1.js';
// import Screen2 from './practice/screen2.js';
// import { createMaterialTopTabNavigator, } from '@react-navigation/material-top-tabs';
// import Screen3 from './practice/screen3.js';
// import Screen4 from './practice/screen4.js';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon from "react-native-vector-icons/AntDesign.js"
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { createMaterialBottomTabNavigator } from 'react-native-paper/lib/typescript/react-navigation/index.js';
// import Alarm from './practice/alaram.js';
// import Local_authentication from './practice/local_authentication.js';
// import Noti from './practice/notification.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Signup } from './Module/login-page.js';
import { SignIn } from './Module/sign_in.js';
import { NavigationContainer } from '@react-navigation/native';
import { Home_page } from './Module/home.js';
import { createStackNavigator } from '@react-navigation/stack';
import { Homily } from './Module/homily.js';
export default function App() {
  const stack = createStackNavigator();
  // const top = createMaterialTopTabNavigator();
  // const left = createDrawerNavigator();
  return (
    // <SafeAreaView></SafeAreaView>
    // <ScrollView contentContainerStyle={styles.main} horizontal>
    //     <View style={styles.block}>
    //       <Image style={styles.upper} 
    //       source={require('./images/person3.png')}/>
    //       <View style={styles.lower}>
    //         <View style={styles.matter}>
    //             <Text style={styles.text}>NAME :  <Text style={styles.text1} >UDAY </Text></Text>
    //             <Text style={styles.text}>ROLL:  <Text style={styles.text1} >22A91A0515 </Text></Text>
    //             <Text style={styles.text}>BRANCH :  <Text style={styles.text1} >CSE </Text></Text>
    //             <Text style={styles.text}>COLLEGE :  <Text style={styles.text1} >AEC </Text></Text>
    //             <Text style={styles.text}>EMAIL :  <Text style={styles.text1} >uday@email.com</Text></Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.block}>
    //       <Image style={styles.upper} 
    //       source={require('./images/person2.jpeg')}/>
    //       <View style={styles.lower}>
    //         <View style={styles.matter}>
    //             <Text style={styles.text}>NAME   :  <Text style={styles.text1} >JAYA </Text></Text>
    //             <Text style={styles.text}>ROLL   :  <Text style={styles.text1} >22A91A0545 </Text></Text>
    //             <Text style={styles.text}>BRANCH :  <Text style={styles.text1} >CSE </Text></Text>
    //             <Text style={styles.text}>COLLEGE:  <Text style={styles.text1} >AEC </Text></Text>
    //             <Text style={styles.text}>EMAIL  :  <Text style={styles.text1} >jaya@email.com</Text></Text>

    //         </View>
    //       </View>
    //     </View>
    //     <View style={styles.block}>
    //       <Image style={styles.upper} 
    //       source={require('./images/person1.jpeg')}/>
    //       <View style={styles.lower}>
    //         <View style={styles.matter}>
    //             <Text style={styles.text}>NAME :  <Text style={styles.text1} >Santhosh </Text></Text>
    //             <Text style={styles.text}>ROLL:  <Text style={styles.text1} >22A91A0585 </Text></Text>
    //             <Text style={styles.text}>BRANCH :  <Text style={styles.text1} >CSE </Text></Text>
    //             <Text style={styles.text}>COLLEGE :  <Text style={styles.text1} >AEC </Text></Text>
    //             <Text style={styles.text}>EMAIL :  <Text style={styles.text1} >santhu@gmail.com </Text></Text>

    //         </View>
    //       </View>
    //     </View>
    // </ScrollView >
    // <First/>
    // <SafeAreaView>
    // <Tables/>
    // <FadeInExample/>
    // <Tabletask/>
    // <Chatgpt_table/>
    // {/* </SafeAreaView> */}
    // <Login/>
    // <Safe/>
    // <>
    // </>
    <>
      {/* <Toasting/> */}
      {/* <SafeAreaView> */}
      {/* <Carosel/> */}
      {/* <Nav_task/> */}
      {/* <Calenderr/> */}
      {/* <Alar/> */}
      {/* <Animating/> */}
      {/* <Skeleton/> */}
      {/* <FadeInExample/> */}
      {/* </SafeAreaView> */}
      {/* <SafeAreaView> */}
      {/* <NavigationContainer> */}
      {/* <stack.Navigator screenOptions={{headerStyle:{backgroundColor:'green'},headerTintColor:"white",headerTitleAlign:"center"}}>
              <stack.Screen name="screen1" component={Screen1}/>
              <stack.Screen name="screen2" component={Screen2}/>
            </stack.Navigator> */}
      {/* <top.Navigator screenOptions={({route})=>({tabBarLabel:({color})=>(
              <>
              {route.name=="screen1" ? <Text style={{fontSize:25,color:color}}>Hello</Text>:<></>}
              {route.name=="screen2" ? <Text style={{fontSize:25,color:color}}>second</Text>:<></>}
              </>
            ),tabBarActiveTintColor:"white",lazy:true,tabBarPressOpacity:10,swipeEnabled:true,tabBarStyle:{backgroundColor:"green",},tabBarIndicatorStyle:{backgroundColor:"black",height:10}})}>
              <top.Screen name="screen1" component={Screen1}/>
              <top.Screen name="screen2" component={Screen2}/>
            </top.Navigator> */}
      {/* <stack.Navigator>
              <stack.Screen name="screen3" component={Screen3} />
              <stack.Screen name="screen4" component={Screen4}/>
            </stack.Navigator>
        </NavigationContainer> */}
      {/* </SafeAreaView> */}
      {/* <NotificationButton/> */}
      {/* <Alarm/> */}
      {/* <NavigationContainer>
        <left.Navigator screenOptions={({ route }) => ({
          drawerActiveTintColor: "red",
            headerTitle: ({ color }) => (route.name == "screen1" ? <Text style={{ color: color }}>Hello</Text> : <Text style={{ color: color }}>People</Text>),
            headerTintColor: "blue", 
            drawerIcon: () => (route.name == "screen1" ? <Icon name="home" size={20} /> : <Icon name="plus" size={20} />),
            drawerLabelStyle: { fontSize: 20 },
            drawerPosition: "right",
            drawerStyle: { width: 200 },
            drawerType:"front",
        })}>
          <left.Screen name="screen1" component={Screen1} />
          <left.Screen name="screen2" component={Screen2} />
        </left.Navigator>
      </NavigationContainer> */}
      {/* <SafeAreaView> */}
        {/* <Local_authentication/> */}
        {/* <Noti/> */}
      {/* </SafeAreaView> */}
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
          <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="singin" component={SignIn}/>
            <stack.Screen name="singup" component={Signup}/>
            <stack.Screen name="home" component={Homily}/>
          </stack.Navigator>
        </NavigationContainer>
        {/* <Signup/> */}
        {/* <SignIn/> */}
        {/* <Home_page/> */}
      </SafeAreaView>
    </>
  )
}

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // rowGap:20,
//     // position:'relative',
//     // marginTop:200
//   },
//   block: {
//     width: 290,
//     height: 380,
//     display: 'flex',
//     flexDirection: 'column-reverse',
//     alignItems: 'center',
//     position: 'relative',
//     marginHorizontal: 10,
//   },
//   upper: {
//     width: 120,
//     height: 120,
//     // backgroundColor:'blue',
//     borderRadius: 100,
//     position: 'absolute',
//     top: 0,
//     zIndex: 5,
//     borderWidth: 5,
//     borderColor: 'white',
//   },
//   lower: {
//     width: 290,
//     height: 320,
//     backgroundColor: '#69eaca',
//     borderRadius: 20,
//     display: 'flex',
//     flexDirection: 'column-reverse'
//   },
//   matter: {
//     width: 250,
//     height: 250,
//     // backgroundColor:'red',
//     alignSelf: 'center',
//     display: 'flex',
//     alignItems: 'start',
//     justifyContent: 'center',
//     gap: 20
//   },
//   text: {
//     fontSize: 20
//   },
//   text1: {
//     color: 'white'
//   }

// })