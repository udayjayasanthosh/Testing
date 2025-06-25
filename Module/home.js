import React from "react";
import { View, StyleSheet, Animated, Text, ScrollView, Image,ImageBackground } from "react-native";
export function Home_page() {
    return (
        <>
            <ScrollView style={style.parent}>
                <View style={style.heading}>
                    <Text style={{ fontSize: 60, color: "white", width: 400 }}>Make Your </Text>
                    <Text style={{ fontSize: 60, color: "orange", width: 400 }}>Dream Food</Text>
                    <Text style={{ fontSize: 60, color: "white", width: 400 }}>With Us</Text>
                </View>
                <View style={style.images}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "spaca-between", gap: 100 }}>
                        <Image
                            style={{ width: 125, height: 100 }}
                            source={require("../images/Assets/Home_Screen/burger1.png")}
                        />
                        <Image
                            style={{ width: 125, height: 100 }}
                            source={require("../images/Assets/Home_Screen/biriyani2.png")}
                        />
                    </View>
                    <View style={{ backgroundColor: "orange", width: 300, height: 300, borderRadius: "50%" }}>
                        <Image
                            style={{ width: 300, height: 275 }}
                            source={require("../images/Assets/Home_Screen/girl.png")}
                        />
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "spaca-between", gap: 100 }}>
                        <Image
                            style={{ width: 125, height: 100 }}
                            source={require("../images/Assets/Home_Screen/icecream.png")}
                        />
                        <Image
                            style={{ width: 125, height: 100 }}
                            source={require("../images/Assets/Home_Screen/pizza.png")}
                        />
                    </View>
                </View>
                <View style={style.comment}>
                    <View>
                        <Text style={{ color: "white", fontSize: 40 }}>
                            500+
                        </Text>
                        <Text style={{ color: "grey", fontSize: 20 }}>Reviews</Text>
                    </View>
                    <View>
                        <Text style={{ color: "white", fontSize: 40 }}>
                            5K+
                        </Text>
                        <Text style={{ color: "grey", fontSize: 20 }}>Comments</Text>
                    </View>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>2000+ Happy USers</Text>
                    <Text style={{ fontSize: 20, color: "grey" }}>4.8 Rating{"("}500+ Reviews {")"}</Text>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                    <View>
                        <Image
                        style={{ width:200, height: 90, borderRadius: 70,elevation:5 }}
                            source={require("../images/Assets/Login_Screen/recipe.png")}
                        />
                    </View>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 50 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>Best Delicious Food</Text>
                    <Text style={{ fontSize: 15, color: "grey" }}>We Have the Best Collection of food recipe</Text>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 70 }}>
                    <ImageBackground style={{width:100,height:100,position:"relative"}}
                    source={require("../images/Assets/Home_Screen/logo3.png")}
                    >
                        <Image
                        style={{width:170,height:170,position:"absolute",right:-34,top:-32}}
                        source={require("../images/Assets/Home_Screen/veggies.png")}
                        />
                    </ImageBackground>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <Text style={{fontSize:30,color:"white"}}>
                        Dear Food Lovers,
                    </Text>
                    <Text style={{fontSize:30,color:"white",textAlign:"center"}}>
                        Thank You For visiting Our Recipe App
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    parent: {
        backgroundColor: "#232325",
        width: "100%",
        minHeight: "100%"
    },
    heading: {
        width: 500,
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    images: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 30
    },
    comment: {
        width: "100%", height: 300,
        display: "flex",
        flexDirection: "row", justifyContent: "space-around",
        alignItems: "center"
    }
})