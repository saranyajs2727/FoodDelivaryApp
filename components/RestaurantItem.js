import React from 'react'
import { Text, View,Image,  } from 'react-native'
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://wallpapercave.com/wp/wp1874159.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
      },
    {
        name: "ThalapaKattu",
        image_url:
          "https://c0.wallpaperflare.com/preview/565/228/846/japanese-japan-restaurant-culture.jpg",
        categories: ["briyani", "Bar"],
        price: "$$",
        reviews: 1876,
        rating: 4.2,
      },
    {
      name: "India's Grill",
      image_url:
        "https://assets.gqindia.com/photos/5cdc74897813c415f22fc949/master/pass/cafe-mozaic.png",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
 
export default function RestaurantItem({ navigation, ...props }) {
    return (
     <View>
        {props.restaurantData.map((restaurant,val) =>(
          <TouchableOpacity activeOpacity={1} 
          key={val}
          style={{marginBottom:30}}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
          > 
       
         <View key={val} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage image={restaurant.image_url}/>
       <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
      </TouchableOpacity>
      ))}
      </View>
    )
}

const RestaurantInfo = (props) => (
  
    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold" ,color:"black",}}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray",color:"black", }}> 30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        color:"black",
        fontSize:20,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
)


const RestaurantImage = (props) => (
    <>
    <Image 
     source={{
         uri:props.image
     }}
     style={{ width: "100%", height: 180 }}
    />
   
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
    <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
  </TouchableOpacity>
    </>
    
);

