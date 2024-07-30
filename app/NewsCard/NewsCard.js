import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from "./NewsCardStyle";
import { SafeAreaView } from "react-native-safe-area-context";
const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: news.imageUrl }}></Image>
        <View style={styles.inner_container}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.description}>{news.description}</Text>
          <Text style={styles.author}>{news.author}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eceff1" },
});
export default NewsCard;
