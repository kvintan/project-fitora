import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const exercises = [
  {
    id: "1",
    title: "Upper Body",
    image: require("../assets/upper-body.png"),
    subExercises: [
      {
        id: "1-1",
        title: "Pull Up",
        image: require("../assets/upper-body.png"),
      },
      { id: "1-2", title: "Push Up", image: require("../assets/push-up.png") },
    ],
  },
  {
    id: "2",
    title: "Lower Body",
    image: require("../assets/lower-body.png"),
    subExercises: [
      { id: "2-1", title: "Squat", image: require("../assets/lower-body.png") },
      {
        id: "2-2",
        title: "One-Arm Deadlift",
        image: require("../assets/one-arm-deadlift.png"),
      },
    ],
  },
  {
    id: "3",
    title: "Abs & Core",
    image: require("../assets/abs-core.png"),
    subExercises: [
      {
        id: "3-1",
        title: "Knee Raises",
        image: require("../assets/knee-raises.png"),
      },
      {
        id: "3-2",
        title: "Side Bends",
        image: require("../assets/side-bends.png"),
      },
    ],
  },
  {
    id: "4",
    title: "Cardio",
    image: require("../assets/cardio.png"),
    subExercises: [
      {
        id: "4-1",
        title: "One-Arm Deadlift",
        itemTitle: "Lower Body, Abs & Core, Cardio",
        image: require("../assets/one-arm-deadlift.png"),
        video: require("../assets/video/one-arm-deadlift-landscape.mp4"),
        hints:
          "Stand with feet hip-width apart. Hold the dumbbell in one hand and keep your back flat. Hinge at the hips while keeping the opposite arm extended for balance. Keep the movement controlled and avoid rounding your back.",
        breathing:
          "Inhale as you lower the weight. Exhale as you return to standing.",
        easier: "Use a lighter weight and reduce the range of motion.",
      },
      {
        id: "4-2",
        title: "Knee Raises",
        itemTitle: "Abs & Core, Cardio",
        image: require("../assets/knee-raises.png"),
        video: require("../assets/video/pull-up-landscape.mp4"),
        hints:
          "Hang from a pull-up bar or support your body on parallel bars. Keep your core tight. Raise your knees toward your chest in a controlled motion without swinging.",
        breathing: "Exhale as you lift your knees. Inhale as you lower them.",
        easier: "Do lying leg raises or bend your knees more.",
      },
      {
        id: "4-3",
        title: "Deadlift",
        itemTitle: "Lower Body, Abs & Core, Cardio",
        image: require("../assets/deadlift.png"),
        video: require("../assets/video/deadlift-landscape.mp4"),
        hints:
          "Stand with feet shoulder-width apart, bar/dumbbells close to shins. Keep your back straight, core tight, and shoulders back. Hinge at the hips and bend knees to grab the weight. Lift by pushing through the heels.",
        breathing: "Inhale before you lift. Exhale as you rise to standing.",
        easier: "Use dumbbells or a resistance band instead of a barbell.",
      },
      {
        id: "4-4",
        title: "Squat",
        itemTitle: "Lower Body, Cardio",
        image: require("../assets/lower-body.png"),
        video: require("../assets/video/squat-landscape.mp4"),
        hints:
          "Keep your feet shoulder-width apart. Engage your core and keep your chest up. Push your hips back like sitting in a chair. Keep your knees in line with your toes. Go down until your thighs are at least parallel to the floor.",
        breathing: "Inhale as you lower down. Exhale as you stand back up.",
        easier: "Use a chair for support and reduce the depth of your squat.",
      },
    ],
  },
  {
    id: "5",
    title: "Stretching",
    image: require("../assets/stretching.png"),
    subExercises: [
        {
        id: "5-1",
        title: "Side Bends",
        itemTitle: "Abs & Core, Cardio",
        image: require("../assets/side-bends.png"),
        video: require("../assets/video/side-bends-landscape.mp4"),
        hints:
          "Stand upright with a dumbbell in one hand. Keep your other hand behind your head or on your waist. Slowly bend to the side, keeping your torso straight. Don’t twist.",
        breathing:
          "Exhale as you bend to the side. Inhale as you return upright.",
        easier: "Do it without any weight or reduce the bending range.",
      },],
  },
];

const ExerciseListPage = ({ navigation }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [checkedIds, setCheckedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const toggleCheck = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item, index }) => {
    const isFirst = index === 0;
    const isLast = index === exercises.length - 1;

    return (
      <View style={styles.groupContainer}>
        {/* Parent item */}
        <TouchableOpacity
          style={[
            styles.cardBase,
            isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
            isLast &&
              expandedId !== item.id && {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            styles.card,
          ]}
          onPress={() => toggleExpand(item.id)}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <View
            style={[
              styles.arrowContainer,
              expandedId === item.id && { transform: [{ rotate: "90deg" }] },
            ]}
          >
            <Text style={styles.arrow}>{">"}</Text>
          </View>
        </TouchableOpacity>

        {/* Sub-exercises */}
        {expandedId === item.id &&
          (item.subExercises.length > 0 ? (
            item.subExercises.map((sub, subIndex) => {
              const isLastSub = subIndex === item.subExercises.length - 1;
              const isLastOverall = isLast && isLastSub;
              const isChecked = checkedIds.includes(sub.id);

              return (
                <TouchableOpacity
                  key={sub.id}
                  style={[
                    styles.cardBase,
                    styles.subCard,
                    { marginTop: 1 },
                    isLastOverall && {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    },
                  ]}
                  onPress={() => toggleCheck(sub.id)}
                >
                  <Image source={sub.image} style={styles.image} />
                  <Text style={styles.subTitle}>{sub.title}</Text>

                  <Ionicons
                    name={
                      isChecked
                        ? "checkmark-circle"
                        : "checkmark-circle-outline"
                    }
                    size={24}
                    color={isChecked ? "#AFFA01" : "#ffffff"}
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>
              );
            })
          ) : (
            <View style={[styles.cardBase, styles.subCard, { marginTop: 1 }]}>
              <Text style={styles.emptyText}>No exercises yet</Text>
            </View>
          ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.header}>Exercise List</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default ExerciseListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    paddingTop: 40,
  },
  header: {
    fontSize: 23,
    fontFamily: "UnboundedSemiBold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  groupContainer: {
    marginBottom: 1,
  },
  cardBase: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    minHeight: 70,
  },
  card: {
    backgroundColor: "#373737",
  },
  subCard: {
    backgroundColor: "#5B5B5B",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: "contain",
  },
  title: {
    flex: 1,
    color: "white",
    fontSize: 18,
    fontFamily: "LexendBold",
  },
  subTitle: {
    flex: 1,
    color: "white",
    fontSize: 17,
    fontFamily: "LexendBold",
  },
  emptyText: {
    color: "#ccc",
    fontSize: 15,
    fontFamily: "LexendRegular",
  },
  arrowContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    color: "white",
    fontSize: 20,
    fontFamily: "LexendBold",
    lineHeight: 20,
  },
  backButton: {
    position: "absolute",
    top: 55,
    left: 15,
    padding: 8,
    zIndex: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});
