import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [todoGoals, setTodoGoals] = useState([]);

  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText)
    setEnteredGoalText(enteredText);
  };

  // 버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = () => {
    // console.log(enteredGoalText);

    // useState로 관리하는 상태 변수의 setter 안에 콜백 함수를 작성하면,
    // 그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달됩니다.
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='할 일을 입력하세요!'
          onChangeText={goalInputHandler}
        />
        <Button title='할 일 추가하기' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* alwaysBounceVertical = true : 스크롤할 항목이 없을때도 스크롤이 되는 것처럼 보임 (iOS 기본값) */}
        {/* ScrollView는 전체 화면이 렌더링 될 때 안의 항목들을 전부 렌더링합니다. 
            이로 인해, 성능의 저하가 발생할 수 있습니다. 
            (보이지 않는 영역까지 렌더링을 진행하기 때문에 목록이 많다면 로딩이 길어짐.) 
            FlatList는 보이는 영역만 일단 렌더링을 진행하고, 나머지 항목들은 
            스크롤 움직임이 발생하면 렌더링을 진행합니다. */}
        <FlatList
          data={todoGoals}
          renderItem={(itemData) => {
            return (
              // react-native는 스타일 상속의 개념이 없습니다.
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        >
          {/* FlatList에서는 map 사용이 불필요, 아래는 View, ScrollView일 때 사용한 코드 */}
          {/* {todoGoals.map((goal) => (  */}
          {/* <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View> */}
          {/* ))} */}
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
