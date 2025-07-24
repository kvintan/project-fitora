import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Statistic({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Statistic</Text>

      {/* Workout Progress */}
      <Text style={styles.sectionTitle}>Workout Progress</Text>
      <View style={styles.progressCard}>
        <Image
          source={require("../assets/statistic-chart.png")}
          style={styles.chartImage}
        />
        <View style={styles.progressTextWrapper}>
          <Text style={styles.percentText}>60%</Text>
          <Text style={styles.percentSub}>60% of weekly{"\n"}goal so far</Text>
        </View>
      </View>

      {/* Activity Summary */}
      <Text style={styles.sectionTitle}>
        Activity Summary <Text style={styles.sectionSub}>(Today)</Text>
      </Text>
      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Image
              source={require("../assets/statistic-steps.png")}
              style={styles.icon}
            />
            <Text style={styles.summaryValueSteps}>8,430</Text>
            <Text style={styles.summaryLabelSteps}>steps</Text>
          </View>
          <View style={styles.summaryItem}>
            <Image
              source={require("../assets/statistic-time.png")}
              style={styles.icon}
            />
            <Text style={styles.summaryValue}>1 h 25 min</Text>
            <Text style={styles.summaryLabel}>active time</Text>
          </View>
        </View>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Image
              source={require("../assets/statistic-calories.png")}
              style={styles.icon}
            />
            <Text style={styles.summaryValue}>820 kcal</Text>
            <Text style={styles.summaryLabelCalories}>calories</Text>
          </View>
          <View style={styles.summaryItemDistance}>
            <Image
              source={require("../assets/statistic-distance.png")}
              style={styles.icon}
            />
            <Text style={styles.summaryValue}>6.2 km</Text>
            <Text style={styles.summaryLabel}>distance</Text>
          </View>
        </View>
      </View>

      {/* Performance Metrics */}
      <Text style={styles.sectionTitle}>Performance Metrics</Text>
      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Image
            source={require("../assets/statistic-strength.png")}
            style={styles.metricIcon}
          />
          <Text style={styles.metricTitle}>Strength Core</Text>
          <Text style={styles.metricText}>
            <Text style={{ color: "#fff" }}>Max Weight Lifted:</Text>
            {"\n"}
            60 Kg
          </Text>

          <Text style={styles.metricText}>
            <Text style={{ color: "#fff" }}>Reps Completed:</Text>
            {"\n"}
            120 Reps
          </Text>

          <Text style={styles.metricText}>
            <Text style={{ color: "#fff" }}>Progress:</Text>
            {"\n"}
            +15% from last week
          </Text>
        </View>
        <View style={styles.metricCard}>
          <Image
            source={require("../assets/statistic-endurance.png")}
            style={styles.metricIcon}
          />
          <Text style={styles.metricTitle}>Endurance Core</Text>
          <Text style={styles.metricText}>
            <Text style={{ color: "#fff" }}>Longest Session:</Text>
            {"\n"}
            45 Min
          </Text>

          <Text style={styles.metricText}>
            <Text style={{ color: "#fff" }}>Avg Heart Rate:</Text>
            {"\n"}
            135 bpm
          </Text>

          <Text style={styles.metricText}>
            <Text style={{ color: "#fff" }}>Stamina Level:</Text>
            {"\n"}
            High
          </Text>
        </View>
      </View>
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
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    marginTop: "-4%",
    marginLeft: "-4%",
  },
  backIcon: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontFamily: "Unbounded",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: "5%",
  },
  sectionSub: {
    fontSize: 14,
    color: "#aaa",
    fontFamily: "Unbounded",
  },
  progressCard: {
    backgroundColor: "#393939",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    position: "relative",
    height: "23%",
  },
  chartImage: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    marginLeft: "-15%",
  },
  progressTextWrapper: {
    position: "absolute",
    right: 16,
    top: 16,
    alignItems: "center",
  },
  percentText: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginTop: "50%",
    marginLeft: "-60%",
  },
  percentSub: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Unbounded",
    textAlign: "center",
    marginTop: 4,
    marginLeft: -40,
    marginRight: 20,
  },
  summaryCard: {
    backgroundColor: "#393939",
    borderRadius: 12,
    paddingVertical: 20,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  summaryItem: {
    alignItems: "center",
    marginTop: "2%",
  },
  summaryItemDistance: {
    alignItems: "center",
    marginTop: "2%",
    marginRight: "7%",
    marginLeft: "-8%",
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 6,
    resizeMode: "contain",
    marginLeft: "-90%",
  },
  summaryValueSteps: {
    fontSize: 16,
    fontFamily: "Unbounded",
    color: "#fff",
    marginLeft: "10%",
    marginTop: "-40%",
  },
  summaryValue: {
    fontSize: 16,
    fontFamily: "Unbounded",
    color: "#fff",
    marginLeft: "10%",
    marginTop: "-30%",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#aaa",
    fontFamily: "Unbounded",
  },
  summaryLabelSteps: {
    fontSize: 12,
    color: "#aaa",
    fontFamily: "Unbounded",
    marginLeft: "-5%",
  },
  summaryLabelCalories: {
    fontSize: 12,
    color: "#aaa",
    fontFamily: "Unbounded",
    marginLeft: "-10%",
  },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 40,
  },
  metricCard: {
    backgroundColor: "#393939",
    borderRadius: 12,
    padding: 16,
    width: "48%",
  },
  metricIcon: {
    width: 36,
    height: 36,
    marginBottom: 10,
    resizeMode: "contain",
  },
  metricTitle: {
    fontSize: 13,
    fontFamily: "Unbounded",
    color: "#fff",
    marginTop: "-32%",
    marginLeft: "32%",
    fontWeight: "bold",
    position: "relative",
  },
  metricText: {
    fontSize: 12,
    color: "#bbb",
    fontFamily: "Unbounded",
    marginBottom: 4,
    marginTop: 5,
  },
});
