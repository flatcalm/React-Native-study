import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    // react-native는 스타일 상속의 개념이 없습니다.
    // bind()는 표준 JavaScript 함수로, 나중에 실행할 함수를 미리 조정할 수 있게 합니다.
    // bind에 제공되는 첫번째 인수는 곧 실행할 함수의 this 키워드로 설정됩니다.
    // 두번째 인수는 지정한 함수에 전달할 값을 세팅하면 됩니다.
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressData) => pressData && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
