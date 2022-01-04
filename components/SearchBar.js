import React,{useState} from 'react'
import { Text, View,TextInput,Button,TouchableOpacity} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar( {cityHandler}) {
  const [text, setText] = useState('');
  const handleButtonClick= () => {
    console.log(text); // logs undefined
    cityHandler(text)
     setText(" ")
  };
    return (
     <View style={{ marginTop: 15, flexDirection: "row",color:"black" }}>
       <View style={{ marginLeft: 10 , marginTop: 7}}>
         <Ionicons name="location-sharp" size={24} color="black" />
       </View>
       
     <TextInput
       style={{height: 40,marginRight:150,borderRadius: 20,
               fontWeight: "700",
               marginTop: 7,color:"black"}}
       onChangeText={text => setText(text)}
       onSubmitEditing={handleButtonClick} 
       value={text}
       placeholder="Search"
    //  style={{
    //        backgroundColor: "red",
    //        borderRadius: 20,
    //        fontWeight: "700",
    //        marginTop: 7,
    //        color:"black",
       
    //        backgroundColor: "#eee",
    //        borderRadius: 50,
    //        flexDirection: "row",
    //        alignItems: "center",
    //        marginRight: 10,
         
    //    }}
     />
     <View style={{
              flexDirection:"row",
              marginRight:80,
              backgroundColor:"white",
              padding:9,
              borderRadius:30,
              alignItems:"center",
              color:"black",
          }}>
         <AntDesign name="clockcircle" size={11} color="black"
         style={{marginRight:6}}/>
          <Text>Search</Text>
          </View>


         
     </View>
      // <GooglePlacesAutocomplete 
      // query={{ key: "AIzaSyC_--e34ZJf3PdFbNgW_nupn93rnKmv6iA" }}
      // onPress={(data, details = null) => {
      //   console.log(data.description);
      //   const city = data.description.split(",")[0];
      //   cityHandler(city);
      // }}
      // placeholder="Search"
      // styles={{
      //   textInput: {
      //     backgroundColor: "#eee",
      //     borderRadius: 20,
      //     fontWeight: "700",
      //     marginTop: 7,
      //     color:"black",
      //   },
      //   textInputContainer: {
      //     backgroundColor: "#eee",
      //     borderRadius: 50,
      //     flexDirection: "row",
      //     alignItems: "center",
      //     marginRight: 10,
      //   },
      // }}
      // renderLeftButton={() => (
      //   <View style={{ marginLeft: 10 }}>
      //     <Ionicons name="location-sharp" size={24} 
      //     />
      //   </View>
      // )}
      // renderRightButton={() =>(
      //     <View style={{
      //         flexDirection:"row",
      //         marginRight:8,
      //         backgroundColor:"white",
      //         padding:9,
      //         borderRadius:30,
      //         alignItems:"center",
      //     }}>
      //    <AntDesign name="clockcircle" size={11} 
      //    style={{marginRight:6}}/>
      //     <Text>Search</Text>
      //     </View>
      // )}
      // />
      
       
    )
}
