import { StyleSheet, View } from "react-native";
import defaultStyles from "../config/styles";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: defaultStyles.color.light,
  },
});

export default ListItemSeparator;
