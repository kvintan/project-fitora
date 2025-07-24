import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutType() {
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params;

    const workoutContent = {
        Strength: {
            banner: require("../assets/strength-banner.png"),
            title: "Strength",
            description:
                "Build muscle, increase power, and train for long-term strength—using bodyweight or simple equipment.",
            workouts: [
                {
                    name: "Full Body",
                    image: require("../assets/fullbody.png"),
                    banner: require("../assets/banner-fullbody.png"),
                    description: "A balanced strength workout targeting all muscle groups for overall fitness.",
                    duration: "10 min",
                    calories: "65 calories",
                    level: "Beginner",
                    exercises: [
                        { name: "Push Up", duration: "30s", image: "push-up", videoSource: require("../assets/video/push-up-potrait.mp4") },
                        { name: "Mason Twist", duration: "30s", image: "mason-twist", videoSource: require("../assets/video/mason-twist-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Weighted Leg Lifts", duration: "30s", image: "weighted-leg-lifts", videoSource: require("../assets/video/weighted-leg-lifts-potrait.mp4") },
                        { name: "Single Dumbbell Squat", duration: "40s", image: "single-dumbbell-squat", videoSource: require("../assets/video/single-dumbbell-squat-potrait.mp4") },
                        { name: "Deadlift", duration: "30s", image: "deadlift", videoSource: require("../assets/video/deadlift-potrait.mp4")},
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Weighted Crunches", duration: "30s", image: "weighted-crunches", videoSource: require("../assets/video/weighted-crunches-potrait.mp4") },
                        { name: "Side Bends", duration: "30s", image: "side-bends", videoSource: require("../assets/video/side-bends-potrait.mp4") },
                    ],
                },
                {
                    name: "Insane Six Pack",
                    image: require("../assets/insane-sixpack.png"),
                    banner: require("../assets/banner-insane.png"),
                    description: "A high-intensity ab workout to push your core to the limit and get those six-pack lines popping.",
                    duration: "10 min",
                    calories: "62 calories",
                    level: "Beginner",
                    exercises: [
                        { name: "One-Arm Deadlift", duration: "40s", image: "one-arm-deadlift" , videoSource: require("../assets/video/one-arm-deadlift-potrait.mp4")},
                        { name: "Single Dumbbell Squat", duration: "40s", image: "single-dumbbell-squat", videoSource: require("../assets/video/single-dumbbell-squat-potrait.mp4") },
                        { name: "Rest", duration: "30s" , videoSource: require("../assets/video/rest-potrait.mp4")},
                        { name: "Mason Twist", duration: "30s", image: "mason-twist", videoSource: require("../assets/video/mason-twist-potrait.mp4") },
                        { name: "Side Bends", duration: "40s", image: "side-bends", videoSource: require("../assets/video/side-bends-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Weighted Crunches", duration: "30s", image: "weighted-crunches", videoSource: require("../assets/video/weighted-crunches-potrait.mp4") },
                        { name: "Russian Twist", duration: "30s", image: "russian-twist", videoSource: require("../assets/video/russian-twist-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Deadlift", duration: "30s", image: "deadlift", videoSource: require("../assets/video/deadlift-potrait.mp4") },
                        { name: "Weighted Leg Lifts", duration: "30s", image: "weighted-leg-lifts" , videoSource: require("../assets/video/weighted-leg-lifts-potrait.mp4")},
                        { name: "Knee Raises", duration: "30s", image: "knee-raises", videoSource: require("../assets/video/pull-up-potrait.mp4")},
                    ],
                },
                {
                    name: "Complex Upper Body",
                    image: require("../assets/complex-upper.png"),
                    banner: require("../assets/banner-upper.png"),
                    description: "Advanced workout focused on chest, arms, and shoulders with dynamic dumbbell movements.",
                    duration: "10 min",
                    calories: "72 calories",
                    level: "Intermediate",
                    exercises: [
                        { name: "Pull Up", duration: "30s", image: "upper-body", videoSource: require("../assets/video/pull-up-potrait.mp4") },
                        { name: "Push Up", duration: "30s", image: "push-up", videoSource: require("../assets/video/push-up-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Deadlift", duration: "30s", image: "deadlift", videoSource: require("../assets/video/deadlift-potrait.mp4") },
                        { name: "Mason Twist", duration: "30s", image: "mason-twist", videoSource: require("../assets/video/mason-twist-potrait.mp4") }, 
                        { name: "Weighted Crunches", duration: "30s", image: "weighted-crunches", videoSource: require("../assets/video/weighted-crunches-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Russian Twist", duration: "30s", image: "russian-twist", videoSource: require("../assets/video/russian-twist-potrait.mp4") },
                    ],
                },
                {
                    name: "Complex Lower Body",
                    image: require("../assets/complex-lower.png"),
                    banner: require("../assets/banner-lower.png"),
                    description: "Target legs and glutes with this intense lower-body workout using compound exercises.",
                    duration: "10 min",
                    calories: "69 calories",
                    level: "Intermediate",
                    exercises: [
                        { name: "Squat", duration: "40s", image: "lower-body", videoSource: require("../assets/video/squat-potrait.mp4") },
                        { name: "Weighted Leg Lifts", duration: "30s", image: "weighted-leg-lifts", videoSource: require("../assets/video/weighted-leg-lifts-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Side Bends", duration: "30s", image: "side-bends", videoSource: require("../assets/video/side-bends-potrait.mp4") },
                        { name: "Single Dumbbell Squat", duration: "40s", image: "single-dumbbell-squat", videoSource: require("../assets/video/single-dumbbell-squat-potrait.mp4") },
                        { name: "One-Arm Deadlift", duration: "30s", image: "one-arm-deadlift", videoSource: require("../assets/video/one-arm-deadlift-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Deadlift", duration: "30s", image: "deadlift", videoSource: require("../assets/video/deadlift-potrait.mp4") },
                    ],
                },
            ],
        },
        "HIIT, Cardio": {
            banner: require("../assets/hiit-cardio-banner.png"),
            title: "HIIT & Cardio",
            description:
                "Burn calories fast and boost stamina with heart-pumping workouts—perfect for fat loss and energy.",
            workouts: [
                {
                    name: "HIIT",
                    image: require("../assets/hiit.png"),
                    banner: require("../assets/banner-hiit.png"),
                    description: "High-intensity interval training that mixes strength and cardio for maximum fat burn.",
                    duration: "10 min",
                    calories: "81 calories",
                    level: "Advanced",
                    exercises: [
                        { name: "Russian Twist", duration: "25s", image: "russian-twist", videoSource: require("../assets/video/russian-twist-potrait.mp4") },
                        { name: "Deadlift", duration: "25s", image: "deadlift", videoSource: require("../assets/video/deadlift-potrait.mp4") },
                        { name: "Knee Raises", duration: "25s", image: "knee-raises", videoSource: require("../assets/video/pull-up-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Side Bends", duration: "30s", image: "side-bends", videoSource: require("../assets/video/side-bends-potrait.mp4") },
                        { name: "Mason Twist", duration: "30s", image: "mason-twist", videoSource: require("../assets/video/mason-twist-potrait.mp4") }, 
                        { name: "Weighted Crunches", duration: "30s", image: "weighted-crunches", videoSource: require("../assets/video/weighted-crunches-potrait.mp4") },
                        { name: "Rest", duration: "30s", videoSource: require("../assets/video/rest-potrait.mp4") },
                        { name: "Squat", duration: "40s", image: "lower-body", videoSource: require("../assets/video/squat-potrait.mp4") },
                    ],
                },
            ],
        },
        "Warm Up, Recovery": {
            banner: require("../assets/recovery-banner.png"),
            title: "Warm Up & Recovery",
            description:
                "Prepare your body before workouts and recover faster after—with light movements and calming stretches.",
            workouts: [
                {
                    name: "Warm Up",
                    image: require("../assets/warmup.png"),
                    banner: require("../assets/banner-warmup.png"),
                    description: "Gentle dynamic warm-up to get your muscles ready and improve range of motion.",
                    duration: "8 min",
                    calories: "40 calories",
                    level: "Beginner",
                    exercises: [
                        { name: "Rotation Resistance", duration: "30s", image: "rotation-resistance", videoSource: require("../assets/video/rotation-resistance-potrait.mp4") },
                        { name: "Inchworms", duration: "30s", image: "inchworms", videoSource: require("../assets/video/inchworms-potrait.mp4") },
                        { name: "Front Kicks", duration: "30s", image: "front-kicks", videoSource: require("../assets/video/front-kicks-potrait.mp4") },
                        { name: "Running in Place", duration: "30s", image: "running-in-place", videoSource: require("../assets/video/running-in-place-potrait.mp4") },
                        { name: "Ankle Twist", duration: "30s", image: "ankle-twist", videoSource: require("../assets/video/ankle-twist-potrait.mp4") },
                        { name: "Side Bend", duration: "30s", image: "side-bend", videoSource: require("../assets/video/side-bend-potrait.mp4") },
                        { name: "Supine Marching", duration: "30s", image: "supine-marching", videoSource: require("../assets/video/supine-marching-potrait.mp4") },
                        { name: "Side to Side Reach", duration: "30s", image: "side-to-side-reach", videoSource: require("../assets/video/side-to-side-reach-potrait.mp4") },
                        { name: "Triangle Pose", duration: "30s", image: "triangle-pose", videoSource: require("../assets/video/triangle-pose-potrait.mp4") },
                    ],
                },
            ],
        },
    };

    const { banner, title, description, workouts } = workoutContent[category] || {};

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={styles.bannerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image source={require("../assets/backButton.png")} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Image source={banner} style={styles.bannerImage} resizeMode="cover" />
                </View>

                <View style={styles.headerContent}>
                    <MaskedView maskElement={<Text style={styles.gradientText}>{title}</Text>}>
                        <LinearGradient
                            colors={["#F2FF00", "#AFFA01"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={[styles.gradientText, { opacity: 0 }]}>{title}</Text>
                        </LinearGradient>
                    </MaskedView>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Workouts</Text>
                    {workouts.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.item}
                            onPress={() => navigation.navigate("WorkoutTypeDetail", { workout: item })}
                        >
                            <Image source={item.image} style={styles.itemImage} />
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Ionicons name="chevron-forward" size={20} color="#fff" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#1C1C1C" },
    bannerWrapper: { position: "relative" },
    backButton: {
        position: "absolute",
        top: 30,
        left: 15,
        padding: 8,
        zIndex: 10,
    },
    backIcon: { width: 35, height: 35, resizeMode: "contain" },
    bannerImage: {
        width: "100%",
        height: 220,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerContent: { paddingHorizontal: 20, paddingVertical: 15 },
    gradientText: {
        fontSize: 39,
        fontFamily: "Unbounded",
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
    },
    description: {
        fontSize: 13,
        color: "#FFFFFF",
        fontFamily: "LexendRegular",
        lineHeight: 20,
    },
    section: {
        marginBottom: 25,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: "Unbounded",
        fontWeight: "bold",
        color: "#CFED89",
        marginBottom: 10,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#393939",
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    itemText: {
        flex: 1,
        fontSize: 15,
        color: "#FFFFFF",
        fontFamily: "Lexend",
        letterSpacing: 0.5,
    },
});
