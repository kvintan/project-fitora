import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("window");

const foodData = [
  {
    id: "1",
    title: "Avocado Toast with Sunny-Side-Up Eggs",
    image: require("../assets/menu-1.png"),
    time: "25 mins",
    calories: "350kcal",
  },
  {
    id: "2",
    title: "Grilled Chicken Salad",
    image: require("../assets/menu-2.png"),
    time: "25 mins",
    calories: "350kcal",
  },
  {
    id: "3",
    title: "Tuna Wrap",
    image: require("../assets/menu-3.png"),
    time: "10 mins",
    calories: "250kcal",
  },
  {
    id: "4",
    title: "Vegetable Soup",
    image: require("../assets/menu-4.png"),
    time: "20 mins",
    calories: "200kcal",
  },
  {
    id: "5",
    title: "Beef Veggies Stir-Fry",
    image: require("../assets/menu-5.png"),
    time: "25 mins",
    calories: "450kcal",
  },
  {
    id: "6",
    title: "Tuna Wrap",
    image: require("../assets/menu-6.png"),
    time: "20 mins",
    calories: "400kcal",
  },
  {
    id: "7",
    title: "Tuna Wrap",
    image: require("../assets/menu-7.png"),
    time: "10 mins",
    calories: "200kcal",
  },
];

export default function FoodPage() {
  return (
    <ImageBackground
      source={require("../assets/background-food.png")}
      style={styles.image}
    >
      <View style={styles.overlay}></View>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
        locations={[0, 0.42, 0.65]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientRectangle}
      />

      <Text style={styles.foodText}>Food</Text>
      <Text style={styles.foodTextDescription}>
        Your Goals, Your Taste, Your Menu
      </Text>

      <View style={styles.carouselContainer}>
        <Carousel
          loop
          width={width * 0.7}
          height={280}
          autoPlay={true}
          data={foodData}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.foodImage} />
              <Text style={styles.foodTitle}>{item.title}</Text>
              <View style={styles.metaInfo}>
                <View style={styles.metaItem}>
                  <Image
                    source={require("../assets/time-food.png")}
                    style={styles.metaIcon}
                  />
                  <Text style={styles.metaTextTime}>{item.time}</Text>
                </View>
                <Text style={styles.metaText}>🔥 {item.calories}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  gradientRectangle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
  },

  foodText: {
    fontSize: 39,
    fontFamily: "Unbounded",
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "flex-start",
    width: "50%",
    marginLeft: "7%",
    // marginTop: "-170%",
  },

  foodTextDescription: {
    fontSize: 12,
    fontFamily: "Unbounded",
    color: "#CFED89",
    alignSelf: "flex-start",
    width: "100%",
    marginLeft: "7%",
    marginTop: "2%",
  },

  carouselContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    width: width * 0.65,
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    shadowColor: "#000",
    elevation: 4,
  },

  foodImage: {
    width: "112%",
    height: 170,
    borderRadius: 15,
    marginTop: "-6%",
    resizeMode: "cover",
  },

  foodTitle: {
    marginTop: 12,
    color: "#333",
    fontSize: 16,
    fontFamily: "UnboundedSemiBold",
    textAlign: "center",
  },

  metaInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 8,
  },

  metaText: {
    color: "#666",
    fontSize: 12,
    fontFamily: "UnboundedLight",
  },

  metaTextTime: {
    color: "#666",
    fontSize: 12,
    fontFamily: "UnboundedLight",
    marginTop: "4.5%",
  },

  metaItem: {
    flexDirection: "row",
  },
});
