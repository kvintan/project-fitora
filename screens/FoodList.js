import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const foodItems = [
  {
    id: "1",
    name: "Quinoa & Grilled Shrimp Salad",
    image: require("../assets/food-list-menu-1.png"),
  },
  {
    id: "2",
    name: "Grilled Salmon with Roasted Vegetables",
    image: require("../assets/food-list-menu-2.png"),
  },
  {
    id: "3",
    name: "Vegetable & Tofu Stir-Fry with Rice Noodles",
    image: require("../assets/food-list-menu-3.png"),
  },
  {
    id: "4",
    name: "Eggplant & Chickpea Curry with Rice",
    image: require("../assets/food-list-menu-4.png"),
  },
  {
    id: "5",
    name: "Spicy Beef Stir-Fry with Noodles",
    image: require("../assets/food-list-menu-5.png"),
  },
  {
    id: "6",
    name: "Lemon Garlic Shrimp with Whole Wheat Pasta",
    image: require("../assets/food-list-menu-6.png"),
  },
  {
    id: "7",
    name: "Seared Tuna with Avocado & Brown Rice",
    image: require("../assets/food-list-menu-7.png"),
  },
  {
    id: "8",
    name: "Pecel (Vegetable Salad with Peanut Sauce)",
    image: require("../assets/food-list-menu-8.png"),
  },
];

export default function FoodList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("FoodPage")}>
          <Image
            source={require("../assets/backButton.png")}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Lunch List</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Gradient Box */}
      <LinearGradient
        colors={["#2F2F2F", "#393939"]}
        style={styles.listContainer}
      >
        <FlatList
          data={foodItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.textWrapper}>
                <Text style={styles.itemText} numberOfLines={2}>
                  {item.name}
                </Text>
              </View>
              <Image
                source={require("../assets/food-list-arrow.png")}
                style={styles.arrowIcon}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  backButtonImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "Unbounded",
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  itemImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: "cover",
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
    marginRight: 10,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "LexendRegular",
    fontWeight: "bold",
    flexWrap: "wrap",
    flexShrink: 1,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  separator: {
    height: 12,
  },
});
