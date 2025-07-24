import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Homepage() {
  const navigation = useNavigation();

  // ✅ DATA UNTUK POPULAR PLAN
  const popularPlans = [
    {
      title: "30-Day Core Catalyst:\nUnleash Your Six-Pack",
      subtitle: "30 Days | Core strength, definition, fat burn",
      image: require("../assets/my-plan-recommendation-1.png"),
    },
    {
      title: "Spartan Back:\nDominate with Pure\nPosterior Power",
      subtitle: "30 Days | Upper, mid, and lower back",
      image: require("../assets/my-plan-recommendation-2.png"),
    },
  ];

  // ✅ DATA UNTUK FAMOUS TRAINEE
  const famousTrainees = [
    {
      title: "Arnold Ultimate Strength\nTransform",
      subtitle: "45 Days | Full Body Mass Gain",
      image: require("../assets/my-plan-recommendation-2.png"),
    },
    {
      title: "Chris Core Crusher\nExtreme Abs",
      subtitle: "21 Days | Core endurance & stability",
      image: require("../assets/my-plan-recommendation-1.png"),
    },
  ];

  // ✅ FUNGSI UNTUK BIKIN CARD (BIAR DRY)
  const renderCard = (item, index) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("OnProgressPlanDetail", { planData: item })
      }
    >
      <ImageBackground
        source={item.image}
        style={styles.recommendationCard}
        imageStyle={{ borderRadius: 12 }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "#000000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.recommendationContent}
        >
          <Text style={styles.recommendationTitle}>{item.title}</Text>
          <Text style={styles.recommendationSubtitle}>{item.subtitle}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.title}>Homepage</Text>
          <Text style={styles.subtitle}>Welcome, Shanella!</Text>
        </View>
      </View>

      {/* Banner */}
      <Image
        source={require("../assets/BannerHomapage-min.png")}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* POPULAR PLAN SECTION */}
      <Text style={styles.sectionTitle}>Popular Plan</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recommendationWrapper}
      >
        {popularPlans.map((item, index) => renderCard(item, index))}
      </ScrollView>

      {/* FAMOUS TRAINEE SECTION */}
      <Text style={styles.sectionTitle}>Famous Trainee</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recommendationWrapper}
      >
        {famousTrainees.map((item, index) => renderCard(item, index))}
      </ScrollView>

      {/* Spacer biar ga ketutupan tab bar */}
      <View style={{ height: 80 }} />
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
    fontSize: 14,
    color: "#CFED89",
    fontFamily: "LexendRegular",
    marginTop: 4,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: "5%",
  },
  banner: {
    width: "100%",
    height: 170,
    borderRadius: 12,
    marginBottom: 24,
  },
  recommendationWrapper: {
    marginBottom: 25,
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
