import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function WorkoutPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER: judul page, icon buat ke page exercise list */}
        <View style={styles.header}>
          <Text style={styles.title}>Workout</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ExerciseListPage")}>
            {/* <Ionicons name="list-outline" size={26} color="#FFFFFF" /> */}
            <Image
                source={require("../assets/list-icon.png")}
                style={styles.listIcon}
            />
          </TouchableOpacity>
        </View>

        {/* SUBTITLE: ini tagline buat page */}
        <Text style={styles.subtitle}>Your Body, Your Pace, Your Power</Text>

        {/* BANNER */}
        <Image
          source={require("../assets/workout-banner.png")}
          style={styles.banner}
          resizeMode="cover"
        />

        {/* WORKOUT CARDS */}
        <WorkoutCard
          title="Strength"
          description="Build muscle, increase power, and train for long-term strength—using bodyweight or simple equipment."
          image={require("../assets/strength.png")}
          navigation={navigation}
        />
        <WorkoutCard
          title="HIIT, Cardio"
          description="Burn calories fast and boost stamina with heart-pumping workouts—perfect for fat loss and energy."
          image={require("../assets/cardio.png")}
          navigation={navigation}
        />
        <WorkoutCard
          title="Warm Up, Recovery"
          description="Prepare your body before workouts and recover faster after—with light movements and calming stretches."
          image={require("../assets/recovery.png")}
          navigation={navigation}
        />
      </ScrollView>

      {/* NAVBAR Placeholder */}
      <View style={styles.navbar}>
        <Text style={{ color: "#000", fontWeight: "bold" }}>NAVBAR</Text>
      </View>
    </View>
  );
}

// Komponen kartu workout (horizontal layout)
function WorkoutCard({ title, description, image, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("WorkoutType")}>
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 80, // ruang biar gak ketutup navbar
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 39,
    fontFamily: "Unbounded",
    color: "#FFFFFF",
  },
  subtitle: {
    fontFamily: "UnboundedRegular",
    color: "#CFED89",
    marginTop: 5,
    fontSize: 14,
  },
  listIcon: {
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: 140,
    marginVertical: 20,
    borderRadius: 20,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "#3E3E3E",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingBottom: 0,
    overflow: "hidden",
  },
  cardImage: {
    resizeMode: "cover",
    width: "40%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardText: {
    flex: 1,
    paddingHorizontal: 15,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Unbounded",
    marginVertical: 15,
    marginHorizontal: 5,
  },
  cardDescription: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "LexendRegular",
    marginHorizontal: 5,
    marginBottom: 20,
    textAlign: "justify",
  },
  navbar: {
    position: "absolute",
    // bottom: Platform.OS === "android" ? 10 : 0,
    bottom: 0,
    width: "100%",
    height: "60",
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 10,
  },
});
