
import React from "react";
import { Text, View,SafeAreaView,FlatList,ScrollView,Image,StyleSheet,Dimensions} from "react-native";
import news_data from './news_data.json';
import newsCard from './NewsCard/NewsCard';
import NewsCard from "./NewsCard/NewsCard";
import NewsBannerData from './news_banner_data.json';
 function App() {
  return (
<SafeAreaView>
<Text style={styles.headerText}>News</Text>
 
    <FlatList 
    ListHeaderComponent={()=> <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
      {NewsBannerData.map(bannerNews => <Image style={styles.banner_image} source={{uri:bannerNews.imageUrl}}/>)}
    </ScrollView>}
    keyExtractor={(item,index) => item.u_id.toString()}
    data={news_data}
renderItem ={({item}) =><NewsCard news={item}  />}/>
</SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#eceff1',
    },
    banner_image:{
      height:Dimensions.get('window').height /5,
      width:Dimensions.get('window').width /2,
      
    },
    headerText:{
      fontWeight:'bold',
      fontSize:50,

    }
  });

export default App;