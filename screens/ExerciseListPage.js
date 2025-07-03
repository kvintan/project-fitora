import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

const exercises = [
  {
    id: '1',
    title: 'Upper Body',
    image: require('../assets/upper-body.png'),
    subExercises: [
      { id: '1-1', title: 'Pull Up', image: require('../assets/upper-body.png') },
      { id: '1-2', title: 'Push Up', image: require('../assets/push-up.png') },
    ],
  },
  {
    id: '2',
    title: 'Lower Body',
    image: require('../assets/lower-body.png'),
    subExercises: [
      { id: '2-1', title: 'Squat', image: require('../assets/upper-body.png') },
      { id: '2-2', title: 'One-Arm Deadlift', image: require('../assets/one-arm-deadlift.png') },
      { id: '2-3', title: 'Deadlift', image: require('../assets/deadlift.png') },
      { id: '2-4', title: 'Single Dumbbell Squat', image: require('../assets/single-dumbbell-squat.png') },
    ],
  },
  {
    id: '3',
    title: 'Abs & Core',
    image: require('../assets/abs-core.png'),
    subExercises: [
      { id: '3-1', title: 'Knee Raises', image: require('../assets/knee-raises.png') },
      { id: '3-2', title: 'One-Arm Deadlift', image: require('../assets/one-arm-deadlift.png') },
      { id: '3-3', title: 'Deadlift', image: require('../assets/deadlift.png') },
      { id: '3-4', title: 'Side Bends', image: require('../assets/side-bends.png') },
      { id: '3-5', title: 'Weighted Crunches', image: require('../assets/weighted-crunches.png') },
      { id: '3-6', title: 'Russian Twist', image: require('../assets/russian-twist.png') },
      { id: '3-7', title: 'Weighted Leg Lifts', image: require('../assets/weighted-leg-lifts.png') },
      { id: '3-8', title: 'Mason Twist', image: require('../assets/mason-twist.png') },
    ],
  },
  {
    id: '4',
    title: 'Cardio',
    image: require('../assets/cardio.png'),
    subExercises: [
      { id: '4-1', title: 'One-Arm Deadlift', image: require('../assets/one-arm-deadlift.png') },
      { id: '4-2', title: 'Knee Raises', image: require('../assets/knee-raises.png') },
      { id: '4-3', title: 'Deadlift', image: require('../assets/deadlift.png') },
    ],
  },
  {
    id: '5',
    title: 'Stretching',
    image: require('../assets/stretching.png'),
    subExercises: [
      { id: '5-1', title: 'Side Bends', image: require('../assets/side-bends.png') },
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
            isLast && expandedId !== item.id && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
            styles.card,
          ]}
          onPress={() =>
            item.subExercises.length > 0
              ? toggleExpand(item.id)
              : navigation.navigate('Details', { title: item.title })
          }
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <View style={[styles.arrowContainer, expandedId === item.id && { transform: [{ rotate: '90deg' }] }]}>
            <Text style={styles.arrow}>{'>'}</Text>
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
                onPress={() => navigation.navigate('Details', { title: sub.title })}
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
        onPress={() => navigation.navigate('WorkoutPage')}
        style={styles.backButton}
      >
        <Image
          source={require('../assets/backButton.png')}
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
    backgroundColor: '#0f0f0f',
    paddingTop: 40,
  },
  header: {
    fontSize: 23,
    fontFamily: 'UnboundedSemiBold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  groupContainer: {
    marginBottom: 1,
  },
  cardBase: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    minHeight: 70,
  },
  card: {
    backgroundColor: '#373737',
  },
  subCard: {
    backgroundColor: '#5B5B5B',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontFamily: 'LexendBold',
  },
  subTitle: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    fontFamily: 'LexendBold',
  },
  arrowContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'LexendBold',
    lineHeight: 20,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 15,
    padding: 8,
    zIndex: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});
