import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function YourPlan({ navigation }) {
  const plans = [
    {
      title: "Shanella's Plan",
      subtitle: "7 Days Estimation",
    },
    {
      title: "Celsi's Plan",
      subtitle: "25 Days Estimation",
    },
    {
      title: "Kiel's Plan",
      subtitle: "10 Days Estimation",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backButton.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Your Plan</Text>
      </View>

      {/* Plan Cards */}
      {plans.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          style={{ marginBottom: 0 }} // kasih jarak antar card
          onPress={() => navigation.navigate("OnProgressPlanDetail", { plan: item })}
        >
          <LinearGradient
            colors={["#2F2F2F", "#393939"]}
            style={styles.planCard}
          >
            {/* Icon Circle */}
            <View style={styles.logoCircle}>
              <Image
                source={require("../assets/my-plan-plan-icon.png")}
                style={styles.planIcon}
              />
            </View>

            {/* Text Wrapper */}
            <View style={styles.planTextWrapper}>
              <Text style={styles.planTitle}>{item.title}</Text>
              <Text style={styles.planSubtitle}>{item.subtitle}</Text>
            </View>

            {/* Arrow */}
            <Image
              source={require("../assets/food-list-arrow.png")}
              style={styles.arrowIcon}
            />
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 24,
    position: "relative",
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontFamily: "Unbounded",
    fontWeight: "bold",
  },
  planCard: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  logoCircle: {
    backgroundColor: "#5A5A5A",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  planIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  planTextWrapper: {
    flex: 1,
  },
  planTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Unbounded",
    fontWeight: "bold",
  },
  planSubtitle: {
    color: "#bbb",
    fontSize: 12,
    fontFamily: "LexendRegular",
    marginTop: 4,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#fff",
  },
});
