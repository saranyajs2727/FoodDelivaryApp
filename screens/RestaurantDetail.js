import React from 'react'
import { View,Text ,ScrollView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/About'
import MenuItem from '../components/MenuItem';
import ViewCart from '../components/ViewCart';
const foods = [
  {
    title: "ThalapaKattu",
    description :"Biryani is nothing but just a state of happiness 🏳️ Biryani is not just a food🍖",
    price: "$120",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbbmNbTciFnqOSCYS4wybTQzx6_O-X2U8mA&usqp=CAU",

  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },

  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Non - Veg Meals",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$40.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnK8EzUOz_ewI5l5GDY8oCB-bw8E7CShPkiQ&usqp=CAU",
  },

];
// const foods = [
//   {
//     title: "Beachside Bar",
//     description :"Talk about the Appearance, Texture, and Taste of the Dish",
//     price: "$200",
//     image:
//       "https://wallpapercave.com/wp/wp1874159.jpg",
   
 
//   },
//   {
//       title: "Benihana",
//       description :"Lend a USP or Tell a Backstory About the Dish.",
//       price: "$230",
//       image:
//         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    
//     },
//   {
//       title: "ThalapaKattu",
//       description :"Biryani is nothing but just a state of happiness 🏳️ Biryani is not just a food🍖",
//       price: "$120",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbbmNbTciFnqOSCYS4wybTQzx6_O-X2U8mA&usqp=CAU",
 
//     },
//   {
//       title: "India's Grill",
//       description :"Underline the Painstakingly Taken Effort to Create the Dish.",
//       price: "$140",
//       image:
//       "https://www.inspiredtaste.net/wp-content/uploads/2021/06/Grilled-Chicken-Recipe-5-1200-1200x800.jpg",
 
//   },
//   {
//       title: "Grill",
//       description :"Underline the Painstakingly Taken Effort to Create the Dish.",
//       price: "$140",
//       image:
//       "https://assets.gqindia.com/photos/5cdc74897813c415f22fc949/master/pass/cafe-mozaic.png",

//   },
//   {
//       title: "India's Grill",
//       description :"Underline the Painstakingly Taken Effort to Create the Dish.",
//       price: "$140",
//       image:
//       "https://assets.gqindia.com/photos/5cdc74897813c415f22fc949/master/pass/cafe-mozaic.png",

//   },

// ];
export default function RestaurantDetail({route, navigation}) {
    return (
      <ScrollView>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
      </ScrollView>
     
    )
}
