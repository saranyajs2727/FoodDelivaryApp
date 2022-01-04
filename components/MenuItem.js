import React from 'react'
import { Text, View ,StyleSheet, Image, ScrollView} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch } from "react-redux";

  const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
      color:"black",
      marginBottom:60,
    },
  
    titleStyle: {
      fontSize: 23,
      fontWeight: "800",
      color:"black",
    },
   
  });
export default function MenuItem({ restaurantName,
  foods}) {

  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

      return (
   <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food,index) =>(
   <View key={index}>
       <View style={styles.menuItemStyle}>
       <BouncyCheckbox 
       iconStyle={{ borderColor:"black"}}
       fillColor='#1c0696'
      // #1c0696
       onPress={(checkboxValue) => selectItem(food, checkboxValue)}
       />
       
       <FoodInfo food={food} />
        <FoodImage food={food} />
      </View>   
       <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
      </View>
      ))}
      </ScrollView>
    )
}

 const FoodInfo = (props) => (
   <View style={{ width: 240, justifyContent: "space-evenly",color:"black",fontWeight:"bold"}}>
   <Text style={styles.titleStyle}>{props.food.title}</Text>
   <Text style={{color:"black",fontWeight:"400"}}>{props.food.description}</Text>
   <Text style={{color:"black",fontWeight:"800"}}>{props.food.price}</Text>
   </View>
 )

 const FoodImage = (props) => (
     <View>
      <Image source={{uri : props.food.image}}
      style={{width:85,height:100,borderRadius:8}}
      />
     </View>
 )