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

export default function ArticleDetail({ route, navigation }) {
  const { title, image, content } = route.params;

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
          <Text style={styles.body}>{content}</Text>
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
  },
  title: {
    fontSize: 18,
    fontFamily: "Unbounded",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  body: {
    fontSize: 13,
    fontFamily: "LexendRegular",
    color: "#ccc",
    lineHeight: 22,
    textAlign: "center",
  },
});
