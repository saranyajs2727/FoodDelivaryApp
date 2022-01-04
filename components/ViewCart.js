import React from 'react'
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";
export default function ViewCart() {

    const items= useSelector(
        (state) => state.cartReducer.selectedItems.items
      );
    
      const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
    
      const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });
      console.log("hiiii",totalUSD)
    return (
        <View style={{
            flex:1,
            alignItems:"center",
            flexDirection:"row",
            position:"absolute",
            bottom:10,
            zIndex:99,
        }}>
      <View style={{
          flexDirection:"row",
          justifyContent:"center",
          width:"100%"
      }}>
      <TouchableOpacity  style={{
          marginTop: 20,
          backgroundColor:"black",
          alignItems:"center",
          padding:10,
          borderRadius:30,
          width:200,
          position:"relative",
      }}>
     
      <Text style={{color :"white", fontSize:20}}> VIEWCART   {totalUSD} </Text>
      </TouchableOpacity>
     
      
      </View>
      </View>
    )
}
