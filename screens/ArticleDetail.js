import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function ArticleDetail({ navigation }) {
  const title = "Hydration Matters: Why Water Is Your Secret Weapon";
  const image = require("../assets/thumbnail_article_1.png");

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.articleImage} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require("../assets/backButtonBlack.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.paragraph}>
            Water is often overlooked, but it’s the unsung hero of our daily
            health. Everything from digestion and metabolism to focus and skin
            health is influenced by how much water we drink. Staying hydrated is
            essential, yet many of us go through our day without giving it much
            thought. If you're someone who struggles to drink enough water,
            don't worry this article breaks down the importance of hydration,
            the signs of dehydration, and easy ways to make drinking water a
            part of your daily routine.
          </Text>
          <Text style={styles.sectionTitle}>Let’s dive in!</Text>

          {/* Section: How Much Water Do You Need? */}
          <Text style={styles.sectionTitle}>How Much Water Do You Need?</Text>
          <Text style={styles.paragraph}>
            A common rule of thumb is to drink eight 8-ounce glasses of water
            per day (the “8×8” rule). However, the amount of water you need can
            vary depending on factors like activity level, climate, and overall
            health.
          </Text>
          <Text style={styles.paragraph}>General guidelines suggest:</Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Men</Text> should aim for about{" "}
            <Text style={styles.bold}>3.7 liters (125 oz)</Text> of water per
            day.
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Women</Text> should aim for about{" "}
            <Text style={styles.bold}>2.7 liters (91 oz)</Text> per day.
          </Text>
          <Text style={styles.paragraph}>
            Remember, this includes water from all sources—foods like fruits and
            vegetables and drinks like tea or coffee also contribute to
            hydration. But water is your most effective and efficient hydration
            source.
          </Text>

          {/* Section: Signs of Dehydration */}
          <Text style={styles.sectionTitle}>Signs of Dehydration</Text>
          <Text style={styles.paragraph}>
            Dehydration can sneak up on you. The symptoms might not always be
            obvious, but they can affect your physical and mental performance.
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Fatigue or feeling sluggish</Text>
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Dry mouth or dry skin</Text>
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Headaches or dizziness</Text>
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Craving sugar or salty foods</Text>
          </Text>
          <Text style={styles.paragraph}>
            If you’re experiencing any of these, it could be a sign that you
            need to drink more water. Staying hydrated can help prevent these
            issues and keep you feeling your best.
          </Text>

          {/* Section: Making Hydration Fun and Easy */}
          <Text style={styles.sectionTitle}>Making Hydration Fun and Easy</Text>
          <Text style={styles.paragraph}>
            Drinking water doesn’t have to be boring! There are plenty of ways
            to make it tasty and enjoyable, which makes it easier to remember to
            drink throughout the day.
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Infuse your water</Text> with mint,
            lemon, or berries to give it a refreshing twist. 🍋🌿
          </Text>
          <Text style={styles.bullet}>
            • <Text style={styles.bold}>Hydrating foods</Text> are another great
            way to up your water intake. Foods like cucumbers, watermelon, and
            oranges are packed with water and can help keep you hydrated. 🍉🍊🥒
          </Text>

          {/* Section: Hydration and Fat Burning */}
          <Text style={styles.sectionTitle}>Hydration and Fat Burning</Text>
          <Text style={styles.paragraph}>
            Water is not just about keeping your body functioning—it also plays
            a role in fat burning! Staying well hydrated supports your
            metabolism, helping your body burn calories more efficiently.
          </Text>
          <Text style={styles.paragraph}>
            Plus, drinking water before meals can help with appetite control,
            potentially leading to reduced calorie intake. For those looking to
            shed some pounds, staying hydrated can give you a helpful edge in
            your fat-burning journey.
          </Text>

          {/* Section: Conclusion */}
          <Text style={styles.sectionTitle}>Conclusion</Text>
          <Text style={styles.paragraph}>
            Water is truly a secret weapon for overall health, influencing
            everything from your metabolism and digestion to skin health and
            mental focus. By ensuring you’re drinking enough water every day,
            you’ll feel more energized, focus better, and even support your
            weight loss goals.
          </Text>
          <Text style={styles.paragraph}>
            Don’t forget to make hydration fun by infusing your water with
            flavors like lemon or mint, or eating hydrating foods like cucumbers
            and watermelon. So, next time you reach for a drink, choose
            water—it’s the easiest, most effective way to keep your body running
            at its best. 💧
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  articleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 15,
    padding: 8,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  contentBox: {
    backgroundColor: "#1C1C1C",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    marginTop: -20,
    minHeight: "100%",
    display: "flex",
  },
  title: {
    fontSize: 18,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    width: "80%",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 33,
  },
  body: {
    fontSize: 13,
    fontFamily: "LexendRegular",
    color: "#ccc",
    lineHeight: 22,
    textAlign: "justify",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    color: "#fff",
    fontFamily: "Lexend",
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 22,
    marginBottom: 12,
    color: "#fff",
    fontFamily: "Lexend",
  },
  bullet: {
    fontSize: 13,
    marginLeft: 16,
    marginBottom: 8,
    color: "#fff",
    fontFamily: "Lexend",
  },
});
