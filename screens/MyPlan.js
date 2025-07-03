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
import { ImageBackground } from "react-native";

export default function MyPlan() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.title}>My Plan</Text>
          <Text style={styles.subtitle}>
            Your Path, Your Routine, Your Results
          </Text>
        </View>
        <TouchableOpacity style={styles.statsIconButton}>
          <Image
            source={require("../assets/my-plan-statistics.png")}
            style={styles.statsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Custom Cards */}
      <View style={styles.customCardsWrapper}>
        <LinearGradient
          colors={["#2F2F2F", "#393939"]}
          style={styles.customCard}
        >
          <Text style={styles.cardTitle}>Custom Workout</Text>
          <Text style={styles.cardSubtitle}>Train Your Style</Text>
          <Image
            source={require("../assets/my-plan-workout-logo.png")}
            style={styles.cardIconBottomRight}
          />
        </LinearGradient>

        <LinearGradient
          colors={["#2F2F2F", "#393939"]}
          style={styles.customCard}
        >
          <Text style={styles.cardTitle}>Custom Plan</Text>
          <Text style={styles.cardSubtitle}>Train Your Style</Text>
          <Image
            source={require("../assets/my-plan-plan-icon.png")}
            style={styles.cardIconBottomRight}
          />
        </LinearGradient>
      </View>

      {/* On Progress Plan */}
      <Text style={styles.sectionTitle}>On Progress Plan</Text>
      <ImageBackground
        source={require("../assets/my-plan-progress-plan.png")}
        style={styles.progressImage}
        imageStyle={{ borderRadius: 12 }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.progressContent}
        >
          <Text style={styles.progressLabelTop}>7 DAY PLAN</Text>
          <Text style={styles.progressTitle}>Shanella's Plan</Text>
          <Text style={styles.progressSubtitle}>Progress</Text>
          <Image
            source={require("../assets/my-plan-progress-bar.png")}
            style={styles.progressBar}
          />
          <Text style={styles.progressDay}>3/7 Day</Text>
        </LinearGradient>
      </ImageBackground>

      {/* On Progress Workout */}
      <Text style={styles.sectionTitle}>On Progress Workout</Text>
      <LinearGradient
        colors={["#2F2F2F", "#393939"]}
        style={styles.workoutCard}
      >
        <View style={styles.logoCircle}>
          <Image
            source={require("../assets/my-plan-workout-logo.png")}
            style={styles.workoutLogo}
          />
        </View>
        <View style={styles.workoutTextWrapper}>
          <Text style={styles.workoutTitle}>Shanella's Workout</Text>
          <Text style={styles.workoutSubtitle}>45 Minute Estimation</Text>
        </View>
        <Image
          source={require("../assets/food-list-arrow.png")}
          style={styles.arrowIcon}
        />
      </LinearGradient>

      {/* Recommendation Plan */}
      <Text style={styles.sectionTitle}>Recommendation Plan</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recommendationWrapper}
      >
        {/* Recommendation Card 1 */}
        <ImageBackground
          source={require("../assets/my-plan-recommendation-1.png")}
          style={styles.recommendationCard}
          imageStyle={{ borderRadius: 12 }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0)", "#000000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.recommendationContent}
          >
            <Text style={styles.recommendationTitle}>
              30-Day Core Catalyst:{"\n"}Unleash Your Six-Pack
            </Text>
            <Text style={styles.recommendationSubtitle}>
              30 Days | Core strength, definition, fat burn
            </Text>
          </LinearGradient>
        </ImageBackground>

        {/* Recommendation Card 2 (overflow) */}
        <ImageBackground
          source={require("../assets/my-plan-recommendation-2.png")}
          style={styles.recommendationCard}
          imageStyle={{ borderRadius: 12 }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0)", "#000000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.recommendationContent}
          >
            <Text style={styles.recommendationTitle}>
              Spartan Back:{"\n"}Dominate with Pure{"\n"}Posterior Power
            </Text>
            <Text style={styles.recommendationSubtitle}>
              30 Days | Upper, mid, and lower back{" "}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
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
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: "Unbounded",
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    color: "#CFED89",
    fontFamily: "LexendRegular",
    marginTop: 4,
  },
  statsIconButton: {
    padding: 6,
  },
  statsIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  customCardsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  customCard: {
    width: "48%",
    borderRadius: 12,
    padding: 16,
    justifyContent: "flex-start",
    height: 100,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardSubtitle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "LexendRegular",
  },
  cardIconBottomRight: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 12,
    bottom: 12,
    resizeMode: "contain",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: "5%",
  },
  progressImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 24,
  },
  progressContent: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    marginTop: "50%",
  },
  progressLabelTop: {
    color: "#CFED89",
    fontSize: 12,
    fontFamily: "LexendRegular",
    marginBottom: 4,
  },
  progressTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 6,
  },
  progressSubtitle: {
    color: "#bbb",
    fontSize: 13,
    fontFamily: "LexendRegular",
    marginBottom: 8,
  },
  progressBar: {
    width: "100%",
    height: 10,
    resizeMode: "contain",
    marginBottom: 8,
  },
  progressDay: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "LexendRegular",
    position: "absolute",
    right: 16,
    bottom: 16,
    marginBottom: "30%",
    marginRight: "5%",
  },
  workoutCard: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  logoCircle: {
    backgroundColor: "#3F3F3F",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  workoutLogo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  workoutTextWrapper: {
    flex: 1,
  },
  workoutTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Unbounded",
    fontWeight: "bold",
  },
  workoutSubtitle: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "LexendRegular",
    marginTop: 4,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#fff",
  },

  recommendationWrapper: {
    marginBottom: 40,
  },
  recommendationCard: {
    width: 250,
    height: 350,
    marginRight: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  recommendationContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  recommendationTitle: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 4,
  },
  recommendationSubtitle: {
    color: "#bbb",
    fontSize: 11,
    fontFamily: "LexendRegular",
  },
});
