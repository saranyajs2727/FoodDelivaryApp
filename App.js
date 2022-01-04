// import 'react-native-gesture-handler';
// import React from 'react'
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import ButtonTabs from "./Screens/ButtonTabs"
// import Categories from './Screens/Categories';
// import Items from './Screens/Items';
// import { Provider as ReduxProvider } from "react-redux";
// import configureStore from "./redux/Store";
// import RestaurantDetail from './Screens/RestaurantDetail';
// import About from './Components/About';

// const store = configureStore();
// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (

//     <ReduxProvider store={store}>
//     <NavigationContainer>
//     <Stack.Navigator >
//     {/* <Stack.Screen name="Categories" component={Categories} />
//     <Stack.Screen name="ButtonTabs" component={ButtonTabs} /> */}
//     {/* <Stack.Screen name="Items" component={Items} /> */}
//     {/* <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} /> */}
//     <Stack.Screen name="About" component={About} />
//     </Stack.Navigator>
//     </NavigationContainer>
//     </ReduxProvider>
//   )
// }
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //     <Stack.Screen name="hello" component={hello} />

// //     </NavigationContainer>
// //   );
// // }


import React from 'react'

import RootNavigation from "./navigation";
export default function App() {
  return <RootNavigation />;
      
  
}