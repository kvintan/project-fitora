import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // untuk ikon kanan atas
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function WorkoutPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.title}>Workout</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ExerciseList")}>
                    <Ionicons name="list-outline" size={26} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            {/* SUBTITLE */}
            <Text style={styles.subtitle}>Your Body, Your Pace, Your Power</Text>

            {/* BANNER */}
            <Image
                source={require("../assets/workout-banner.png")} // ganti sesuai nama file kamu
                style={styles.banner}
                resizeMode="cover"
            />

            {/* WORKOUT CATEGORIES */}
            <ScrollView contentContainerStyle={styles.cardContainer}>
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

// Komponen kartu workout
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

// StyleSheet untuk semua elemen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C1C1C",
        paddingHorizontal: 20,
        paddingTop: 50,
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
    banner: {
        width: "100%",
        height: 140,
        marginVertical: 20,
        borderRadius: 20,
    },
    cardContainer: {
        paddingBottom: 100,
    },
    card: {
        backgroundColor: "#3E3E3E",
        borderRadius: 10,
        marginBottom: 20,
        overflow: "hidden",
    },
    cardImage: {
        width: "100%",
        height: 160,
    },
    cardText: {
        padding: 15,
    },
    cardTitle: {
        color: "#FFFFFF",
        fontSize: 25,
        fontFamily: "Unbounded",
        marginBottom: 5,
    },
    cardDescription: {
        color: "#FFFFFF",
        fontSize: 14,
        fontFamily: "LexendRegular",
    },
    navbar: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60,
        backgroundColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center",
    },
});
