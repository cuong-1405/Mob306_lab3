import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Nguyễn Văn Cường</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("./Image/nvc.jpg")} // Đường dẫn hình ảnh
          style={styles.image}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Canh giữa theo chiều dọc
    alignItems: "center", // Canh giữa theo chiều ngang
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain", // Tuỳ chỉnh để ảnh vừa với khung
  },
});

export default HomeScreen;
