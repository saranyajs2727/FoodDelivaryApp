import React ,{useState,useEffect} from 'react'
import { SafeAreaView, ScrollView,View } from "react-native";
import Categories from '../components/Categories';
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItem from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItem";
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/BottomTabs';

const YELP_API_KEY ="TcQrpOCqw7IWRpOHoYNWAFkxgPUolhvgY0_frPoykyBauTdmNW-S_cN3cP1_VeN66qrqjRWxxmpQJPnGJmM7n6OBbIt-5cSeCaaQYubots_7-Cng6K6DSgHHMPvOYXYx"

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");
  const [city, setCity] = useState("San Francisco");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) =>
      setRestaurantData(
        json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        )
      )
    );
      
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city,activeTab]);

  return (
     
            <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
              <View style={{ backgroundColor: "white", padding: 15 }}>
              <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity}  />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem   restaurantData={restaurantData} navigation={navigation}/>
     
              </ScrollView>
              <Divider width={1}/>
              <BottomTabs />

              </SafeAreaView>
    )
}
