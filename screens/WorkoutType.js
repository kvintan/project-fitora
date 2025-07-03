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
import { useNavigation } from "@react-navigation/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutType() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                {/* BACK BUTTON + BANNER */}
                <View style={styles.bannerWrapper}>
                    {/* <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Ionicons name="chevron-back" size={28} color="#fff" />
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}>

                        <Image
                            source={require("../assets/backButton.png")}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>

                    <Image
                        source={require("../assets/strength-banner.png")}
                        style={styles.bannerImage}
                        resizeMode="cover"
                    />
                </View>

                {/* TITLE & DESC */}
                <View style={styles.headerContent}>
                    {/* Gradient Text */}
                    <MaskedView
                        maskElement={<Text style={styles.gradientText}>Strength</Text>}
                    >
                        <LinearGradient
                            colors={["#F2FF00", "#AFFA01"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={[styles.gradientText, { opacity: 0 }]}>Strength</Text>
                        </LinearGradient>
                    </MaskedView>

                    <Text style={styles.description}>
                        Build muscle, increase power, and train for long-term strength—using
                        bodyweight or simple equipment.
                    </Text>
                </View>

                {/* SECTION: Full Body */}
                <WorkoutSection
                    title="Full Body"
                    items={[{ name: "Full Body", image: require("../assets/fullbody.png") }]}
                    onPress={() => navigation.navigate("WorkoutTypeDetail")}
                />

                {/* SECTION: Abs & Core */}
                <WorkoutSection
                    title="Abs & Core"
                    items={[
                        { name: "Insane Six Pack", image: require("../assets/insane-sixpack.png") },
                        { name: "Complex Core", image: require("../assets/complex-core.png") },
                        { name: "Strong Back", image: require("../assets/strong-back.png") },
                    ]}
                    onPress={() => navigation.navigate("WorkoutTypeDetail")}
                />

                {/* SECTION: Upper Body */}
                <WorkoutSection
                    title="Upper Body"
                    items={[
                        { name: "Complex Upper Body", image: require("../assets/complex-upper.png") },
                        { name: "Chest & Arms", image: require("../assets/chest-arms.png") },
                        { name: "Shoulders & Upper Back", image: require("../assets/shoulders.png") },
                    ]}
                    onPress={() => navigation.navigate("WorkoutTypeDetail")}
                />

                {/* SECTION: Lower Body */}
                <WorkoutSection
                    title="Lower Body"
                    items={[
                        { name: "Complex Lower Body", image: require("../assets/complex-lower.png") },
                        { name: "Power Jumps", image: require("../assets/power-jumps.png") },
                        { name: "Amazing Butts", image: require("../assets/amazing-butts.png") },
                    ]}
                    onPress={() => navigation.navigate("WorkoutTypeDetail")}
                />
            </ScrollView>
        </View>
    );
}

// Komponen Bagian Workout
function WorkoutSection({ title, items, onPress }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {items.map((item, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={onPress}>
                    <Image source={item.image} style={styles.itemImage} />
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Ionicons name="chevron-forward" size={20} color="#fff" />
                </TouchableOpacity>
            ))}
        </View>
    );
}

// STYLE
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C1C1C",
    },
    bannerWrapper: {
        position: "relative",
    },
    // backButton: {
    //     position: "absolute",
    //     top: 20,
    //     left: 20,
    //     zIndex: 10,
    //     backgroundColor: "#00000080",
    //     borderRadius: 20,
    //     padding: 5,
    // },
    backButton: {
        position: "absolute",
        top: 30,
        left: 15,
        padding: 8,
        zIndex: 10,
    },
    backIcon: {
        width: 35,
        height: 35,
        resizeMode: "contain",
    },
    bannerImage: {
        width: "100%",
        height: 220,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerContent: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    gradientText: {
        fontSize: 39,
        fontFamily: "Unbounded",
        color: "black", // akan di-mask
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
