import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";


const { width } = Dimensions.get("window");

const articles = [
  {
    id: 1,
    title: "Hydration Matters: Why Water Is Your Secret Weapon",
    image: require("../assets/thumbnail_article_1.png"),
    screen: "ArticleDetail",
    content:
      "Eating a balanced diet doesn't have to be complicated—sometimes, simplicity is the key! One of the best and easiest ways to structure your meals is by using the \"Balanced Plate\" method. This method helps you divide your plate into three sections, ensuring that you're getting the right nutrients in the right proportions.\n\n" +
      "👉 Half of your plate: Vegetables and fruits 🍎🥦\n\n" +
      "👉 A quarter of your plate: Protein 🍗🍳\n\n" +
      "👉 A quarter of your plate: Carbohydrates 🍠🍚\n\n" +
      "The goal is to fill up your plate with healthy, colorful foods that fuel your body in the right way. Vegetables and fruits provide essential vitamins, minerals, and fiber that help with digestion and keep your body running smoothly. Protein is crucial for muscle repair and growth, while carbohydrates provide the energy needed to power through your day.\n\n" +
      "------------------------------\n\n" +
      "How to Build Your Plate\n\n" +
      "Now, let’s make it practical! When planning your meals, try to think of your plate like a canvas. You want a mix of colors and textures to make it both delicious and nutritious. Here are some tips for each section:\n\n" +
      "🍓 Fruits & Vegetables:\nGo for a rainbow on your plate. Dark leafy greens (like spinach, kale, and broccoli) are packed with vitamins and minerals. Add some bright fruits, like berries, oranges, or apples, for that sweet punch of antioxidants.\n\n" +
      "🍗 Protein:\nChoose lean options like chicken, turkey, or fish. If you're plant-based, beans, lentils, tofu, and tempeh are great alternatives that are rich in protein and fiber.\n\n" +
      "🍞 Carbohydrates:\nOpt for whole grains like quinoa, brown rice, or sweet potatoes. These provide fiber, help keep your blood sugar levels stable, and give you sustained energy.\n\n" +
      "------------------------------\n\n" +
      "Why Portioning Matters\n\n" +
      "When you follow the \"Balanced Plate\" method, you're not just making your meals look pretty—you're ensuring your body gets the nutrients it needs to thrive. Proper portioning has several benefits:\n\n" +
      "- Sustained energy: No more sugar crashes or feeling sluggish. With balanced meals, you keep your energy levels steady all day.\n\n" +
      "- Better digestion: The fiber from fruits, veggies, and whole grains helps keep things moving smoothly.\n\n" +
      "- Improved performance: Whether you're working, exercising, or just going through your daily tasks, eating the right proportions will help you perform better, both physically and mentally.\n\n" +
      "------------------------------\n\n" +
      "Conclusion\n\n" +
      "Balancing your plate is a simple but effective way to improve your overall health. By following the \"Balanced Plate\" method—half veggies and fruit, a quarter protein, and a quarter carbs—you're giving your body what it needs to function optimally. It's easy to follow, customizable to your tastes, and helps you feel energized and satisfied. So, next time you sit down for a meal, use this method to make your plate a powerhouse of nutrition! 🌟\n\n\n\n\n\n"
  },
  {
    id: 2,
    title: "Pre And Post Workout Nutrition: What To Eat And Why",
    image: require("../assets/thumbnail_article_2.png"),
    screen: "ArticleDetail",
    content:
      "Fueling your body before and after a workout ensures you get the most out of your exercise. Carbs provide energy while protein supports recovery.\n\nPre-Workout:\n- Bananas\n- Oatmeal\n\nPost-Workout:\n- Grilled chicken\n- Quinoa and veggies",
  },
  {
    id: 3,
    title: "Post-Workout: Rebuild And Recover",
    image: require("../assets/thumbnail_article_3.png"),
    screen: "ArticleDetail",
    content:
      "Post-workout meals help your muscles rebuild and replenish energy stores. Aim to eat within 30–60 minutes.\n\nBest options:\n- Protein shake\n- Salmon and sweet potatoes\n- Greek yogurt with fruit",
  },
  {
    id: 4,
    title: "Sugar Smart: How To Cut Added Sugar Without Going Crazy",
    image: require("../assets/thumbnail_article_4.png"),
    screen: "ArticleDetail",
    content:
      "Excess sugar can lead to weight gain and chronic disease. Start by reading labels, choosing natural sugars, and avoiding sugary drinks.\n\nTips:\n- Swap soda with infused water\n- Choose unsweetened products",
  },
  {
    id: 5,
    title: "Meal Prep 101: Save Time, Eat Better",
    image: require("../assets/thumbnail_article_5.png"),
    screen: "ArticleDetail",
    content:
      "Meal prepping helps you save time, eat healthier, and reduce stress. Plan your meals weekly and use containers to portion everything.\n\nTips:\n- Cook in batches\n- Freeze for convenience",
  },
  {
    id: 6,
    title: "Build Your Plate Right: The Basics Of Balanced Eating",
    image: require("../assets/thumbnail_article_6.png"),
    screen: "ArticleDetail",
    content:
      "A balanced plate includes half vegetables/fruits, one quarter protein, and one quarter grains. Add healthy fats and drink water.\n\nExample:\n- Chicken, brown rice, broccoli, olive oil",
  },
  {
    id: 7,
    title: "Smart Snacking: Healthy Between-Meal Options That Worked",
    image: require("../assets/thumbnail_article_7.png"),
    screen: "ArticleDetail",
    content:
      "Snacking can be healthy if done right. Avoid processed snacks and go for real food options.\n\nIdeas:\n- Nuts and seeds\n- Yogurt and berries\n- Hummus and veggies",
  },
  {
    id: 8,
    title: "The Power Of Sleep: Unlocking The Secret To A Healthier You",
    image: require("../assets/thumbnail_article_8.png"),
    screen: "ArticleDetail",
    content:
      "Sleep is crucial for recovery, mood, and overall health. Lack of sleep increases risk of illness and weight gain.\n\nTips:\n- Stick to a sleep schedule\n- Avoid screens before bed",
  },
];


export default function NutritionTips({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg_nutrition.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.darkOverlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Nutrition Tips</Text>
          <Text style={styles.subtitle}>
            Your Choices, Your Awareness, Your Impact
          </Text>

          <View style={styles.cardContainer}>
            {articles.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() =>
                  navigation.navigate(item.screen, {
                    title: item.title,
                    image: item.image,
                    content: item.content,
                  })
                }
              >
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: "Unbounded",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "UnboundedRegular",
    color: "#CFED89",
    textAlign: "center",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 2,
  },
  card: {
    width: (width - 60) / 2,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardText: {
    fontSize: 9,
    fontFamily: "UnboundedSemiBold",
    color: "#121A00",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    marginStart: 2,
    marginEnd: 2,
    // paddingHorizontal: 0,
  },
});
