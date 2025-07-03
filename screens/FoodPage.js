import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

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
  {
    id: "8",
    title: "Tuna Wrap",
    image: require("../assets/menu-7.png"),
    time: "10 mins",
    calories: "200kcal",
  },
];

const categoryData = [
  { id: "1", title: "Breakfast", icon: require("../assets/category-1.png") },
  { id: "2", title: "Lunch", icon: require("../assets/category-2.png") },
  { id: "3", title: "Dinner", icon: require("../assets/category-3.png") },
  { id: "4", title: "Vegetarian", icon: require("../assets/category-4.png") },
  { id: "5", title: "Soup", icon: require("../assets/category-5.png") },
  { id: "6", title: "High Protein", icon: require("../assets/category-6.png") },
];

const nutritionTipsData = [
  {
    id: "1",
    title: "Hydration Matters: Why Water Is Your Secret Weapon",
    image: require("../assets/nutrition-tips-1.png"),
  },
  {
    id: "2",
    title: "Pre and Post Workout Nutrition: What to Eat and Why",
    image: require("../assets/nutrition-tips-2.png"),
  },
  {
    id: "3",
    title: "Sugar Smart: How to Cut Added Sugar Without Going Crazy",
    image: require("../assets/nutrition-tips-3.png"),
  },
];

export default function FoodPage() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/background-food.png")}
      style={styles.image}
    >
      <View style={styles.overlay} />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
        locations={[0, 0.42, 0.65]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientRectangle}
      />

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Static Header */}
        <View style={styles.header}>
          <Text style={styles.foodText}>Food</Text>
          <Text style={styles.foodTextDescription}>
            Your Goals, Your Taste, Your Menu
          </Text>
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width * 0.75}
            height={280}
            autoPlay
            autoPlayInterval={5000}
            data={foodData}
            scrollAnimationDuration={1000}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 60,
            }}
            pagingEnabled={false}
            renderItem={({ item }) => {
              const content = (
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
              );

              if (item.id === "1") {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("FoodDetail")}
                  >
                    {content}
                  </TouchableOpacity>
                );
              }

              return content;
            }}
          />
        </View>

        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.categoriesGrid}>
          {categoryData.map((cat) => (
            <LinearGradient
              key={cat.id}
              colors={["#2F2F2F", "#393939"]}
              style={styles.categoryBox}
            >
              <Image source={cat.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryLabel}>{cat.title}</Text>
            </LinearGradient>
          ))}
        </View>

        <View style={styles.nutritionHeader}>
          <Text style={styles.nutritionText}>Nutrition Tips</Text>
          <Text style={styles.seeMoreText}>See more &gt;&gt;</Text>
        </View>

        <View style={styles.nutritionTipsContainer}>
          {nutritionTipsData.map((tip) => (
            <LinearGradient
              key={tip.id}
              colors={["#2F2F2F", "#393939"]}
              style={styles.nutritionCard}
            >
              <Image source={tip.image} style={styles.nutritionImage} />
              <Text style={styles.nutritionLabel}>{tip.title}</Text>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: { width, height },
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
  header: {
    marginTop: 60,
    marginLeft: "7%",
  },
  foodText: {
    fontSize: 39,
    fontFamily: "Unbounded",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  foodTextDescription: {
    fontSize: 12,
    fontFamily: "Unbounded",
    color: "#CFED89",
    marginTop: 8,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 16,
    width: "100%",
  },
  scrollContent: {
    paddingBottom: 80,
  },
  carouselContainer: {
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
    height: 270,
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
    fontSize: 15,
    fontFamily: "Lexend",
  },
  metaTextTime: {
    color: "#666",
    fontSize: 15,
    fontFamily: "Lexend",
    marginTop: "3%",
    marginLeft: "5%",
  },
  metaItem: {
    flexDirection: "row",
  },
  categoriesText: {
    fontSize: 20,
    fontFamily: "Unbounded",
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: "7%",
    marginTop: 32,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 16,
  },
  categoryBox: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryIcon: {
    width: 36,
    height: 36,
    marginBottom: 8,
    resizeMode: "contain",
  },
  categoryLabel: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Unbounded",
    textAlign: "center",
  },
  nutritionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "86%",
    alignSelf: "center",
    marginTop: 0,
  },
  nutritionText: {
    fontSize: 20,
    fontFamily: "Unbounded",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  seeMoreText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    fontFamily: "Unbounded",
  },
  nutritionTipsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 10,
  },
  nutritionCard: {
    width: "30%",
    borderRadius: 12,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  nutritionImage: {
    width: 201,
    height: 80,
    marginBottom: 8,
    marginTop: -20,
    resizeMode: "contain",
  },
  nutritionLabel: {
    fontSize: 5.6,
    color: "#fff",
    fontFamily: "Unbounded",
    textAlign: "center",
  },
});
