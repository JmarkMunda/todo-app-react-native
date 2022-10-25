import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  StyleProp,
} from "react-native";
import { ACTIONS } from "../reducer/reducer";
import { ITaskProps } from "./task.interface";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Task(props: ITaskProps) {
  const { data, dispatch } = props;

  const handleDeleteTask = () => {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: data.id } });
  };

  const handleCompletedTask = () => {
    dispatch({ type: ACTIONS.MARK_TODO, payload: { id: data.id } });
  };

  return (
    <TouchableNativeFeedback onPress={handleCompletedTask}>
      <View style={[styles.item, data.completed && styles.completedTask]}>
        <View style={styles.itemLeft}>
          <TouchableOpacity style={styles.square}></TouchableOpacity>
          <Text
            style={[
              styles.itemText,
              data.completed && styles.completedTaskText,
            ]}
          >
            {data.title}
          </Text>
        </View>
        <TouchableOpacity onPress={handleDeleteTask}>
          <AntDesign size={20} name="delete" />
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: { maxWidth: "80%" },
  // Conditional Styles
  completedTask: {
    opacity: 0.4,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
  },
});
