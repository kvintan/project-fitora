import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FoodDetail() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Scrollable Content (including image) */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* Food Image */}
        <Image
          source={require("../assets/food-detail-avocado.png")}
          style={styles.foodImage}
        />

        {/* Content Box */}
        <View style={styles.contentBox}>
          <Text style={styles.foodTitle}>
            Avocado Toast with Sunny-Side-Up Eggs
          </Text>

          {/* Info Row */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Image
                source={require("../assets/food-detail-time.png")}
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>15 min</Text>
            </View>
            <View style={styles.infoItem}>
              <Image
                source={require("../assets/food-detail-kcal.png")}
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>580 kcal</Text>
            </View>
            <View style={styles.infoItem}>
              <Image
                source={require("../assets/food-detail-cook.png")}
                style={styles.infoIcon}
              />
              <Text style={styles.infoText}>Easy</Text>
            </View>
          </View>

          {/* Category Tags */}
          <View style={styles.categoryGrid}>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>Breakfast</Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>Vegetarian</Text>
            </View>
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>Quick</Text>
            </View>
            <View style={[styles.categoryBox, styles.rightAlignBox]}>
              <Text style={styles.categoryText}>Brunch</Text>
            </View>
            <View style={[styles.categoryBox, styles.leftAlignBox]}>
              <Text style={styles.categoryText}>High-Protein</Text>
            </View>
          </View>

          {/* Ingredients */}
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientGrid}>
            <View style={styles.ingredientColumn}>
              <Text style={styles.ingredientItem}>
                {"\u2022"} Avocado (1 pc)
              </Text>
              <Text style={styles.ingredientItem}>
                {"\u2022"} Bread (2 slices)
              </Text>
              <Text style={styles.ingredientItem}>{"\u2022"} Eggs (2 pcs)</Text>
            </View>
            <View style={styles.ingredientColumn}>
              <Text style={styles.ingredientItem}>
                {"\u2022"} Salt (to taste)
              </Text>
              <Text style={styles.ingredientItem}>
                {"\u2022"} Pepper (to taste)
              </Text>
              <Text style={styles.ingredientItem}>{"\u2022"} Olive oil</Text>
            </View>
          </View>

          {/* Steps */}
          <Text style={styles.sectionTitle}>Steps</Text>
          <View style={styles.stepsList}>
            <Text style={styles.stepItem}>
              {"\u2022"} Toast 2 slices of bread.
            </Text>
            <Text style={styles.stepItem}>
              {"\u2022"} Mash 1 avocado with salt and pepper.
            </Text>
            <Text style={styles.stepItem}>
              {"\u2022"} Fry 2 eggs sunny-side-up.
            </Text>
            <Text style={styles.stepItem}>
              {"\u2022"} Spread the mashed avocado on the toasted bread.
            </Text>
            <Text style={styles.stepItem}>
              {"\u2022"} Place 1 egg on each slice of toast.
            </Text>
            <Text style={styles.stepItem}>
              {"\u2022"} Season with extra salt and pepper
            </Text>
            <Text style={styles.stepItem}>{"\u2022"} Ready to serve!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 2,
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  foodImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  foodTitle: {
    fontSize: 24,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  foodSubtitle: {
    fontSize: 16,
    fontFamily: "LexendRegular",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  infoItem: {
    alignItems: "center",
  },
  infoIcon: {
    width: 40,
    height: 40,
    marginBottom: 6,
    resizeMode: "contain",
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "LexendRegular",
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryBox: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    minWidth: "30%",
    alignItems: "center",
    backgroundColor: "transparent", // no fill color
  },

  categoryText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "LexendRegular",
  },
  description: {
    fontSize: 14,
    fontFamily: "LexendRegular",
    color: "#fff",
    lineHeight: 22,
  },
  rightAlignBox: {
    alignSelf: "flex-end",
    marginLeft: "18%",
  },

  leftAlignBox: {
    alignSelf: "flex-start",
    marginRight: "18%",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
  },

  ingredientGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  ingredientColumn: {
    flex: 1,
    gap: 8,
  },

  ingredientItem: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "LexendRegular",
    marginBottom: 4,
  },

  stepsList: {
    gap: 12,
    paddingBottom: 20,
  },

  stepItem: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "LexendRegular",
    lineHeight: 22,
  },
});
