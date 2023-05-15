import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen=()=> {
  const navigation = useNavigation();
  return (
    <View>
    
     <Image 
        style={{height:370,width:"100%",resizeMode:"contain"}}
        source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k2hf2J5rbVVpb4Z1Gy4y9D0vWZHQnA1dW6GxHchAKtufJapZ_bJOkZ_ESB3nDoSvgFw&usqp=CAU",
        }}
     />
     <View style={{padding:10}}>
      <Text style={{textAlign:'center',color:"magenta",fontSize:17,fontWeight:"600"}}>QUIZ RULES</Text>
    <View style={{backgroundColor:"#F88379",padding:10,borderRadius:6,marginTop:15 }}>
    <View style={{alignItems:"center",flexDirection:"row"}}>
<Text style={{color:"white"}}>*</Text>
<Text style={{margin:4,color:"#722F37",fontSize:15,fontWeight:"500",marginVertical:5}}>For each correct answer you got 5 points</Text>
    </View>
    <View style={{alignItems:"center",flexDirection:"row"}}>
<Text style={{color:"white"}}>*</Text>
<Text style={{margin:4,color:"#722F37",fontSize:15,fontWeight:"500",marginVertical:5}}>There is no nagitive marking for wrong answer</Text>
    </View>
    <View style={{alignItems:"center",flexDirection:"row"}}>
<Text style={{color:"white"}}>*</Text>
<Text style={{margin:4,color:"#722F37",fontSize:15,fontWeight:"500",marginVertical:5}}>Each question has a time limit of 15 seconds</Text>
    </View>
    <View style={{alignItems:"center",flexDirection:"row"}}>
<Text style={{color:"white"}}>*</Text>
<Text style={{margin:4,color:"#722F37",fontSize:15,fontWeight:"500",marginVertical:5}}>You have to compulsorily answer all the Question Given</Text>
    </View>
    </View>
     </View>
     <Pressable onPress={()=>navigation.navigate("Quiz")} style={{ marginTop:30,backgroundColor:"magenta",padding:14,width:120,borderRadius:25,marginLeft:"auto",marginRight:"auto"}}>
      <Text style={{textAlign:"center",color:"white",fontWeight:"600"}}>Start Quiz</Text>
     </Pressable>
    </View>
  )
}
export default HomeScreen
const styles = StyleSheet.create({})