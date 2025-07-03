import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";


const { width } = Dimensions.get("window");

const articles = [
  {
    id: 1,
    title: "Hydration Matters: Why Water Is Your Secret Weapon",
    image: require("../assets/thumbnail_article_1.png"),
    screen: "ArticleDetail",
  },
];

export default function NutritionTips({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg_nutrition.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.darkOverlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Nutrition Tips</Text>
          <Text style={styles.subtitle}>
            Your Choices, Your Awareness, Your Impact
          </Text>

          <View style={styles.cardContainer}>
            {articles.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => navigation.navigate(item.screen)}
              >
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semakin tinggi nilai alpha (0.0 - 1.0), semakin gelap
    zIndex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: "Unbounded",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "UnboundedLight", //ganti reguler
    color: "#CFED89",
    textAlign: "center",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: width * 0.44,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardText: {
    fontSize: 10,
    fontFamily: "UnboundedSemiBold",
    color: "#121A00",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
});
