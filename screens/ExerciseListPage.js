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
        video: require("../assets/video/pull-up-landscape.mp4"),
        hints:
          "Grab the bar with your hands shoulder-width apart or slightly wider. Hang with arms fully extended. Engage your core and pull your chest toward the bar. Avoid swinging or using momentum. Keep your chin above the bar before lowering down with control.",
        breathing:
          "Exhale as you pull yourself up. Inhale as you lower yourself down.",
        easier:
          "Use resistance bands for assistance or perform negative pull-ups by jumping up and lowering slowly.",
      },
      {
        id: "1-2",
        title: "Push Up",
        image: require("../assets/push-up.png"),
        video: require("../assets/video/push-up-landscape.mp4"),
        hints:
          "Engage your core and glutes. Keep your body in a straight line from head to heels. Do not arch or sag your back. Place your hands slightly wider than shoulder-width apart. Keep your elbows at about a 45-degree angle from your body. Lower your chest until it nearly touches the floor, then push back up.",
        breathing:
          "Inhale as you lower your body. Exhale as you push yourself back up.",
        easier: "Drop your knees to the ground to do knee push-ups.",
      },
    ],
  },
  {
    id: "2",
    title: "Lower Body",
    image: require("../assets/lower-body.png"),
    subExercises: [
      {
        id: "2-1",
        title: "Squat",
        image: require("../assets/lower-body.png"),
        video: require("../assets/video/squat-landscape.mp4"),
        hints:
          "Keep your feet shoulder-width apart. Engage your core and keep your chest up. Push your hips back like sitting in a chair. Keep your knees in line with your toes. Go down until your thighs are at least parallel to the floor.",
        breathing: "Inhale as you lower down. Exhale as you stand back up.",
        easier: "Use a chair for support and reduce the depth of your squat.",
      },
      {
        id: "2-2",
        title: "One-Arm Deadlift",
        image: require("../assets/one-arm-deadlift.png"),
        video: require("../assets/video/one-arm-deadlift-landscape.mp4"),
        hints:
          "Stand with feet hip-width apart. Hold the dumbbell in one hand and keep your back flat. Hinge at the hips while keeping the opposite arm extended for balance. Keep the movement controlled and avoid rounding your back.",
        breathing:
          "Inhale as you lower the weight. Exhale as you return to standing.",
        easier: "Use a lighter weight and reduce the range of motion.",
      },
      {
        id: "2-3",
        title: "Deadlift",
        image: require("../assets/deadlift.png"),
        video: require("../assets/video/deadlift-landscape.mp4"),
        hints:
          "Stand with feet shoulder-width apart, bar/dumbbells close to shins. Keep your back straight, core tight, and shoulders back. Hinge at the hips and bend knees to grab the weight. Lift by pushing through the heels.",
        breathing: "Inhale before you lift. Exhale as you rise to standing.",
        easier: "Use dumbbells or a resistance band instead of a barbell.",
      },
      {
        id: "2-4",
        title: "Single Dumbbell Squat",
        image: require("../assets/single-dumbbell-squat.png"),
        video: require("../assets/video/single-dumbbell-squat-landscape.mp4"),
        hints:
          "Hold the dumbbell close to your chest. Keep feet shoulder-width apart. Maintain a straight back and strong core. Lower down slowly and press through your heels to rise.",
        breathing: "Inhale while lowering. Exhale as you return to standing.",
        easier: "Use a lighter dumbbell or reduce squat depth.",
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
        video: require("../assets/video/pull-up-landscape.mp4"),
        hints:
          "Hang from a pull-up bar or support your body on parallel bars. Keep your core tight. Raise your knees toward your chest in a controlled motion without swinging.",
        breathing: "Exhale as you lift your knees. Inhale as you lower them.",
        easier: "Do lying leg raises or bend your knees more.",
      },
      {
        id: "3-2",
        title: "One-Arm Deadlift",
        image: require("../assets/one-arm-deadlift.png"),
        video: require("../assets/video/one-arm-deadlift-landscape.mp4"),
        hints:
          "Stand with feet hip-width apart. Hold the dumbbell in one hand and keep your back flat. Hinge at the hips while keeping the opposite arm extended for balance. Keep the movement controlled and avoid rounding your back.",
        breathing:
          "Inhale as you lower the weight. Exhale as you return to standing.",
        easier: "Use a lighter weight and reduce the range of motion.",
      },
      {
        id: "3-3",
        title: "Deadlift",
        image: require("../assets/deadlift.png"),
        video: require("../assets/video/deadlift-landscape.mp4"),
        hints:
          "Stand with feet shoulder-width apart, bar/dumbbells close to shins. Keep your back straight, core tight, and shoulders back. Hinge at the hips and bend knees to grab the weight. Lift by pushing through the heels.",
        breathing: "Inhale before you lift. Exhale as you rise to standing.",
        easier: "Use dumbbells or a resistance band instead of a barbell.",
      },
      {
        id: "3-4",
        title: "Side Bends",
        image: require("../assets/side-bends.png"),
        video: require("../assets/video/side-bends-landscape.mp4"),
        hints:
          "Stand upright with a dumbbell in one hand. Keep your other hand behind your head or on your waist. Slowly bend to the side, keeping your torso straight. Don’t twist.",
        breathing:
          "Exhale as you bend to the side. Inhale as you return upright.",
        easier: "Do it without any weight or reduce the bending range.",
      },
      {
        id: "3-5",
        title: "Weighted Crunches",
        image: require("../assets/weighted-crunches.png"),
        video: require("../assets/video/weighted-crunches-landscape.mp4"),
        hints:
          "Lie on your back with knees bent and feet flat. Hold the weight on your chest or behind your head. Crunch upward by lifting your shoulders off the ground.",
        breathing: "Exhale during the crunch. Inhale on the way down.",
        easier: "Do bodyweight crunches or reduce the reps.",
      },
      {
        id: "3-6",
        title: "Russian Twist",
        image: require("../assets/russian-twist.png"),
        video: require("../assets/video/russian-twist-landscape.mp4"),
        hints:
          "Sit on the floor with knees bent. Lean back slightly and lift your feet if possible. Hold a weight with both hands and twist your torso side to side.",
        breathing: "Exhale during each twist. Inhale as you return to center.",
        easier: "Keep your feet on the ground and twist without a weight.",
      },
      {
        id: "3-7",
        title: "Weighted Leg Lifts",
        image: require("../assets/weighted-leg-lifts.png"),
        video: require("../assets/video/weighted-leg-lifts-landscape.mp4"),
        hints:
          "Lie on your back with a weight on your feet or between ankles. Keep legs straight and hands under hips. Slowly raise legs to 90 degrees, then lower without touching the floor.",
        breathing: "Exhale as you lift your legs. Inhale as you lower them.",
        easier: "Remove the weight or keep knees slightly bent.",
      },
      {
        id: "3-8",
        title: "Mason Twist",
        image: require("../assets/mason-twist.png"),
        video: require("../assets/video/mason-twist-landscape.mp4"),
        hints:
          "Sit with knees bent and heels off the floor. Hold a weight and twist your torso, tapping the weight to the floor on each side. Engage your core to maintain balance.",
        breathing: "Exhale with each twist. Inhale between sides.",
        easier: "Keep your feet on the floor or use no weight.",
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
        image: require("../assets/deadlift.png"),
        video: require("../assets/video/deadlift-landscape.mp4"),
        hints:
          "Stand with feet shoulder-width apart, bar/dumbbells close to shins. Keep your back straight, core tight, and shoulders back. Hinge at the hips and bend knees to grab the weight. Lift by pushing through the heels.",
        breathing: "Inhale before you lift. Exhale as you rise to standing.",
        easier: "Use dumbbells or a resistance band instead of a barbell.",
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
        image: require("../assets/side-bends.png"),
        video: require("../assets/video/side-bends-landscape.mp4"),
        hints:
          "Stand upright with a dumbbell in one hand. Keep your other hand behind your head or on your waist. Slowly bend to the side, keeping your torso straight. Don’t twist.",
        breathing:
          "Exhale as you bend to the side. Inhale as you return upright.",
        easier: "Do it without any weight or reduce the bending range.",
      },
    ],
  },
];

const ExerciseListPage = ({ navigation }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const renderItem = ({ item, index }) => {
    const isFirst = index === 0;
    const isLast = index === exercises.length - 1;

    return (
      <View style={styles.groupContainer}>
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
          onPress={() =>
            item.subExercises.length > 0
              ? toggleExpand(item.id)
              : navigation.navigate("ExerciseDetail", {
                  title: item.title,
                  image: item.image,
                  video: item.video,
                  category: item.title,
                  description: {
                    hints: item.hints,
                    breathing: item.breathing,
                    easier: item.easier,
                  },
                })
          }
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

        {expandedId === item.id &&
          item.subExercises.map((sub, subIndex) => {
            const isLastSub = subIndex === item.subExercises.length - 1;
            const isLastOverall = isLast && isLastSub;

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
                onPress={() =>
                  navigation.navigate("ExerciseDetail", {
                    title: sub.title,
                    category: item.title,
                    video: sub.video,
                    hints: sub.hints,
                    breathing: sub.breathing,
                    easier: sub.easier,
                  })
                }

              >
                <Image source={sub.image} style={styles.image} />
                <Text style={styles.subTitle}>{sub.title}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("WorkoutPage")}
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
    marginTop: 5,
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
