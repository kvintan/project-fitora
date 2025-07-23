import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Homepage() {
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

      {/* Popular Plan */}
      <Text style={styles.sectionTitle}>Popular Plan</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recommendationWrapper}
      >
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
              30 Days | Upper, mid, and lower back
            </Text>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>

      {/* Famous Trainee */}
      <Text style={styles.sectionTitle}>Famous Trainee</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recommendationWrapper}
      >
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
              30 Days | Upper, mid, and lower back
            </Text>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
      <ScrollView>
        {/* Konten lainnya */}
        <View style={{ height: 80 }} />
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
